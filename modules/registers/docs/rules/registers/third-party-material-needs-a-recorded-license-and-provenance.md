# Third-party material needs a recorded license and provenance

Harvest from primary sources first: immutable commits, then official pages with recordable asset URLs and terms. Third-party sources need an explicit license and provenance review.

Each admitted file records its source URL, immutable commit or asset URL, path,
retrieval time, size, SHA-256, license, and redistribution decision. Files without
redistribution permission may be listed as remote candidates but are never committed.
Respect robots, site terms, and rate limits; never use accounts, cookies, or
access-control bypasses.

A `PROVENANCE.md` beside the material says:
- What was copied from another project without editing that project: source, then where it went.
- What the user supplied: where from, version and SHA-256. It is extracted unchanged into an ignored folder and is not committed or published.
- A setup script reproduces the extraction. It checks the supplied archive hash and refuses to overwrite modified original assets.
