# Check that relative links resolve after a docs change

- After writing, moving, renaming or deleting a docs file, check that every relative link in
  `docs/` still points to a file. A rename breaks the links to it silently.
- This is a check of the docs, not a test of the project.
- `docskill`'s `scripts/check-docs` checks them. Without it, on Windows, from the project root in
  PowerShell:

~~~powershell
Get-ChildItem docs -Recurse -Filter *.md | Where-Object { $_.FullName -notmatch '\\\.git\\' } | ForEach-Object {
  $f = $_
  foreach ($m in [regex]::Matches((Get-Content -Raw $f.FullName), '\]\(([^)#]+\.md)\)')) {
    if (-not (Test-Path (Join-Path $f.DirectoryName $m.Groups[1].Value))) { "BROKEN in $($f.Name): $($m.Groups[1].Value)" }
  }
}
~~~

- No output means every link resolves.
