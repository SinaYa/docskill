# FOR-AGENTS.md carries only what changes what the calling AI does next

- The runbook is loaded into the calling AI's context. Every line must earn its tokens by
  changing a decision.
- Before adding a line, ask: does this change what the calling AI does next? A new failure
  word to branch on, a sharp edge or an absent capability does.
- Passive traits that work by themselves go in `README.md`, never in the runbook, not even
  as a one-line aside.
- How it is written: [say each thing once](the-runbook-says-each-thing-once-and-never-contradicts-itself.md),
  [lead with the costliest decision](the-runbook-leads-with-the-costliest-decision-and-gives-a-whole-worked-command.md).
