# Traits of the project

Look at the project's own docs and batons, and the harness's memory and sessions for this project, as well as the
places named. "You" here is whoever will do the work, not only this session.

| Trait | Look at | Opens, when it holds |
|---|---|---|
| Existing docs, entry files or notes | `docs/`, `AGENTS.md`, `CLAUDE.md`, `private/`, root `.md` and `.txt` | [existing docs](a-project-with-existing-docs.md) |
| An older copy of this system | `AUTHORITY.md`, `DOCUMENTATION_SYSTEM.md`, no `docs/.system-source`. Compare them with `system/`: same, or edited | [existing docs](a-project-with-existing-docs.md) |
| Rules that live only in assistant memory | The harness's memory for this project | [existing docs](a-project-with-existing-docs.md) |
| The docs are the product | Few or no sources; a large documentation tree | [docs are the product](a-project-whose-docs-are-the-product.md) |
| A remote | `git remote -v`, the host's visibility if you can reach it. Treat an unreadable remote as public, and no remote as private | [public or shared](a-public-or-shared-project.md) |
| Used by someone other than the author, or by AI callers | Releases, a remote, an API or CLI for others, README addressed to others | [public or shared](a-public-or-shared-project.md) |
| Packaged or shipped | `files`, sdist, Docker, an app packager, zips | [public or shared](a-public-or-shared-project.md) |
| Other people deciding, or agents at once | Contributor docs, batons, rules and memory that mention them, `git worktree list`, session folders. One git identity proves nothing | [team or agents](a-team-or-several-agents.md) |
| A hook manager, a set commit style, PRs, submodules | `core.hooksPath`, `.husky/`, `lefthook.yml`, `.pre-commit-config.yaml`, `git log`, CI, `.gitmodules`, workspaces | [commit workflow](a-commit-workflow-or-repo-shape.md) |
| Tests, a live system, or real data | Test folders, CI, deploy configs, releases, docs that describe live use | [tests](a-project-with-tests-or-in-production.md) |
| One file, no git, or a loose folder | The folder's contents, `git rev-parse`, `git config user.name` | [small](a-small-or-unversioned-project.md) |
| Third-party or proprietary material | Reference folders, licences, `NOTICE`, download scripts, docs that name another product | [third-party](a-project-with-third-party-material.md) |
| Audit or retention duties | Docs that mention them, or others' personal, financial or health data handled by the project itself | [audit](an-audit-or-regulated-project.md) |
| Not Windows, another harness, another language | OS, `docskill` installed, harness config, the docs' language | [elsewhere](another-machine-harness-or-language.md) |

**On Windows**, take `windows-tooling` whole. Add `--scripts` only if the project starts Chrome or Edge with a new
profile.

**Other modules:** `registers` where decisions must last, concepts need a glossary or third-party material needs a record, and `runs-and-briefs` where agents run the
work.
