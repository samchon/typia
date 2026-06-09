---
name: issue-pr-workflow
description: GitHub issue triage, .wiki handoff updates, branch-per-issue implementation, mandatory Research Review Round, CI gating, PR comments, and issue closure. Read before sweeping issues or running the issue-to-PR loop.
---

# Issue PR Workflow

Read before triaging GitHub issues into `.wiki`, implementing issue fixes, or running the branch-per-issue PR loop.

## Issue Triage

Use `gh` for GitHub issue and PR mutations; install or authenticate it when the environment requires it. Browser UI is only a fallback for read-only inspection when `gh` cannot provide the needed data.

Review open issues against current source, linked PRs, merged commits, and tests. If an issue is already fixed, invalid, unsupported by the target spec, or impossible after fact-checking, comment with the evidence, close it with the right `gh issue close --reason`, and remove it from `.wiki` entirely.

Keep `.wiki` as the live handoff state. It lists only open, actionable execution candidates; closed, rejected, resolved, duplicate, design-only, and speculative items must not appear there. For each remaining candidate, write the implementation outline, touched source areas, test plan, risk notes, and current blocking facts in Korean.

## One Issue Loop

Work one issue per branch from an updated `master`.

```bash
git checkout master
git pull --ff-only
git checkout -b fix/<issue>-short-name
```

Use PR and commit titles in the repository Conventional Commits style, such as `fix(typia): ...`, `feat(typia): ...`, or `feat(utils): ...`. Keep unrelated working-tree changes out of the branch and stage files explicitly when the tree is mixed.

Implement from source evidence, not from the issue text alone. Add tests that would fail without the fix, including negative or type-level cases where the bug is type-system behavior. Once the first coherent implementation and focused tests are locally green, commit, push, and open the PR immediately.

Before each commit, run the required formatter from `.codex/skills/development/SKILL.md`. If formatting dirties unrelated files, restore those unrelated files and keep the PR scoped.

## Review Gate

Before treating a PR as merge-ready, run `.codex/skills/multi-agent/SKILL.md` **Research Review Round** on the changed source, docs, and tests. Continue rounds while at least one validated improvement survives. Commit and push each accepted improvement as a small follow-up, then rerun local validation. Do not batch review fixes into a late super-commit.

The PR is merge-ready only after both gates pass:

- Research Review Round has no surviving improvement proposals.
- GitHub CI checks have completed successfully, ignoring only explicitly neutral/skipped checks.

Merge only when the active operator is allowed to merge by the current repository contract. Codex hands back after the review and CI gates pass when `.codex/skills/pull-request/SKILL.md` says not to merge.

## PR And Issue Closure

Open the PR with a complete body: changed behavior, root cause, validation commands, local limitations, and `Fixes #<issue>` when appropriate. Add an issue comment linking the PR and, for this TypeScript-Go / typia 13 batch, state that the fix will ship with the official typia 13 release after the TypeScript-Go official release.

When the fix is implemented and CI has passed, close the issue with `gh issue close --reason completed` and the same release-timing note. Do not leave closed issues in `.wiki`.

After the PR is merged by an allowed operator, return to `master`, pull, and start the next issue branch. Repeat until there are no actionable execution candidates left.
