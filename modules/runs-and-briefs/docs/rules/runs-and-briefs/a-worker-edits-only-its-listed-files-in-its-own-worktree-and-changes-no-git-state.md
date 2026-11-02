# A worker edits only its listed files in its own worktree and changes no git state

- You own ONE git worktree: a detached checkout of the same commit as the main repo. Edit only the files your prompt lists, and only inside your worktree.
- Never edit the main tree or another worktree. You may read the main tree's docs.
- No git commands that change state: no commit, add, stash, checkout, restore, reset, rebase, worktree.
  `git status` and `git diff` in your worktree are fine.
- Match the surrounding code: its naming, comment density and idiom. Keep comments that explain why;
  update a comment when the code under it changes. Lines stay about as long as the file's others.
