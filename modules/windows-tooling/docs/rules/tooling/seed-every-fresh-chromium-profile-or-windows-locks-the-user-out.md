# Seed every fresh Chromium profile, or Windows locks the user out

Chromium checks whether the Windows password is blank by signing in with an empty
password. It skips the check only when the profile's `Local State` already holds the
answer. A fresh `--user-data-dir` has none, so every launch with one is a failed Windows
logon. A handful of those in a short window lock the user's account (`net accounts`
shows the threshold), and the user cannot sign back in until the lockout expires. The
script itself still succeeds, so nothing in the project shows the failure.

- Before launching Chrome or Edge with a new `--user-data-dir`, call
  `seedChromiumProfile(profileDir)` from `scripts/seed-chromium-profile.mjs`. A project that
  launches a browser gets that script with `bootstrap --scripts`; other code uses the copy in
  `modules/windows-tooling/scripts/` of `docskill`.
- This holds for throwaway code too: scripts written to the temp folder, one-off
  experiments, and snippets given to subagents. Put this rule in the prompt of any agent
  or workflow that may launch a browser.
- Do not replace seeding with one shared persistent profile. Parallel launches collide on
  it, and Chrome hands a second launch with the same profile to the running instance.
- Do not change the Windows lockout policy instead.
- Chromium rewrites `os_password_last_changed` slightly after launch. That is expected.
