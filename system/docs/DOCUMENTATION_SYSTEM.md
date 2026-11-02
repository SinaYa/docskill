# Documentation system

This file describes the documentation system and is none of its kinds of file. It is the
only place these guidelines live, and `AUTHORITY.md` outranks it.

**Layout.** All documentation lives in `docs/`, including `docs/AUTHORITY.md` (the
user's rules, highest authority) and this file.
- `docs/` is git-ignored by the project and is a git repository of its own, so nothing in
  it can reach the public repository while the docs keep their own history. The tracked
  hook `.githooks/post-commit` commits everything changed under `docs/` right after each
  project commit, citing that commit's hash and subject: each docs commit names the
  project change it went with. Commit docs-only changes inside `docs/` directly, with a
  subject that states what changed in the docs; the hook's `<project> <hash>:` form is only
  for commits paired with a project commit.
- `docs/.gitattributes` holds `* text=auto eol=lf`, so the docs keep LF line ends on every
  machine.
- At the project root, git-ignored: `AGENTS.md` (entry pointer) and `CLAUDE.md` (the
  same pointer, for agents that read that name). They stay out of the public repository
  because they can leak what was not meant to be public.
- Tracked at the root, because they are for using the project, not developing it:
  `README.md`, and any other file written for the project's users rather than its
  developers. Nothing private goes in them.

**Kinds of file.**
- **Handoff** (`docs/handoff/*-handoff.md`): a handoff as any AI would write one when
  asked, split into bite-sized files. The content is open; whatever a successor needs
  about the project. Say that planned work was done; never restate the plan. The only
  exclusion is baton material. A handoff's name states its finding or state as a sentence
  (`harnesses-shipped-and-how-each-was-verified-handoff.md`), never only a topic.
- **Baton** (`docs/batons/*-baton.md`). **Aim: hold things that are currently good to
  have in context but, in retrospect, would be only clutter.** A baton lets a continuation
  (after context compaction, in a new chat, or with another AI) resume with the same
  situational awareness. Its content is open. Examples: how to speak to the user, how
  the user reacted to earlier approaches, fine detail on the current focus. A handoff
  treats topics evenly; a baton may zoom in. A baton may be as large as needed and is
  exempt from the size rule. Nothing may assume it survives: whoever picks it up may or
  may not delete it.
  - Named `continue-<what>-with-this-user-baton.md`; its title starts with `Baton:`.
  - It opens with a `## First` section: follow `docs/reading-order.md` before it; nothing in
    it is a rule, and it may be deleted; where the conversation stands and what is pending.
    Then whatever the continuation needs, such as how the user wants work done right now.
- **Rules** (`docs/rules/`): how to work. The name states the rule. Shared rules travel with this
  system, and a project keeps them unless, at setup, one was found unable to apply or the user
  decided against it: the files directly in `docs/rules/` and the
  folders `docs-and-wording/`, `working-with-the-user/` and `tooling/`, and any a module adds. A project's own
  rules go in other folders.
- **Plan** (`docs/plan/`): what should happen. Plan items stay in place once finished;
  nothing moves between plan and handoff. Order files set the sequence. The next item is
  the first one in an order file that no handoff says is done.
- **Project** (`docs/project/`), **architecture** (`docs/architecture/`): what the
  project is and where the code lives. `docs/project/choices-this-project-made.md` holds this
  project's traits and what was settled at setup.
- **Reports** (`docs/reports/<topic>/`): context generated along the way and kept to look
  back on, such as agent reviews and research. A report is frozen: written once, never
  updated, exempt from the size and one-fact rules. It is not an instruction; verify
  anything taken from it against the code. Each topic has a folder named for it
  (`reports/regression-hunt/`). What was learned by investigating other projects is a
  report too. Generated evidence is script output, not documentation.
- **User quotes** (`docs/user-quotes/`): the user's own words, quoted so their intent
  survives across sessions. They outrank every other file in `docs/`; `AUTHORITY.md`
  outranks them.
  - **Exact.** Copy the words as written. The only change is fixing the user's spelling:
    a misspelled or mistyped word becomes the word clearly meant. Grammar, punctuation,
    capitalization, word choice and order stay as written.
  - **Trimmed.** A part that is not about the project, or is a one-time instruction with
    no bearing on later sessions, is cut and replaced by `[...]`. The rest of the
    paragraph stays intact. The user's own `...` stays as written.
  - **About the project.** Only remarks about the project are recorded.
  - **The user's own.** Words the user relays from someone else are written as that
    person's, never as the user's own.
  - **Ordered.** One quote per file, or a group of quotes said one after another on one
    subject; the name states what they say. `docs/user-quotes/order.md` lists the files
    in the order the user said them, oldest first. Where two quotes conflict, the later
    one stands; the order decides, not the dates.
  - **Context.** Where a quote or group cannot be understood without the session, a
    `Context:` paragraph follows it: what it answered or referred to, very compact and
    word-dense, written fresh, never a copy of what the AI said. It is the only text in
    the folder that is not the user's own.
  - **Frozen.** A recorded quote is never paraphrased, merged into other words or edited.
    A change of mind is a new quote at the end of the order. Each file holds a title, the
    quotes in fences with the date each was said, and context where needed; nothing
    else. Exempt from the size and one-fact rules.
  - **Shape.** An H1 title; each quote in a `~~~text` fence (tildes, so the user's own
    backticks cannot end it) followed by `Said on YYYY-MM-DD.`; a cut part is a `[...]`
    line inside the fence; `Context:` comes last. `order.md` has the title
    `Order of the user's quotes`, the line "Oldest first. Where two quotes conflict, the
    later one stands.", then one link per file with the file's name as its text.
  - Record a quote as soon as the user says something that should outlive the session.
  - Never record secrets, such as an API key the user pasted.

**Names are the table of contents.** Use full descriptive kebab-case phrases. Folder and
file names together form the table of contents as a by-product. When a rule fits in a
name, the name states it. Keep no index files that list other files.

**Small.** One topic per file, aiming for under about 40 lines. Split a growing file into
a folder.

**One fact, one file.** Link to a fact; never repeat it.

**Links.** Between files in `docs/`, relative Markdown links from the linking file. Paths
into the project (code, `README.md`) go in backticks, not links: they are outside the docs
repository. After a docs change, check the links resolve:
[rule](rules/docs-and-wording/check-that-relative-links-resolve-after-a-docs-change.md).

**No numbering** in names or headings unless order is required for proper use. Then list
the names in a separate order file (e.g. `docs/reading-order.md`,
`docs/plan/order.md`), so reordering never renames a file or breaks a link.

**No counts or dates in living files.** Point to the generated source
instead: name the command that gives the current number (`git log --oneline -5`). Dates
belong in commit messages. Facts about frozen inputs may be stated.

**Update or delete; never stack notes.** No "superseded" banners. Retire a file by
deleting it; Git history keeps it. Verify anything recovered from history against code.

**No worklogs.** The commit message is the log; handoff files hold the state.

**Style.** Plain, direct, short sentences. State the fact or rule, not its history; a reason is a
fact and stays.

**Bootstrapping a project onto this system.**
- Go through `docskill`'s `method/choices-a-project-makes/` first.
- Copy from `docskill`: `docs/AUTHORITY.md`, this file, `docs/reading-order.md`,
  `docs/.gitattributes` and the shared rules (see **Rules**). Never copy another project's
  handoffs, batons, plans or reports.
- Write the `docskill` commit into `docs/.system-source`, so a later refresh can tell a stale
  copy from a local change.
- `docskill` is the repository of this system, https://github.com/SinaYa/docskill. Its
  `scripts/bootstrap` does these steps and its `scripts/refresh` compares a copy.
- `git init` inside `docs/`, then commit the copy there.
- In the project: copy `.githooks/post-commit`, run `git config core.hooksPath .githooks`
  (every clone needs it), and git-ignore `docs/`, `AGENTS.md` and `CLAUDE.md`.
- Write `AGENTS.md` and `CLAUDE.md` at the root as the entry pointers.
- Move any existing development docs into `docs/` by kind; frozen ones go to `reports/`. Keep
  all previous documentation archived until the user says the transfer is complete.
