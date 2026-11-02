# A doc check names its kinds of finding, most severe first

Kinds, most severe first:

1. **Model** — contradicts the user's decisions or words (precedence: their words → the documentation → anything else). Cite it.
2. **Contradiction** — two places in the documentation that cannot both be true, inside your set
   or between your set and a place it cites or restates. Read the cited place before reporting.
3. **Mark** — the AI's conclusion stated without its mark, or the mark on the user's own words.
4. **Reference** — a cited section, rule, question or title that does not exist or
   says something else. Check every citation in your files by script, and read the load-bearing ones.
5. **Word** — a banned or ambiguous word.
6. **Unusable** — something the doc's reader could not act on: an undefined term, a value the text promises and does not give.
7. **Gap** — something they need that the documentation does not say, and that no list of open or deferred items holds. Grep the term across all of the docs first.
8. **Outside** — anything a reader holding only the handed-over docs could not follow: a citation of a working file or folder, or text that assumes the working conversation.

**Not findings:** style preferences, rewording for taste, new features, items openly listed as open.
