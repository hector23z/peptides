#!/usr/bin/env bash
# Watch an Orca terminal until the agent finishes (tui-idle) AND produced output files.
# Usage: watch_orca.sh <terminal_handle> <output_dir_or_file> [timeout_ms]
# Exit 0 = agent idle AND output modified since start, 1 = timeout, 2 = terminal gone, 3 = idle but no output changes
set -u
export PATH="$PATH:/c/Users/hecto/AppData/Local/Programs/orca/resources/bin"
TERM_HANDLE="${1:?terminal handle required}"
OUTPUT_PATH="${2:-}"
TIMEOUT_MS="${3:-7200000}"  # default 2h

# Record newest mtime of the output path at start
START_MARKER=$(mktemp)
if [ -n "$OUTPUT_PATH" ]; then
  find "$OUTPUT_PATH" -newer "$START_MARKER" 2>/dev/null > /dev/null  # no-op, just validate
fi
# use a reference file approach: touch marker BEFORE waiting; files newer than marker = produced during wait
touch "$START_MARKER"

echo "[watch] waiting for $TERM_HANDLE (timeout ${TIMEOUT_MS}ms, output: $OUTPUT_PATH)..."
orca terminal wait --terminal "$TERM_HANDLE" --for tui-idle --timeout-ms "$TIMEOUT_MS" --json 2>&1
RC=$?

if [ $RC -eq 0 ]; then
  # idle - now verify output was actually produced
  if [ -n "$OUTPUT_PATH" ] && [ -e "$OUTPUT_PATH" ]; then
    NEW_COUNT=$(find "$OUTPUT_PATH" -newer "$START_MARKER" 2>/dev/null | wc -l)
    if [ "$NEW_COUNT" -gt 0 ]; then
      echo "[watch] DONE: $TERM_HANDLE idle + ${NEW_COUNT} output file(s) changed"
      rm -f "$START_MARKER"
      exit 0
    else
      echo "[watch] IDLE but NO output changes in $OUTPUT_PATH (agent may be starting up or stuck)"
      rm -f "$START_MARKER"
      exit 3
    fi
  else
    echo "[watch] DONE: $TERM_HANDLE agent is idle"
    rm -f "$START_MARKER"
    exit 0
  fi
elif [ $RC -eq 1 ] || [ $RC -eq 124 ]; then
  if orca terminal list 2>/dev/null | grep -q "$TERM_HANDLE"; then
    echo "[watch] TIMEOUT after ${TIMEOUT_MS}ms (terminal still alive)"
    rm -f "$START_MARKER"
    exit 1
  else
    echo "[watch] terminal gone (closed or stopped)"
    rm -f "$START_MARKER"
    exit 2
  fi
else
  echo "[watch] unexpected exit $RC"
  rm -f "$START_MARKER"
  exit $RC
fi
