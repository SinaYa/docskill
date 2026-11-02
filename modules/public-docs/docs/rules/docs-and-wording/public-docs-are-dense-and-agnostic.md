# Public docs are dense and agnostic

The tracked root docs (`README.md`, `FOR-AGENTS.md`, `LIMITATIONS.md`) are for using the
project, and are public.

- [Dense](dense-means-writing-more-efficiently-not-leaving-things-out.md).
- An instruction that holds for every case says so agnostically, never by listing today's
  ones. A placeholder such as `<url>` stands where a real example would date.
- Nothing private goes in a root doc. Development documentation lives in `docs/`, which
  never reaches the public repository
  ([pairing](../../architecture/git-hooks-and-the-docs-repository-pairing.md)).
- What the runbook may carry:
  [only what changes what the calling AI does next](for-agents-carries-only-what-changes-what-the-calling-ai-does-next.md).
