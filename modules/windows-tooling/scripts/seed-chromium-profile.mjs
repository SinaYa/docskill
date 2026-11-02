// Chromium's password manager checks whether the Windows password is blank by signing in
// with an empty password, unless the profile's Local State already caches the answer.
// Every fresh --user-data-dir repeats the check, and each check is a failed Windows logon;
// enough of them lock the user's account. Copying the cached answer from the user's own
// browser skips the check.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const SOURCES = [['Google', 'Chrome'], ['Microsoft', 'Edge']]

export const seedChromiumProfile = (profileDir) => {
  if (process.platform !== 'win32' || !process.env.LOCALAPPDATA) return
  try {
    for (const parts of SOURCES) {
      const file = join(process.env.LOCALAPPDATA, ...parts, 'User Data', 'Local State')
      if (!existsSync(file)) continue
      const manager = JSON.parse(readFileSync(file, 'utf8')).password_manager
      if (typeof manager?.os_password_last_changed !== 'string') continue
      mkdirSync(profileDir, { recursive: true })
      writeFileSync(join(profileDir, 'Local State'), JSON.stringify({ password_manager: {
        os_password_blank: manager.os_password_blank === true,
        os_password_last_changed: manager.os_password_last_changed,
      } }))
      return
    }
  } catch { /* best effort: seeding must never fail a render */ }
}
