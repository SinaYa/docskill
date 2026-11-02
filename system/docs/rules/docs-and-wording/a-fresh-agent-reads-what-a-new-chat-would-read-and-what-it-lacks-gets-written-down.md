# A fresh agent reads what a new chat would read, and what it lacks gets written down

- The agent gets no other context, on a weaker model, so that missing context is harder to work
  around. It reads the entry chain and answers from the files alone: the phase, the first
  actions, what waits, what never to do, and what it could not determine.
- It checks every path, section and title the chain names, and every claim of state against
  the tools. A summary is not verified; only tool output counts.
- The check covers everything documented, not only the baton.
- The gaps it finds are written down, then the verdict is given: ready, or ready after fixes.
