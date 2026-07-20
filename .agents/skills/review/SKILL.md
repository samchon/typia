---
name: review
description: Defines exhaustive solo and team review workflows for typia changes and issue discovery. Use when reviewing or self-reviewing a change or pull request, running a Review Cycle or Research Review Round, or conducting repository-wide issue-discovery rounds. Self-Review and unqualified review requests are always solo; review agents work independently rather than discussing.
---

# Review

## Non-Negotiable Review Law

Every review mode uses the same unit of work: one reviewer performs one complete, from-scratch review of the entire declared surface. A team adds independent complete reviews; it never divides one review among agents.

Choose the principled conclusion. Review duration, difficulty, and consequence surface are reasons to inspect more deeply and verify more carefully, never reasons to overlook a sound improvement, accept an unsupported claim, or lower the completion standard.

A complete round must satisfy all six rules:

- **Whole surface:** read every changed file and hunk. For issue discovery, audit the entire campaign scope. Never partition by file, package, concern, platform, agent, or round, and never substitute another reviewer's coverage.
- **Consequence surface:** inspect affected code paths, tests, generated artifacts, CI, packaging, documentation, and consumers. Trace side effects, state transitions, concurrency, platforms, boundaries, compatibility, and failure and recovery paths beyond the named symptom or diff.
- **Fresh start:** use the current state and repeat the whole inspection. Earlier rounds, sampled files, and a recheck of only the latest fix do not count as coverage.
- **Unlimited rounds:** whenever a solo reviewer applies an improvement, or a lead accepts an improvement or meaningful issue candidate, update the work and start another complete round. Stop only after a complete round produces nothing that survives verification.
- **One immutable state:** every reviewer in a team or issue-discovery round uses the same immutable recorded snapshot, dependency lock, provisioned workspace contract, supported environment contract, and mandatory test matrix. Issue discovery and committed pull-request review use an exact commit. A team reviewing uncommitted work uses one base commit plus a complete diff, untracked-file manifest, and content hash copied into isolated worktrees. A solo review records its exact starting diff and refreshes that snapshot after every edit. If a shared target changes before every team or discovery report finishes, the round is invalid; restart every reviewer on one new snapshot instead of combining results from different states.
- **Auditable completeness:** every reviewer accounts for every tracked file and every mandatory public-operation, ownership, consumer, boundary, option, declaration-provenance, generated-artifact, packaging, and supported-platform matrix cell in the declared surface. Finding a candidate never ends or narrows the review. A skipped file, unprovisioned harness, unsupported claim, or unexecuted required cell makes the report `INCOMPLETE`, never `COMPLETE`.

## Self-Review

Self-Review is strictly solo. The author does not spawn subagents, form a team, or load the discussion skill. An ordinary review request also defaults to this solo workflow unless the user explicitly asks for a team.

1. Establish the complete change surface, including the pull request base-to-head diff and any uncommitted changes.
2. Perform one complete round under the Non-Negotiable Review Law. Include correctness and boundaries, Windows and POSIX behavior, concurrency and state, data loss and security, cache and recovery invariants, public API and compatibility, test isolation, CI and packaging, generated output, documentation, and migration effects.
3. Apply every sound improvement and run the narrowest verification that proves it.
4. If anything changed, restart at step 1 as a fresh full round.
5. Finish only when a complete round finds nothing to improve. Report the final clean round and any verification that could not run.

Self-Review does not authorize creating, pushing, updating, or merging a pull request. If the user separately requests one of those actions, follow the pull-request skill.

## Team Review Cycle

Use Review Cycle only when the user explicitly asks for a team or multi-agent review.

1. Form the largest practical team, up to nine review agents so the lead and reviewers fit the ten-agent session limit. Give every agent the same complete surface and require an independent complete round. Different analytical lenses are welcome; divided coverage is forbidden.
2. Agents submit independent findings to the lead. They do not negotiate a consensus or use discussion transcripts.
3. The lead independently reproduces and validates every proposal against the repository. Apply only technically sound, in-scope improvements; rewrite, combine, partially accept, or reject proposals as the evidence warrants.
4. If the lead applies any improvement, replace the team and begin another complete cycle. Stop only after a full cycle yields no accepted improvement.

## Research Review Round

Use Research Review Round when a team review needs external or cross-repository evidence before proposing changes.

Each agent independently reviews the complete change surface and all relevant primary sources or sibling repositories. Agents submit evidence-backed proposals directly to the lead without a discussion phase.

The lead validates every proposal and applies the Team Review Cycle stop rule. External research adds evidence; it does not relax full-surface coverage.

## Issue Discovery Rounds

Use issue discovery only as part of the issue-campaign skill.

