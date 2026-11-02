# A worker verifies each proposal and hands back each item as done, changed or skipped

The proposals are claims, not orders: verify each against the code before applying it.
If an item turns out wrong, harder to read, or not output-identical, skip it and say why.
Treat odd existing code as intentional until evidence proves otherwise.

What the worker hands back:
- Each item: done / changed from the proposal (how) / skipped (why).
- `git diff --stat` of your worktree, and the net lines removed.
- The final result of the brief's check.
- Anything the next owner must know, such as items that span files which you left alone.
- Leave your changes uncommitted in your worktree.
