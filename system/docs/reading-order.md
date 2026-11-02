# Reading order

Order matters only here. Every other file is found by its name.

1. `docs/AUTHORITY.md`: highest authority.
2. `docs/user-quotes/`, in the order of `docs/user-quotes/order.md`: the user's own
   words. Where two conflict, the later one stands.
3. `docs/handoff/`: what has happened and where things stand.
4. `docs/batons/`: only when continuing a specific conversation or session.
5. `docs/rules/`: how to work. The file names state the rules.
6. `docs/plan/order.md`, when there is one: the next item is the first one, following the
   order files, that no handoff says is done. No plan folder means no work is decided yet.
7. Anything else in `docs/`, when the task needs it.

A folder that isn't there yet has nothing to read.

Read several files at a time:
[`rules/read-documentation-several-files-at-a-time-to-save-turns.md`](rules/read-documentation-several-files-at-a-time-to-save-turns.md).

Before writing, moving, or deleting documentation, read `docs/DOCUMENTATION_SYSTEM.md`.

After a context reset, read in this order. Then run `git status --short --branch` and
`git log --oneline -5` in the project and in `docs/` before changing files. A reset never
means the work is finished.
