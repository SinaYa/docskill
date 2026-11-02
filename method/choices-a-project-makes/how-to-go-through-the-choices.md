# How to go through the choices

The shared rules are the defaults. Go through this before `bootstrap` or `adopt`, and change nothing while doing it.
Don't open secret files such as `.env`.

- Find the project's traits: [traits](traits-of-the-project.md). Open only the files they name. A choice you never
  open takes what the shared rules say.
- Settle each row as it says:
  - **Evidence:** settle it, and say what you found.
  - **Ask:** hold it for the questions.
- Before holding a question, test it: would either answer change what you or the next session do with this project's
  files, tests or rules? If not, don't ask. Say what you found instead. Merge rows that are one decision.
- Always hold one question, whatever the traits: does this project want the infinite session rule? It goes at the top of
  `AUTHORITY.md`, and has each session hand over from a baton at 70% context and continue in a new one. Recommend it
  when the work runs on Claude. On another harness, offer it with no recommendation. A yes means
  `bootstrap --infinite-session`, which needs batons, so it can't go with `--leave-out batons`.
- Ask once, in one message. For each question: what you found, the options, your recommendation.
- In the same message, report what evidence settled and on what evidence, so the user can overrule it, and what you
  will do. Then wait for the go-ahead, even with no questions. It covers any commit, so a commit is not a question of
  its own.
- An option marked *not built*: name it and offer what works, or stopping. Never improvise one. *By hand* means you
  can do it now, with no script behind it.
- Where the user told you in this conversation not to ask, change nothing, and leave what you held for when they're
  back. A note from earlier work doesn't count.
- Any new tracked file must pass the project's own checks.

A rule stays out only if you decide it can't apply to this project, or the user decides against it. Say which you left
out and why, so the user can overrule you. Anything not decided about, or that could become useful later, stays in. The
infinite session rule is the one exception: it goes in only on a yes.

What stays out takes with it anything that names it: its file or section. Where the
project does the opposite, that's a rule of its own, in its own folder, stating what it does.

Once `docs/` exists, write the traits and what was settled into `docs/project/choices-this-project-made.md`, each with
who settled it. Say what the project does, never what it rejected, so a rule left out isn't mentioned. What the user
answered about the project goes in `docs/user-quotes/` as they said it.

Come back when a trait changes, such as a project going public, gaining a team, or starting a second agent stream. Only
that trait's file is open again. A project already on the system takes the infinite session rule by copying that section
of `system/docs/AUTHORITY.md` into its own `docs/AUTHORITY.md`, and `refresh` keeps it from then on.

**How to leave a rule out:** `bootstrap --leave-out <rule>`, once for each. `<rule>` is a key from `scripts/rule-parts`, such
as `tests` or `numbering`, or a rule file's name. Nothing in the project records it, and links to it become plain text.
