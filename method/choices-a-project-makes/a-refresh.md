# A refresh

Opened by `refresh`, not by the traits.

| You found | What to settle | Who | What works |
|---|---|---|---|
| A local change to a shared file | Carry it up, or keep it | Ask | Carry: *built*. Keep: `refresh --keep`: *built* |
| A wish to take only part of an update | | Ask | `--apply --only <file>`: *built* |
| A shared file moved upstream | Delete the old copy | Evidence, then Ask | *By hand* |
| A rule that's new upstream | It comes in, unless it can't apply or the user declines it | Evidence, then Ask | *Built* |
| A rule the project left out | Not mentioned, and not offered again | Evidence | *Built* |
