# Commit messages from PowerShell go through a BOM-free file

- Windows PowerShell puts a byte-order mark in front of text it pipes to `git commit -F -`,
  and the commit's subject then starts with an invisible character.
- Write the message to a file inside the repository's `.git` folder, UTF-8 without a mark,
  and commit from it:

~~~powershell
[IO.File]::WriteAllText("$PWD\.git\COMMIT_MSG_TMP", $msg, (New-Object Text.UTF8Encoding $false))
git commit -F .git/COMMIT_MSG_TMP
Remove-Item .git\COMMIT_MSG_TMP
~~~

- Inside `.git` keeps the path short ([long paths fail](keep-paths-short-windows-refuses-past-260-characters.md))
  and keeps the file out of the commit.
