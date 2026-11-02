# Git hooks and the docs repository pairing

`core.hooksPath` points at `.githooks/`. A fresh clone sets it once with
`git config core.hooksPath .githooks`. `.gitattributes` keeps the hooks LF, since a CRLF
checkout breaks them.

**`post-commit`** pairs the docs repository with the project commit. `docs/` is git-ignored
by the project and is a git repository of its own. After each project commit, when
`docs/.git` exists and `docs/` has changes, the hook commits all of them there with the
message `<project> <short hash>: <subject>` and a body naming the full hash. It unsets
the git variables the commit handed it first, so its commands act on the docs repository.
It does nothing in a public clone (no `docs/.git`) or when nothing changed, and if the docs
commit fails it says so on stderr without failing the project commit. A merge does not run
it (git runs `post-merge` instead), so docs that go with a merge are committed by hand.

Docs-only changes are committed inside `docs/` directly. The documentation system that
governs `docs/`: [`../DOCUMENTATION_SYSTEM.md`](../DOCUMENTATION_SYSTEM.md).

`AGENTS.md` and `CLAUDE.md` at the project root are git-ignored entry pointers into
`docs/`; nothing private goes in the tracked root docs.
