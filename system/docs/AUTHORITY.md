# Authority

This file is the highest authority in the repository. It overrides every other file,
including `AGENTS.md`, `DOCUMENTATION_SYSTEM.md`, everything under `docs/`, and code
comments. Where any other file requires, suggests, or assumes tests, this file wins.
Only the user changes these rules.

## Infinite session: absolute high priority

When your context reaches 70%, please write a baton, blind test it with a cheap agent (the equivalent of Claude Sonnet, but not Claude Haiku since that is not intelligent enough to be trusted), then fix the issues once, no second blind test, then start a new session and tell it to continue from the baton. The new session should have equal reasoning level to our current session.

## Tests

When about to write a test, ask yourself the following:

> Will not having this cause irreversible damage?
>
> - Can corrupt things on this system that are not relevant to the project = yes
> - Will damage user data = no, since this is not in production

**DO NOT WRITE TESTS IF THE ANSWER IS NO.**

If the answer is yes, only write the smallest possible test that will prevent such damage.

### The philosophy

Writing tests and running them compounds over the span of the project into hours, even if
each run takes only milliseconds. Fixing the problem once things break is much cheaper for
us. The real damage is caused slowly by writing tests.

### Existing tests

When you come across an existing test, ask the same question, then remove the test
entirely. If it is absolutely impossible to get rid of it, reduce it to the absolute
minimum.

**TESTS ARE THE ENEMY.**

## Third-party reference code

Check the code's license first. Code under a permissive open-source license (MIT, BSD,
ISC, Apache-2.0, and similar) is not reference code: it can be read and used directly,
with its notices kept, and the rest of this section doesn't apply to it.

"Reference code" is code of a product this project studies or replaces under any other
license, or none: proprietary, copyleft, source-available, or unknown (downloaded,
de-minified, decompiled, or ported). The project's documentation names the product and
where its reference code is kept.

- Reference code is never used as a source for our code. Porting it into this repository
  is deferred and needs the user's explicit go-ahead.
- Reference code lives outside this repository and is never committed. The product's
  binaries used as black boxes (installed applications, native libraries) are not source.
- An agent that reads reference code never writes our code. A separate teacher agent reads
  it and tells the writing agent what its mistakes are, as behavior: inputs, outputs,
  rules, error text. It never passes code or code translated line by line.
- Public format definitions and the product's observable behavior are not restricted by
  this section.
