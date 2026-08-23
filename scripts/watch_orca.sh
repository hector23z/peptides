#!/usr/bin/env bash
# Poller watchdog: monitors an Orca terminal + output dir.
# The codex/prime-agent TUI goes "idle" BETWEEN turns, so single-shot
# tui-idle is unreliable. This polls every 30s:
#   - output files newer than marker + terminal idle  -> DONE (exit 0)
#   - terminal idle for 3 consecutive polls with NO output changes -> DONE (exit 0, note in message)
#   - timeout -> exit 1
# Usage: watch_orca.sh <terminal_handle> <output_dir_or_file> [timeout_sec]
set -u
export PATH="$PATH:/c/Users/hecto/AppData/Local/Programs/orca/resources/bin"
TERM_HANDLE="${1:?terminal handle required}"
OUTPUT_PATH="${2:-}"
TIMEOUT_SEC="${3:-7200}"   # default 2h

START=$(date +%s)
MARKER=$(mktemp)
touch "$MARKER"
IDLE_STREAK=0

echo "[watch] polling $TERM_HANDLE (timeout ${TIMEOUT_SEC}s, output: ${OUTPUT_PATH:-none})..."

while true; do
  NOW=$(date +%s)
  ELAPSED=$((NOW - START))
  if [ "$ELAPSED" -ge "$TIMEOUT_SEC" ]; then
    echo "[watch] TIMEOUT after ${TIMEOUT_SEC}s"
    rm -f "$MARKER"
    exit 1
  fi

  # terminal still alive?
  if ! orca terminal list 2>/dev/null | grep -q "$TERM_HANDLE"; then
    echo "[watch] terminal gone (closed or stopped)"
    rm -f "$MARKER"
    exit 2
  fi

  # check output changes
  NEW_COUNT=0
  if [ -n "$OUTPUT_PATH" ] && [ -e "$OUTPUT_PATH" ]; then
    NEW_COUNT=$(find "$OUTPUT_PATH" -newer "$MARKER" 2>/dev/null | wc -l)
  fi

  # check idle
  IDLE_OUT=$(orca terminal wait --terminal "$TERM_HANDLE" --for tui-idle --timeout-ms 5000 --json 2>/dev/null)
  IS_IDLE=0
  echo "$IDLE_OUT" | grep -q '"satisfied": *true' && IS_IDLE=1

  if [ "$NEW_COUNT" -gt 0 ] && [ "$IS_IDLE" -eq 1 ]; then
    echo "[watch] DONE: idle + ${NEW_COUNT} output file(s) changed (${ELAPSED}s)"
    rm -f "$MARKER"
    exit 0
  fi

  if [ "$IS_IDLE" -eq 1 ] && [ "$NEW_COUNT" -eq 0 ]; then
    IDLE_STREAK=$((IDLE_STREAK + 1))
    if [ "$IDLE_STREAK" -ge 3 ]; then
      echo "[watch] DONE: idle for 3 consecutive polls without output changes (${ELAPSED}s) - agent finished or stuck"
      rm -f "$MARKER"
      exit 0
    fi
  else
    IDLE_STREAK=0
  fi

  sleep 30
done
