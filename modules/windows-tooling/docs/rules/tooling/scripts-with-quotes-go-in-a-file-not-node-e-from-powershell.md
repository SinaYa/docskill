# Scripts with quotes go in a file, not `node -e` from PowerShell

- Windows PowerShell strips or mangles double quotes inside an argument passed to a native
  program, so `node -e "<script with quotes>"` fails with a syntax error.
- Write the script to a `.mjs` file in the session scratchpad and run `node <file>`.
