# Pull Request Submission

Only act on this skill when the user explicitly asks for a pull request. Never open, propose, or push a new PR on your own initiative — not as a "helpful" follow-up to a finished change, not because the work looks done. (This bounds PR creation only; it does not change how you commit to a branch.) When the user does ask, follow this flow.

## Branch from the target

Branch from the PR target (`master` unless stated otherwise); never commit to the target directly. Name the branch to reflect the change: `feat/<scope>`, `fix/<scope>`, `chore/<scope>`, `ci/<scope>`, `docs/<scope>`.

## Group changes into logical commits

Group changes into logical commits — one per coherent unit, not a single mega-commit when the diff is large. Use the repository's `type(scope): subject` Conventional Commits style; observed types are `feat`, `fix`, `perf`, `chore`, `test`, `docs`, and observed scopes include `native`, `typia`, `website`, `interface`, `mcp`, `deps`. Run `pnpm format` before each commit (see `.codex/skills/development/SKILL.md` § Work Rules). Merged PR commits carry the `(#<number>)` suffix; GitHub's squash-merge appends that number, so you don't write it yourself.

If the change touches `packages/typia/native`, the same PR must bump the `typia` package version (see `.codex/skills/development/SKILL.md` § Change Integrity).

## Write the PR body at open

Write the PR body at open: intent, scope, deferred items, test plan. The repo's `PULL_REQUEST_TEMPLATE.md` asks you to test the change with `pnpm build` and `pnpm test` and to add a unit test for any new feature. Treat the body as the PR's historical intent statement. Don't rewrite it on every follow-up push — subsequent CI fixes, newly-found design issues, and deferred-item promotions go in `gh pr comment`. The comment thread is the PR's chronology.

## Watch checks after every push

CI runs as path-filtered GitHub Actions workflows: `build` (`pnpm build`), `test` (`pnpm test`), `spell-check` (typos), `experiments` (tarball smoke test), and `website` (Next.js build, and on a `master` push, deploy). After every push, watch `gh pr checks <PR>` with the Monitor tool until each check settles. Don't poll manually; the notification arrives when transitions complete. On failure, fetch the job log via `gh api repos/<owner>/<repo>/actions/jobs/<job-id>/logs` (returns the full log when `gh run view --log-failed` is empty), diagnose, fix in place, push as a new commit, and let the monitor resume.

## Hand back without merging

The agent does not merge, squash-merge, or rebase the target branch. Hand back to the user when all checks pass, or when the user has acknowledged a known-failing check.

## Release flow (reference)

Publishing is automated and not part of opening a PR. Pushing a git tag triggers `release.yml`: `publish` runs `pnpm package:latest` to npm with provenance, `release` generates GitHub release notes via `changelogithub`, and `website` rebuilds and redeploys the docs. `pnpm package:next` (via `next.bash`) publishes a `next`-tagged prerelease without committing or tagging. Don't run these unless the user explicitly asks for a release.
