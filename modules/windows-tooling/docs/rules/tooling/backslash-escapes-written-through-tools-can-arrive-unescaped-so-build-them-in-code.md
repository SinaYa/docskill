# Backslash escapes written through tools can arrive unescaped, so build them in code

- Shell heredocs and scripted `replace` turn `\n` and other backslash escapes into real
  control characters. The file passes a syntax check and fails at run time.
- Prefer the Write and Edit tools for any content containing escapes.
- Text written through an agent's tools can lose its escapes. A doubled
  backslash in a Bash heredoc reached a Python script as one, so a replacement holding `"\n"`
  did not match. A backslash-u escape written with the Write tool reached the file as the
  character itself, so a regular expression of ranges was written as the characters.
- The same in data: a JSON file of Windows paths written through a Bash heredoc and `sed` came
  out with single backslashes, which is not JSON. The Write tool kept them doubled.
- Where code must hold a backslash escape, build it in the script (`chr(92) + 'u3000'`), or
  replace by line rather than by text holding backslashes.
- The Edit tool cannot type a control character either. Remove a stray one with a small
  script that asserts what it changed.
- Check the bytes afterwards: `git diff`, or print the line encoded as ASCII.
