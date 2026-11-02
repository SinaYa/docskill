# Keep paths short: Windows refuses past 260 characters

- Folder creation and many programs (`git commit -F`, `CreateDirectoryW`) fail on paths
  longer than 260 characters, with errors such as "Filename too long" or "cannot find the
  path".
- An agent's session scratchpad can sit under a temporary folder whose path is already near that
  limit. A folder made inside it, or a file a program must open from it, can fail.
- For a throwaway data folder, a test home or a commit message file, use a short path inside
  the project (git-ignored) or inside `.git`.
