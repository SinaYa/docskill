# A usage guide is word-dense and easy to digest, with no prose or bloat

A help and usage guide is an md file, word-dense and easy to digest, with no
prose or bloat.

- Holds for any guide written for a project's users: at the project root, linked from
  `README.md`.
- Headings, short bullets, tables and code blocks; a line says one fact.
- No introduction, no "this guide", no history, reasons or internals, nothing said twice.
- Taken from the tool itself (its help, then its code), never from memory: every command, flag,
  default, output form and exit code.
- A change to what the guide describes updates it in the same commit.
- A minimal guide of the essentials only, under 20 lines, in a file of
  its own; a tool its users learn from its help needs no long read.
