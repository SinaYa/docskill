# A commit workflow or repo shape

| You found | What to settle | Who | What works |
|---|---|---|---|
| A hook manager | Chain into it, change its folder, or commit docs by hand | Ask | `--no-hook`: *built*. Chaining into the manager: *by hand* |
| Squash or server merges | The hook doesn't fire for them, so name who commits the docs | Ask | *By hand* |
| A protected branch, a commit lint or a commit style | Run `bootstrap` without `--commit`, and commit in the project's style on the right branch | Evidence | *By hand* |
| A monorepo or workspaces | Docs at the root. Per package: *not built*, so say so | Evidence | *Built* |
| Submodules or a nested repo | Which repo holds the docs. A commit elsewhere never pairs | Ask | *By hand* |
