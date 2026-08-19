#!/usr/bin/env bash
# Watch an Orca terminal until the agent finishes (tui-idle) or times out.
# Usage: watch_orca.sh <terminal_handle> [timeout_ms]
# Exit 0 = agent idle (done), 1 = timeout, 2 = terminal gone
set -u
export PATH="$PATH:/c/Users/hecto/AppData/Local/Programs/orca/resources/bin"
TERM_HANDLE="${1:?terminal handle required}"
TIMEOUT_MS="${2:-7200000}"  # default 2h

echo "[watch] waiting for $TERM_HANDLE (timeout ${TIMEOUT_MS}ms)..."
orca terminal wait --terminal "$TERM_HANDLE" --for tui-idle --timeout-ms "$TIMEOUT_MS" --json 2>&1
RC=$?
if [ $RC -eq 0 ]; then
  echo "[watch] DONE: $TERM_HANDLE agent is idle"
elif [ $RC -eq 124 ] || [ $RC -eq 1 ]; then
  # check if terminal still exists
  if orca terminal list 2>/dev/null | grep -q "$TERM_HANDLE"; then
    echo "[watch] TIMEOUT after ${TIMEOUT_MS}ms (terminal still alive)"
    exit 1
  else
    echo "[watch] terminal gone (closed or stopped)"
    exit 2
  fi
else
  echo "[watch] unexpected exit $RC"
  exit $RC
fi
exit 0
