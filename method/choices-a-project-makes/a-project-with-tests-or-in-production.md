# A project with tests, or in production

| You found | What to settle | Who | What works |
|---|---|---|---|
| Tests | Follow `AUTHORITY.md`'s tests section, or keep the tests. If kept, that section stays out of this project's copy, and any "tests must pass before committing" becomes a rule in a project folder under `docs/rules/`. Never carry on while the next session would delete what the user wants kept | Ask | `--leave-out tests`: *built* |
| A live system or real data | The tests section's "not in production" is untrue here. Say so, with the same options | Ask | `--leave-out tests`: *built* |
| A requirement that tests pass before committing | Leave the code and CI alone until the user answers | Evidence | *By hand* |
