# A doc check fixes the smallest thing in its own files and reports one table

- The docs are split into sets, one agent each. Each reads every file in your set, in full.
- The last pass before handing docs over: **This pass has no cap: report and fix everything you find in your set.**
- The smallest change that removes the problem.
- A **gap**: decide and write it where it plainly follows from the decided models or the run's decisions; otherwise do not write it: mark the row with the question, one example, and why it needs more than following the models.
- A fix in **another set's files**: do not make it; mark the row with the exact fix. The lead routes it.
- Other sets work at the same time: touch nothing outside your files.
- The report: one line saying what was read and how references were checked, then a table: `| # | kind | where (file:line or section) | the problem in one line | the fix in one line | status |`.
- A budget of tool calls. If you run out, stop and name the files or kinds not finished.
- The final message: counts by kind and by status, the three most serious, the validation output, anything not finished.
