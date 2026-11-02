# Before a new chat, the docs are ready for a memory wipe

- What must be written: something a fresh session gets wrong by acting reasonably.
- Do this unasked before a pause, a handoff or a likely compaction. Check, mechanically: every user message against `docs/user-quotes/`, every finished plan item against a handoff saying "done", code docstrings and comments against what changed, the links, and whether a bare "continue" has one answer without the baton.
- The docs then carry: a handoff of what was done, a baton for the current focus, the plan's state (which steps are done and which is next), and the commit hashes.
- Commit first, then write the baton and commit it inside `docs/`. Once the docs are written for a new chat, stop; work done
  after that needs them updated again.
- Then [a fresh agent reads them cold](a-fresh-agent-reads-what-a-new-chat-would-read-and-what-it-lacks-gets-written-down.md).
