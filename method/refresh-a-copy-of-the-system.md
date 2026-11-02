# Refresh a copy of the system

`docs/.system-source` holds the `docskill` commit a project copied. `scripts/refresh <project>`
compares three states of each shared file: the marker's version, the project's copy and the latest.
It changes nothing unless given `--apply`.

- `stale`: the copy matches the marker but not the latest. Offer the update.
- `missing`: a shared file that's new since the marker. It comes in unless it can't apply or the user
  declines it.
- `left-out`: a shared file the marker's commit had and the project lacks, so it was left out on
  purpose. Only counted, and never offered. `--apply --only <file>` brings one back.
- `retired`: gone from `docskill`, and the copy is unchanged. Offer to delete it.
- `local-change`: the copy differs from the marker. Show it to the user and offer to carry it up
  into `docskill`, or to keep it with `--keep <file>`, which ends the
  warning. `--apply` leaves it alone, and `--apply --only <file>` replaces it with the latest.
- `kept`: a local change the project keeps.
- `local-only`: the project's own file in a shared folder. Leave it; a project's rules go in other
  folders, so shared folders stay comparable.

Show the user the report before `--apply`, which copies the `stale` and `missing` files, deletes the
`retired` ones and moves the marker to the latest. `--only <file>` limits it to those files and leaves
the marker. It commits nothing; the next project commit pairs the docs through the hook.

A text part left out of a shared file, such as a section of `AUTHORITY.md`, stays out through an
update: its anchor is missing from the copy, so nothing has to list it. To bring one back, delete the
file and take it with `--apply --only <file>`.

With no marker, as in a project that copied the system by hand, everything is compared with the
latest, and any difference shows as `local-change`. `--apply` alone then refuses. `--apply --mark` takes
what's missing and writes the marker, so delete afterwards anything decided out.
