# Check a page with headless Edge, since a hidden browser pane lays it out at zero size

- The app's browser pane, while hidden, lays pages out at zero size, and its screenshots time
  out; `get_page_text` still works there.
- Headless Edge takes screenshots of a served page or a local file:
  `msedge --headless=new --disable-gpu --hide-scrollbars --user-data-dir=<folder>
  --window-size=1440,900 --screenshot=<png> <url>`. Read the PNG to look at it.
- The `--user-data-dir` path must hold no space: a space splits the argument, and Edge stops
  with "Multiple targets are not supported in headless mode" and writes no file.
- [Seed that folder first](seed-every-fresh-chromium-profile-or-windows-locks-the-user-out.md),
  or the launch is a failed Windows logon.
- A window app's own page is reached through its debug port, where a script can evaluate,
  click and take screenshots.
