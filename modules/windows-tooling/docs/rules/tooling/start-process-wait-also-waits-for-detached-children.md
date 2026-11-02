# `Start-Process -Wait` also waits for detached children

- PowerShell's `Start-Process -Wait` waits for the started process and every process it
  starts, even one started detached. A launcher that starts a long-lived program and exits
  then never returns, and the command hangs until its timeout.
- To wait for the launcher alone, start it through .NET and wait on that process:

~~~powershell
$psi = New-Object Diagnostics.ProcessStartInfo 'cmd.exe', '/c "launcher.cmd"'
$psi.UseShellExecute = $false; $psi.CreateNoWindow = $true
$p = [Diagnostics.Process]::Start($psi); $p.WaitForExit(15000) | Out-Null
~~~
