# Decisions that keep their failures are add-only and state what they supersede

The one exception to [update or delete](../../DOCUMENTATION_SYSTEM.md), for a decision whose failed
alternative has lasting value. Everything else stays update or delete.

**Decisions are append-only.** An ADR (a decision record) is never rewritten. A reversal is a new ADR, and the old one stays — *"we tried the other thing and it did not work"* is most of the value these documents have. Supersession is stated in the frontmatter, `supersedes:` and `superseded-by:`, naming the file.

- In `docs/decisions/`, one file per decision, named as the decision. No number: order is not what you need from a decision, and `decided:` in the frontmatter says when if it ever matters.
- Sections: Decision, Why, What follows from it, What was decided along the way, Consequences.
- What came later goes under a last heading, Since — added, not rewritten. The text stays as written, because what a decision expected to cost is part of its record.

```
---
status: accepted
decided: <date>
covers: <paths>
supersedes: <file>
---
```
