# A project with existing docs

| You found | What to settle | Who | What works |
|---|---|---|---|
| Docs tracked in the project | Move them to a private nested repo, or keep them tracked. Keep them private if the project has a remote, since tracked, the user's words get published; with no remote, recommend moving unless the user chose tracked on purpose. Say what a move costs here: tracked files that link into `docs/` must change, worktrees have no `docs/`, and the files stay in history, tags and other branches. Rewriting those is the user's call | Ask | Either way `bootstrap` needs an empty `docs/`: follow the [adopt method](../adopt-a-project-that-already-has-docs.md). Move: *by hand*, then `bootstrap`. Stay: `bootstrap --tracked`, then sort the old docs back |
| `docs/` ignored, with no history | It's the only copy. Copy it aside before moving anything | Evidence | *By hand* |
| Docs on one branch only | Set up on that branch, and say so | Evidence | *By hand* |
| An older copy of this system | Mark it where it stands with `refresh --apply --mark` and take newer wording file by file, or re-adopt. If its docs are tracked too, this is one question with that row | Ask | *Built* |
| A tracked entry file with a usage part for callers | Move that part to a tracked `FOR-AGENTS.md` and the rest to `docs/`, or keep it. Only tools working in the repo read it | Ask | Move: *by hand*, then `bootstrap`. Keep: `--leave-out AGENTS.md`: *built*; `CLAUDE.md` then imports that guide, so add a line to it pointing at `docs/` |
| A tracked entry file for the project's own work | Sort it, and untrack it with a commit before `bootstrap`, which adds an ignored pointer | Evidence | *By hand*, then `bootstrap` |
| Tracked files that link into `docs/` | Change them with the move | Evidence | *By hand* |
| Another documentation system of the project's own | Sort it into the kinds, or leave it and add only what's missing | Ask | *By hand* |
| Add-only records, kept on purpose | Keep them as frozen reports, and write new decisions as living files; or take `registers`; or fold them in | Ask | *Built* |
| Numbers in names, cited only by the docs being sorted | Rename them by what they say, and fix the citations | Evidence | *By hand* |
| Numbers cited from code, other documents or people | Keep them | Evidence | `--leave-out numbering`: *built* |
| Batons or handoffs in another shape | Keep, convert by kind, or delete. If the names already fit, nothing to settle | Ask | *By hand*; `check-docs` fails the old shape |
| Logs or notes | Keep unchanged as frozen reports | Evidence | *By hand* |
| Code that writes into `docs/` | Leave the file there, with `<!-- Generated` in its first five lines | Evidence | *Built* |
| A published site in `docs/` | Rename its folder, with its config and CI, or don't adopt. Never keep private docs inside a published folder | Ask | Rename: *by hand*. Another name for private docs: *not built* |
| An external wiki | Link it, snapshot it as a report, or import the live part | Ask | *By hand* |
| An archive too large to walk | Check only what's being moved, and name what was left out | Evidence | *By hand* |
| Rules that live only in assistant memory | Write them into `docs/rules/` as they are, report them, and repoint memory that names a moved file | Evidence | *By hand* |
| A project's own rules where shared ones live | Move them to a project folder | Evidence | *By hand* |
| A project rule that disagrees with a shared or module rule | If it disagrees with the whole rule, the project's stands and the other stays out. If with one clause, keep the rule and say so in the project's own. Report it | Evidence | `--leave-out`: *built* |
| Personal paths or other projects' names in tracked docs | Report them | Evidence | Rewriting history is the user's call |
| Docs naming an old model, branch or commit trailer | Report it. The current session's attribution and branch stand | Evidence | *By hand* |
