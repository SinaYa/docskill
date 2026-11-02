---
name: docskill
description: Put a project on a shared documentation system (handoffs, batons, rules, plans and exact user quotes in a private docs/ repository), or keep one on it. Use when asked to bootstrap or adopt that system, check a project's docs, refresh its copy of the system, get docs ready for a memory wipe or new chat, or audit rules against the user's words. Not for writing a project's own handoffs or batons; the system's rule files already say how.
---

Scripts are in this skill's `scripts/` and run in POSIX `sh`; on Windows through Git Bash.

| Operation | Do |
|---|---|
| `bootstrap` | For a project with no docs yet; otherwise `adopt`. First follow `method/choices-a-project-makes/how-to-go-through-the-choices.md`. Then `scripts/bootstrap <project> [--commit] [--scripts] [--tracked] [--no-hook] [--infinite-session] [--leave-out <rule>]... [module ...]`. `--commit` makes a project commit, so use it only on the user's OK. `--scripts` adds a module's scripts to the project's tracked code, so use it only when the project needs them. |
| `adopt` | Follow `method/adopt-a-project-that-already-has-docs.md`, which starts with the choices and stops for the user's go-ahead. |
| `refresh` | `scripts/refresh <project>`, show the user the report, then `--apply` on their OK. `method/refresh-a-copy-of-the-system.md`. |
| `check` | `scripts/check-docs <project>`. |
| `ready` | Follow `system/docs/rules/docs-and-wording/before-a-new-chat-the-docs-are-ready-for-a-memory-wipe.md`. |
| `audit` | Follow `system/docs/rules/working-with-the-user/an-audit-re-reads-against-the-users-exact-words.md`. |

Modules: `public-docs` for a project with users or AI callers, `windows-tooling` for a project on Windows, `registers` where decisions must last or concepts need a glossary, `runs-and-briefs` where agents run the work.

A rule stays out of a project only if it can't apply there or the user decided against it. Everything else stays in, except the infinite session rule, which goes in only on the user's yes.
