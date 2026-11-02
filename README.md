# docskill

A Claude Code skill that puts a project on a documentation system an AI session can pick up cold: handoffs, batons,
rules, plans and the user's exact words, in a private `docs/` repository beside the code. Names are the table of
contents, and a new session reads what it needs instead of guessing what the last one knew.

## Install

```bash
git clone -c core.longpaths=true https://github.com/SinaYa/docskill ~/.claude/skills/docskill
```

Keep it as a git clone: the scripts read the system from its latest commit, and they stop without one. It needs Git and
`sh` (Git Bash on Windows). Update with `git -C ~/.claude/skills/docskill pull`.

## Use

Open Claude Code in your project and type `/docskill`, or ask in your own words:

| Say | What happens |
|---|---|
| "Put this project on the documentation system" | For a project with no docs. It settles what it can from the project, asks you the rest, then copies the system on your go-ahead. |
| "Adopt the documentation system" | For a project with docs. The same, and it sorts the old docs in. |
| "Check this project's docs" | Reports broken links, numbered names, secrets and a hook that isn't wired up. |
| "Refresh the docs system" | Shows what changed upstream, and applies it on your OK. |
| "Get the docs ready for a new chat" | Prepares the docs for a memory wipe. |
| "Audit the rules against my words" | Re-reads the rules against what you actually said. |

Nothing is committed in your project without your OK. By default the docs stay out of your project's repository, in a
repository of their own, paired with each project commit by a hook.

## Choices

The system's rules are defaults, and a project keeps them unless they can't apply there or you decide against them. Two
worth knowing before you start:

- **Tests.** `docs/AUTHORITY.md`, the highest authority in a project, tells agents not to write tests unless their absence
  could cause irreversible damage. Say so if your project keeps its tests, and that section stays out of its copy.
- **Infinite session.** You're asked whether to add a rule at the top of `AUTHORITY.md` that has a session write a baton
  at 70% context, blind test it with a cheap agent, fix what that finds, and continue in a new session. Recommended on
  Claude. It goes in only on a yes.

## Modules

| Module | For |
|---|---|
| `public-docs` | A project with users or AI callers |
| `windows-tooling` | A project on Windows |
| `registers` | Decisions that must last, a glossary, a record of third-party material |
| `runs-and-briefs` | Work run by agents |

## Limits

- Built and tried with Claude Code on Windows. The scripts are POSIX `sh`, but haven't been run on another platform.
- Docs per package in a monorepo aren't supported: keep them at the root.
- A very deep project folder can pass Windows' path limit. `bootstrap` refuses before changing anything.

## License

[MIT](LICENSE)
