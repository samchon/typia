# Multi-Agent Review

Read this document only through the multi-agent skill for an explicitly requested team, parallel, or multi-agent review. The base review skill's Non-Negotiable Review Law still governs every reviewer: one agent performs one complete review of the entire declared surface from scratch, under all six rules.

Do not use this procedure for Self-Review. The author always completes Self-Review alone even when a separate team review is also authorized.

## Bound The Team

Form the largest practical team that adds meaningful independent evidence, up to nine review agents so the lead and reviewers fit the ten-agent session limit. Open a reviewer slot only when it owns one complete independent pass and can run immediately, and record the objective runtime or resource reason for every unused slot.

Give every reviewer the same complete surface. Different analytical lenses are welcome; package, file, concern, platform, or test-lane partitions are forbidden.

## Share One Immutable State

Every reviewer in a team or issue-discovery round uses the same immutable recorded snapshot, dependency lock, provisioned workspace contract, supported environment contract, and mandatory test matrix.

Issue discovery and committed pull-request review use an exact commit. A team reviewing uncommitted work uses one base commit plus a complete diff, untracked-file manifest, and content hash copied into isolated worktrees. If a shared target changes before every report finishes, the round is invalid; restart every reviewer on one new snapshot instead of combining results from different states.

## Brief Every Agent

Review agents may start without conversation history or loaded repository instructions. Give each a self-contained brief containing:

- the objective and complete declared surface;
- constraints and evidence locations;
- the required output format; and
- the exact repository instructions and skills to read.

State facts and constraints, not a preferred conclusion. Agents execute the brief directly and do not re-delegate.

For issue discovery, include the frozen commit, reproducible provisioning command, full repository scope, mandatory coverage matrix, supported environment contract, required evidence schema, and explicit instruction to finish the entire review after finding a candidate. A brief that assigns a subsystem or lens invalidates that agent as a complete-round reviewer.

## Team Review Cycle

1. Freeze the exact surface and record its base and head.
2. Give each reviewer its self-contained brief.
3. Require every reviewer to inspect the full surface independently and report evidence-backed findings directly to the lead. Reviewers do not negotiate a consensus or use discussion transcripts.
4. The lead independently reproduces and validates every proposal against the repository and relevant provenance. Accept, rewrite, combine, partially accept, or reject it according to evidence.
5. Apply every accepted in-scope improvement, complete the authorized verification, and freeze a new exact surface.
6. If anything changed, replace the team and begin another complete cycle. Stop only when one whole team cycle yields no accepted improvement.

## Research Review Round

Use a Research Review Round when the review needs external primary sources or sibling-repository provenance, such as the pinned `ttsc` host, typescript-go behavior, or an LLM provider's published function-calling contract.

Each reviewer still inspects the complete change surface and all relevant primary sources independently. Agents submit evidence-backed proposals directly to the lead without a discussion phase. External research adds evidence; it does not relax full-surface coverage or the fresh-cycle stop rule.

## Parallel Issue Discovery Rounds

Use this mode only through the multi-agent issue-campaign procedure.

1. Freeze one exact commit and fully provision one reproducible workspace contract before briefing. Give every reviewer an isolated clean worktree and isolated mutable build, generated-output, and consumer directories; immutable download and compiler caches may be shared. Give every agent the same entire campaign scope and require the issue-campaign, project, development, and review skills in its brief. Never assign A/B/C/D lanes, preferred packages, exclusive lenses, or exclusions owned by another reviewer.
2. Before examining candidates, every agent independently inventories all tracked files, package and public API families, implementation owners, generated artifacts, test harnesses, workflows, documentation contracts, supported platforms, and open and closed issue or pull-request history. For a repository-wide issue campaign, this inventory is every tracked repository surface; only an explicit user instruction or an existing public product contract can exclude one, never the lead or reviewer. The report must reconcile its inventory with the campaign's mandatory coverage matrix; a grep lens, sampled file set, assigned subsystem, or statement that the surface was reviewed is not coverage.
3. Every agent independently audits the entire inventory and executes the whole mandatory matrix. Audit source, tests, documentation, CI, packaging, generated artifacts, platform behavior, upstream and downstream provenance, and history against the development skill's **Forbidden** section. Continue through the full inventory after finding candidates. Report every killed hypothesis and every surviving candidate with exact evidence; do not stop at the first sound issue.
4. The mandatory matrix is a floor, not a partition or completeness shortcut. Each reviewer must cover all applicable public operation families and direct/factory/nested forms; equivalent TypeScript spellings and local/re-exported/module/package/user-global/default-library provenance; union/intersection/generic and option interactions; positive, one-axis negative, boundary, malformed, and mutation controls; generated-byte and executed-runtime behavior; deterministic repeat emit; workspace and clean packed consumers; supported Node, module-resolution, operating-system, and CLI paths. Treat every interaction of axes that reaches shared control flow as its own cell, and give every positive cell a one-axis negative twin. Run mutations only in a disposable checkout, keep the regression probe unchanged, and require the probe's canonical command to fail. The lead versions and hashes one canonical matrix before briefing; if any reviewer discovers a new owner, consumer, axis, or interaction, add it without sharing candidate conclusions and require every reviewer, including one that already reported, to execute the new cells before the round can complete.
5. Each agent submits its own full-surface report without discussion or a shared candidate list. It must identify the exact commit and environment, canonical matrix hash, tracked-file census, matrix results, commands and artifacts, candidates, killed hypotheses, and every gap. The report is `COMPLETE` only when the full inventory and current matrix finished; otherwise it is `INCOMPLETE`. A complete report may contain candidates, which the lead must adjudicate rather than asking the reviewer to suppress.
6. The lead reopens the evidence in a fresh isolated worktree, reproduces every candidate and independent oracle, checks ownership, provenance, complete consequence surface, and any claimed **Forbidden** classification, and compares existing issues and pull requests. Reject, rewrite, combine, partially accept, or return a proposal as the evidence requires. An independent critic audits every lead disposition, including rejection, narrowing, combination, deferral, and invalidation, in another fresh worktree; for accepted candidates the critic also repeats the current failure and oracle and checks the invariant, consequence census, boundaries, and regression matrix. The critic returns `PASS` or `REJECT`; any lead-critic disagreement remains a surviving candidate and keeps the round `NOT CLEAN`. Implementation mechanisms remain hypotheses.
7. Record every lead and critic disposition in the campaign knowledge base. If any meaningful candidate survives, finish adjudicating the whole round, then replace the review team and repeat from step 2 against the same frozen commit until one round leaves no surviving candidate. Discovery owns this loop and never hands a partial candidate pool to publication or implementation. A replaced team holds no inventory, so it re-derives one rather than inheriting the previous round's. A prior finding is not permission to narrow the next round to its owner or neighbors.
8. When the user authorized end-to-end implementation, implement every accepted issue, freeze the new integrated commit, and run the next discovery phase under the same rules. Otherwise preserve the `NOT CLEAN` campaign state and stop at the authorized phase without mutation.
9. Stop only when every agent in one immutable-state round completes the entire repository inventory and mandatory matrix, no report is `INCOMPLETE`, and lead plus critic verification leaves no meaningful candidate. Any verified in-repository correctness, contract, data-integrity, build, test-oracle, documentation, packaging, workflow, or **Forbidden** violation is meaningful regardless of severity, rarity, legacy status, or malformed-input trigger. An unresolved or deferred verified defect blocks `CLEAN`. One lane's clean result, one agent's clean result, or green existing suites cannot satisfy the stop rule.
