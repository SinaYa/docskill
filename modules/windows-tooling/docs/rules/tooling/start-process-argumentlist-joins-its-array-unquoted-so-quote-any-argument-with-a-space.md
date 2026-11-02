# `Start-Process -ArgumentList` joins its array unquoted, so quote any argument with a space

- PowerShell's `Start-Process -ArgumentList @(...)` joins the array with spaces and quotes
  nothing. An argument holding a path with a space reaches the program as two arguments, cut at
  the space.
- What it cost: `"--user-data-dir=$s\prof"` with `$s` under a path with a space reached
  headless Edge cut off at the space, so Edge made its profile folder there.
- Wrap each such argument in quotes of its own: `"--user-data-dir=`"$s\prof`""`, or work in a
  folder with no space in its path, such as the scratchpad.
- An error naming more inputs than were given (headless Edge's "Multiple targets are not
  supported") means an argument was split. Before trying again, look for what the cut path made
  and remove it.
