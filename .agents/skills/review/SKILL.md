---
name: review
description: Defines exhaustive solo review, Self-Review, and solo repository-wide issue-discovery rounds for typia. Use for every self-review or unqualified review request and as the default review mode inside issue campaigns. This skill never spawns review agents; use the multi-agent skill only when the user explicitly requests a team, parallel, or multi-agent review.
---

# Review

## Non-Negotiable Review Law

One reviewer performs every review in this skill from scratch over the entire declared surface. Do not spawn a subagent, delegate a concern, or load the discussion skill. Do not create a clone or worktree for solo review or Self-Review.

Choose the principled conclusion. Review duration, difficulty, and consequence surface are reasons to inspect more deeply and verify more carefully, never reasons to overlook a sound improvement, accept an unsupported claim, or lower the completion standard.

A complete round must satisfy all six rules:

- **Whole surface:** read every changed file and hunk. For issue discovery, audit the entire campaign scope. Never partition by file, package, concern, platform, or pass, and never substitute another reviewer's coverage.
- **Consequence surface:** inspect affected code paths, tests, generated artifacts, CI, packaging, documentation, and consumers. Trace side effects, state transitions, concurrency, platforms, boundaries, compatibility, and failure and recovery paths beyond the named symptom or diff.
- **Fresh start:** use the current state and repeat the whole inspection. Earlier rounds, sampled files, and a recheck of only the latest fix do not count as coverage.
- **Unlimited rounds:** whenever the reviewer applies an improvement or accepts a meaningful issue candidate, update the work and start another complete round. Stop only after a complete round produces nothing that survives verification.
- **One immutable state:** a round runs against one recorded state, dependency lock, provisioned workspace contract, supported environment contract, and mandatory test matrix. Issue discovery and committed pull-request review use an exact commit. A solo review records its exact starting diff and refreshes that snapshot after every edit; a review round must not race a source change. The [multi-agent review procedure](../multi-agent/review.md) states how a team shares one snapshot.
- **Auditable completeness:** the reviewer accounts for every tracked file and every mandatory public-operation, ownership, consumer, boundary, option, declaration-provenance, generated-artifact, packaging, and supported-platform matrix cell in the declared surface. Finding a candidate never ends or narrows the review. A skipped file, unprovisioned harness, unsupported claim, or unexecuted required cell makes the report `INCOMPLETE`, never `COMPLETE`.

## Self-Review

Self-Review and an unqualified review request use this solo workflow:

1. Establish the complete change surface, including the pull-request base-to-head diff and any uncommitted changes.
2. Perform one complete round under the Non-Negotiable Review Law. Include correctness and boundaries, Windows and POSIX behavior, concurrency and state, data loss and security, cache and recovery invariants, public API and compatibility, test isolation, CI and packaging, generated output, documentation, and migration effects.
3. Reproduce every suspected defect before accepting it.
4. Apply every sound improvement and run the narrowest verification authorized by the owning workflow.
5. If anything changed, restart at step 1 as a fresh full round.
6. Finish only when a complete round finds nothing to improve. Report the final clean round and every verification that could not run.

Self-Review does not authorize creating, pushing, updating, or merging a pull request. If the user separately requests one of those actions, follow the pull-request skill.

## Commit Early-Warning Pass

