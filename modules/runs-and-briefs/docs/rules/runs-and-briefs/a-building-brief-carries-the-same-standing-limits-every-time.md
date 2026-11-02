# A building brief carries the same standing limits every time

Settled by the assistant against the user's rules; it held through the autonomous run.

- Read first: `AUTHORITY.md`, `DOCUMENTATION_SYSTEM.md`, the plan item, the earlier
  handoffs, the design, the rules the item names, and the code it extends.
- Safety: the project's limits, such as no load, no lasting change, and system actions only report.
- Model: named on the spawn.
- Clean up: no process left running, nothing committed.
- Agents that run at once each get their own state folder, test server
  ports and scratch file names, and stop only the processes they started, by PID. Two
  agents sharing a scratch folder once stopped each other's server through one pid file.
- The agent does the work itself and spawns no agents of its own. A docs
  agent that spawned helpers handed back before they reported, its task half done.
- Scope: only the item; anything else is one line in the final report; a part that keeps
  failing is recorded as blocked.
- Output: the design updated where the build departed from it; a final report of at most 150
  words.
