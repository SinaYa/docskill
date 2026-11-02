# A public or shared project

| You found | What to settle | Who | What works |
|---|---|---|---|
| A way private files could ship: npm `files`, sdist, Docker `COPY .`, an app packager, zips | Report what would leak. Fix it on the user's OK | Evidence | *By hand* |
| Someone else runs it, or AI callers | Take `public-docs` whole, and name which rules don't fit. It assumes a CLI, and its install rule assumes a repo link | Evidence | *Built* |
| A guide generated or built into the CLI | Keep it. The module's hand-written runbook doesn't apply | Evidence | *By hand* |
| Outside contributors | Public developer docs: `CONTRIBUTING`, `CHANGELOG`, `SECURITY`. Their AIs never see `docs/` | Ask | *By hand* |
| Harness or model names in public docs | Keep them if the product is tied to them, and otherwise report them | Evidence | *By hand* |
