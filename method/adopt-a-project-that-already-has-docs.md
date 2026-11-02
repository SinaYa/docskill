# Adopt a project that already has docs

## Order

1. Go through the [choices](choices-a-project-makes/how-to-go-through-the-choices.md) first, which
   covers tests and what to leave out, and wait for the user's go-ahead.
2. With that go-ahead, commit the project. Move any old `docs/`, `AGENTS.md` and `CLAUDE.md` into
   `<project>-docs-archive` beside the project, never inside it, where a commit could take them. Untrack
   what was tracked and commit that, since `bootstrap --commit` wants an empty `docs/` and a clean index. Copy the
   system's files as they are with `scripts/bootstrap`, report that, and wait for the user's
   go-ahead before writing batons, handoffs or other docs.
3. Keep all previous documentation archived, not deleted, until the user says the transfer is
   complete. Close to no rewriting of content: what the user already reviewed moves unchanged.
4. Sort every fact as below, then run the coverage check.
5. Point the assistant's memory files at the living files, and code comments too where docs are
   tracked. Where they're private, a tracked comment names no docs path.
6. Remove any file about getting the documentation system working.

## Sorting

- Read it and sort every fact into one destination:
  - what happened: a handoff;
  - how to work, as a durable rule: `docs/rules/`;
  - what should still happen: `docs/plan/`;
  - what the project is, or where code lives: `docs/project/` or `docs/architecture/`;
  - already covered, superseded, or pure bookkeeping: nowhere.
- Before adding a file, check whether an existing one already holds the fact. Extend it
  or link to it; never duplicate.
- If a statement describes current code, confirm it in the code first.
- Drop it if it no longer holds.
- A tracked `AGENTS.md` written for the project's users: its usage part moves to a tracked
  `FOR-AGENTS.md`, linked from `README.md`. The rest sorts like any other fact.
- A file a script writes stays where the script writes it. With `<!-- Generated` in its first five
  lines, `check-docs` skips its size, date and count checks.

## Coverage check

- Walk every section of every archived file and find where its substance now lives, or
  decide it stays history only. `grep -n "^#"` lists the sections.
- Check that the user's exact words in the archive reached `docs/user-quotes/` exactly, and that nothing of the assistant's sits inside a quote.
- Check that no living file repeats a claim the archive itself withdrew.
- Done when every archived section is accounted for, the gaps are filled, and the user has seen the result.

One table per archived file: Section, Went to, Note. Mark GAP where substance had no home. Audit
the whole archive, not only the ranges named for each piece of work.

## Done when

- No file or folder name contains a number, and numbered lists appear only in order files.
- Public root docs and generated files may keep numbered lists: their steps need the order.
- A project that left the numbering rule out, or a frozen report, may keep numbers in names.
- No fact appears in two living files (spot-check the handoff areas).

Where renaming numbered files would break references the user cannot afford to re-review, every number already written stays, permanently, with the order held only in its reading-order file.