A commit early-warning pass is not a review under this skill. It is the read-only per-commit reader a solo campaign author runs over every landed commit while still implementing, required and defined by the [solo campaign development document](../issue-campaign/development.md#implement-and-write-tests).

It delegates nothing the Non-Negotiable Review Law governs. The law governs the author's own round, which still runs alone over the whole surface before merge under all six rules. One commit is not a declared surface, a reported candidate is not an accepted finding, and the passes do not add up to a round.

Never call the pass a Self-Review, and never report it as one. A reader who sees that name concludes the gate already ran, and the whole-surface round disappears without anyone deciding to drop it.

## Solo Issue Discovery Rounds

Use these rounds only through the solo issue-campaign skill.

1. Freeze one exact commit and record the dependency lock, provisioning command, and supported environment contract before starting. Derive that environment contract from package engines, public documentation, repository CI, peer requirements, published package behavior, and explicit user decisions; do not narrow it ad hoc, and treat an unresolved conflict as a blocker on `CLEAN`.
2. Inventory all tracked files, package and public API families, implementation owners, generated artifacts, test harnesses, workflows, documentation contracts, supported platforms, and open and closed issue or pull-request history before examining candidates. Reconcile that inventory with `git ls-files` and with the campaign's mandatory coverage matrix. A grep lens, a sampled file set, or a statement that the surface was reviewed is not coverage.
3. Audit the entire inventory and execute the whole mandatory matrix. Audit source, tests, documentation, CI, packaging, generated artifacts, platform behavior, upstream and downstream provenance, and history against the development skill's **Forbidden** section. Continue through the full inventory after finding a candidate.
4. Treat the matrix as a floor. Cover all applicable public operation families and direct, factory, and nested forms; equivalent TypeScript spellings, including aliases, interfaces, call and construct type literals, and classes; local, re-exported, module, package, user-global, default-library, ambient, and runtime-native provenance; union, intersection, generic, and transform-option interactions; static, dynamic, array, `any`, and `unknown` value contexts; positive, one-axis negative, boundary, malformed, maximum-width, one-past-boundary, and mutation controls; generated-byte and executed-runtime behavior; deterministic repeat emit; workspace, clean packed, and deployment consumers; and supported Node, module-resolution, operating-system, and CLI paths. Every interaction that reaches shared control flow is its own cell, and every positive cell has a one-axis negative twin. Run mutations only in a disposable checkout, keep the regression probe unchanged, and require the probe's canonical command to fail. When the round discovers a new owner, consumer, axis, or interaction, version and re-hash the canonical matrix and execute the added cells before the round can complete.
5. Record every raw candidate, killed hypothesis, command, and artifact in the campaign knowledge base with the exact commit, environment, matrix hash, and census results. The round is `COMPLETE` only when the full inventory and current matrix finished; otherwise it is `INCOMPLETE` and cannot support a `CLEAN` campaign state.
6. Reopen each candidate from primary evidence in a fresh state, reproduce it, verify ownership and provenance, trace its complete consequence surface, and compare existing issues and pull requests. Record accept, partial acceptance, rewrite, combine, split, reject, or defer with the supporting evidence, so a later round does not rediscover a rejected premise as new. Implementation mechanisms remain hypotheses.
7. If any meaningful candidate survives, begin another fresh full-scope round against the same frozen commit before publishing or implementing anything, and repeat until one round produces no surviving candidate. Discovery owns this loop; it never hands a partial candidate pool to publication or implementation because the first round already found work. A prior finding never permits narrowing the next round to its owner or neighbors.
8. Publish only the surviving adjudicated form when the campaign is authorized to publish. After the authorized issue and implementation flow completes, freeze the new integrated commit and begin the next full-scope round.
9. Stop only when one immutable-state round completes the entire repository inventory and mandatory matrix, no round is `INCOMPLETE`, and no meaningful candidate survives verification. Any verified in-repository correctness, contract, data-integrity, build, test-oracle, documentation, packaging, workflow, or **Forbidden** violation is meaningful regardless of severity, rarity, legacy status, or malformed-input trigger. Do not downgrade a proved defect to an observation to satisfy the stop rule. An unresolved, deferred, or unimplemented verified defect blocks `CLEAN`, and green existing suites cannot satisfy the stop rule.

## Explicit Multi-Agent Reviews

When the user explicitly asks for a team, parallel, or multi-agent review, load the [multi-agent skill](../multi-agent/SKILL.md) and its [review procedure](../multi-agent/review.md) instead of this workflow. It inherits the same whole-surface, immutable-state, and auditable-completeness law while defining independent parallel reviewers, agent briefing, and lead and critic adjudication.
