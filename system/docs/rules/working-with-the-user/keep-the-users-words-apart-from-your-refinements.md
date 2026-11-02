# Keep the user's words apart from your refinements

- The user's decisions about the project keep their full wording in `docs/user-quotes/`.
  A rule file states them plainly, may quote them briefly, and says "The user's rule".
- A detail the assistant added and the user accepted, or that was settled while
  implementing, is marked *Refinement:* where it sits inside a user's rule.
- A refinement carries less weight. It is the first thing to revisit when a blind round
  or the user disagrees.
- Rule files without the user's mark were settled by the assistant against the user's
  rules. They stand unless the user objects.
- Never blend the assistant's wording into a sentence presented as the user's.