1. Freeze one exact commit and fully provision one reproducible workspace contract before briefing. Give every reviewer an isolated clean worktree and isolated mutable build, generated-output, and consumer directories; immutable download and compiler caches may be shared. Use every available reviewer slot, up to nine agents so the lead and reviewers fit the ten-agent session limit, and record the objective runtime or resource reason for every unused slot. Give every agent the same entire campaign scope and require the issue-campaign, project, development, and review skills in its brief. Never assign A/B/C/D lanes, preferred packages, exclusive lenses, or exclusions owned by another reviewer.
2. Before examining candidates, every agent independently inventories all tracked files, package and public API families, implementation owners, generated artifacts, test harnesses, workflows, documentation contracts, supported platforms, and open and closed issue or pull-request history. For a repository-wide issue campaign, this inventory is every tracked repository surface; only an explicit user instruction or an existing public product contract can exclude one, never the lead or reviewer. The report must reconcile its inventory with the campaign's mandatory coverage matrix; a grep lens, sampled file set, assigned subsystem, or statement that the surface was reviewed is not coverage.
3. Every agent independently audits the entire inventory and executes the whole mandatory matrix. Audit source, tests, documentation, CI, packaging, generated artifacts, platform behavior, upstream and downstream provenance, and history against the development skill's **Forbidden** section. Continue through the full inventory after finding candidates. Report every killed hypothesis and every surviving candidate with exact evidence; do not stop at the first sound issue.
4. The mandatory matrix is a floor, not a partition or completeness shortcut. Each reviewer must cover all applicable public operation families and direct/factory/nested forms; equivalent TypeScript spellings and local/re-exported/module/package/user-global/default-library provenance; union/intersection/generic and option interactions; positive, one-axis negative, boundary, malformed, and mutation controls; generated-byte and executed-runtime behavior; deterministic repeat emit; workspace and clean packed consumers; supported Node, module-resolution, operating-system, and CLI paths. Treat every interaction of axes that reaches shared control flow as its own cell, and give every positive cell a one-axis negative twin. Run mutations only in a disposable checkout, keep the regression probe unchanged, and require the probe's canonical command to fail. The lead versions and hashes one canonical matrix before briefing; if any reviewer discovers a new owner, consumer, axis, or interaction, add it without sharing candidate conclusions and require every reviewer, including one that already reported, to execute the new cells before the round can complete.
5. Each agent submits its own full-surface report without discussion or a shared candidate list. It must identify the exact commit and environment, canonical matrix hash, tracked-file census, matrix results, commands and artifacts, candidates, killed hypotheses, and every gap. The report is `COMPLETE` only when the full inventory and current matrix finished; otherwise it is `INCOMPLETE`. A complete report may contain candidates, which the lead must adjudicate rather than asking the reviewer to suppress.
6. The lead reopens the evidence in a fresh isolated worktree, reproduces every candidate and independent oracle, checks ownership, provenance, complete consequence surface, and any claimed **Forbidden** classification, and compares existing issues and pull requests. Reject, rewrite, combine, partially accept, or return a proposal as the evidence requires. An independent critic audits every lead disposition, including rejection, narrowing, combination, deferral, and invalidation, in another fresh worktree; for accepted candidates the critic also repeats the current failure and oracle and checks the invariant, consequence census, boundaries, and regression matrix. The critic returns `PASS` or `REJECT`; any lead-critic disagreement remains a surviving candidate and keeps the round `NOT CLEAN`. Implementation mechanisms remain hypotheses.
7. Record every lead and critic disposition in the campaign knowledge base. If any meaningful candidate survives, finish adjudicating the whole round. When the user authorized end-to-end implementation, implement every accepted issue, replace the review team, freeze the new integrated commit, and run another complete repository-wide round under the same rules. Otherwise preserve the `NOT CLEAN` campaign state and stop at the authorized phase without mutation. A prior finding is not permission to narrow the next round to its owner or neighbors.
8. Stop only when every agent in one immutable-state round completes the entire repository inventory and mandatory matrix, no report is `INCOMPLETE`, and lead plus critic verification leaves no meaningful candidate. Any verified in-repository correctness, contract, data-integrity, build, test-oracle, documentation, packaging, workflow, or **Forbidden** violation is meaningful regardless of severity, rarity, legacy status, or malformed-input trigger. An unresolved or deferred verified defect blocks `CLEAN`. One lane's clean result, one agent's clean result, or green existing suites cannot satisfy the stop rule.

## Briefing Review Agents

Review agents may start without conversation history or loaded repository instructions. Give each a self-contained brief containing:

- the objective and complete declared surface;
- constraints and evidence locations;
- the required output format; and
- the exact repository instructions and skills to read.

State facts and constraints, not a preferred conclusion. Agents execute the brief directly and do not re-delegate.

For issue discovery, include the frozen commit, reproducible provisioning command, full repository scope, mandatory coverage matrix, supported environment contract, required evidence schema, and explicit instruction to finish the entire review after finding a candidate. A brief that assigns a subsystem or lens invalidates that agent as a complete-round reviewer.
