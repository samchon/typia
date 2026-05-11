# Smoke

Validates the packed npm tarballs from `experiments/tarballs` in a fresh npm
consumer project.

The smoke test intentionally uses `npm`, not `pnpm`, after tarballs have been
built. It installs the packed `typia` package and verifies that `ttsc` can build
the published Go source plugin from `typia/native/cmd/ttsc-typia`.
