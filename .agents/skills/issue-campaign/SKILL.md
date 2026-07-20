---
name: issue-campaign
description: Defines repository-wide issue discovery, lead-vetted issue publication, per-push CI cancellation during implementation waves, and post-campaign cleanup for typia. Use when the user asks for a broad audit, many issue candidates, or a repeated issue-to-pull-request campaign; do not use for one already-defined issue or an ordinary pull request.
---

# Issue Campaign

An issue campaign is a repeatable sequence of exhaustive discovery, issue publication, implementation pull requests, and final repository cleanup. The user's requested phase boundary controls how far to proceed; do not infer permission to publish issues, push branches, open pull requests, or merge from an audit-only request.

Choose the principled course throughout the campaign. Its scale, duration, and consequence surface require stronger evidence, deeper consequence analysis, and complete verification; they never justify accepting an unverified candidate, a shortcut, or a weaker implementation or review standard.

Read the project, development, and review skills before starting, and require every discovery-agent brief to do the same. Use the review skill's Issue Discovery Rounds; issue discovery is independent review, not discussion.

## Campaign Knowledge Base

Create `.wiki/<campaign>/` with a short filesystem-safe campaign name. Preserve any existing campaign directory and reconcile it rather than deleting or assuming a blank slate.

Keep concise, current Markdown documents for:

- repository provenance, architecture, and ownership boundaries;
- experiments, reproductions, dogfooding, and related issue or pull-request history;
- candidates, evidence, dependencies, and lead disposition;
- the published-issue DAG, batch admission results, owned surfaces, grouping and split reasons, pre-batch and post-batch pull-request unit counts, and official GitHub `createdAt`-to-`mergedAt` claimed-batch timing;
- implementation pull requests, local verification, and cancelled campaign-run records when those phases apply;
- the exact commit, dependency lock, provisioning command, supported environment contract, and tracked-file census for each discovery round;
- a mandatory coverage matrix that crosses public operations, owners, consumers, declaration spellings and provenance, composition, transform options, input contexts and boundaries, generated artifacts, packaging, CLI, and supported platforms;
- a per-issue consequence matrix and implementation impact record that names every caller, equivalent spelling, provenance, option, context, boundary, artifact, consumer, and platform revalidated by the fix; and
- an integration-command manifest that records and hashes the exact commands, environment, tool versions, triggering change classes, expected artifacts, and clean-consumer setup required before and after each integration-sensitive merge.

Give every tracked path and matrix cell a stable ID. Record `round`, `reviewer`, `base SHA`, `matrix hash`, `path or cell ID`, `status`, `evidence`, and `candidate` for each row, with status limited to `PASS`, `FAIL`, `N/A`, or `UNTESTED`. For a path, `PASS` means its contents, history, owner, and linked cells were audited; `FAIL` means a candidate remains; `N/A` requires evidence that the path is outside an explicitly authorized contract; and `UNTESTED` means the audit is absent. For an executable cell, `PASS` means the recorded oracle and controls passed; `FAIL` means they did not; `N/A` requires a product-contract reason; and `UNTESTED` means it did not run. Before briefing, an independent critic reconciles the path census with `git ls-files` and verifies that the matrix covers every public operation and known historical dimension. If a reviewer discovers a missing owner, consumer, axis, or interaction, version and re-hash the canonical matrix without disclosing candidate conclusions and require every reviewer to execute the added cells. After reports return, the lead mechanically reconciles every reviewer's rows against the frozen census and final matrix; any missing row, `UNTESTED`, unsupported `N/A`, or absent evidence makes that report `INCOMPLETE`.

The knowledge base supports the campaign but is not the final issue body. A published issue must stand alone without access to `.wiki`.

## Discover Issues

Freeze one exact commit before every discovery round. Derive the supported environment contract from package engines, public documentation, repository CI, peer requirements, published package behavior, and explicit user decisions; a reviewer may not narrow it ad hoc, and an unresolved conflict blocks `CLEAN`. Provision every reviewer in an isolated clean worktree with separate mutable build, generated-output, and consumer directories from the same lockfile and environment contract, and require the review skill's full tracked-file census and mandatory coverage matrix. Never combine reports from different commits or accept a stale, unprovisioned, skipped, contaminated, sampled, or missing-type harness whose tags or declarations collapse to `any` or `unknown` as full-round evidence.

Run the review skill's Issue Discovery Rounds over every tracked repository surface. Every agent independently audits the whole surface in every round. Never divide it by package, file, concern, platform, candidate class, agent, or round. Do not brief reviewers with exclusive A/B/C/D lanes or tell one reviewer that another reviewer owns part of the repository. Only an explicit user instruction or existing public product contract can exclude a surface or environment; a lead or reviewer cannot narrow the campaign, and an unresolved support-policy question makes the round `INCOMPLETE`.

Source is only one evidence layer. Exercise real workflows and inspect relevant upstream behavior, history, generated artifacts, consumers, fixtures, and public documentation.

The shared coverage matrix is a minimum experiment contract for every reviewer, not a division of labor. It must include all applicable direct, factory, and nested operation forms; equivalent aliases, interfaces, call or construct type literals, classes, intersections, unions, generics, and re-exported or ambient declarations; user-global, default-library, module, package, and runtime-native provenance; transform-option interactions; static, dynamic, array, `any`, and `unknown` value contexts; valid, invalid, malformed, maximum-width, and one-past-boundary inputs; repeated generated-byte identity; clean tarball consumers; and supported Node, module-resolution, operating-system, CLI, and deployment paths. Every interaction that reaches shared control flow is a separate cell, and every positive cell has a one-axis negative twin. Add repository-specific dimensions discovered from source and history instead of treating this list as exhaustive.

Every reviewer continues after finding a candidate until the complete census and matrix are finished. A report with an unexecuted required cell is `INCOMPLETE`; it cannot support a `CLEAN` round. Record negative results and killed hypotheses so later reviewers know which exact experiment was run, but do not let earlier coverage replace a fresh full round.

Treat the development skill's **Forbidden** section as an explicit retrospective audit contract, not only a rule for future changes. In every complete round, inspect the current implementation and its history for violations, including code that predates the campaign or passes every test. A verified violation is a meaningful issue candidate. Prove the classification from purpose, control flow, consequence, and history; resemblance or stylistic preference alone is not evidence.

Discovery ends only when a complete round from every agent produces no meaningful candidate that survives lead and independent-critic verification.

A verified in-repository correctness, contract, data-integrity, build, test-oracle, documentation, packaging, workflow, or **Forbidden** violation is meaningful regardless of severity, rarity, legacy status, or malformed-input trigger. Do not downgrade a proved defect to an observation to satisfy the stop rule. An unresolved, deferred, or unimplemented verified defect blocks campaign completion.

## Vet And Publish Issues

The lead, not a discovery agent, owns every publication decision. For each candidate:

1. Reopen its evidence and reproduce the behavior.
2. Verify ownership, provenance, and any claimed classification under the development skill's **Forbidden** section.
3. Trace the full consequence surface.
4. Compare open and closed issues and pull requests.
5. Record accept, partial acceptance, rewrite, combine, split, reject, or defer with the supporting evidence.

An independent critic validates every disposition in a fresh isolated worktree, including rejection, narrowing, combination, split, deferral, and confirmed-invalid conclusions. A lead-critic disagreement leaves the candidate surviving and blocks `CLEAN`; it cannot be hidden by omitting publication.

Publish only the adjudicated form and only with user authorization.

### Self-Contained Issue Body

Write enough context for a fresh AI agent to begin implementation from the issue alone. Do not require access to local `.wiki`, the discovery conversation, or unstated repository knowledge. Cover these sections when they apply:

- **Problem:** current and expected behavior, impact, and affected users.
- **Evidence:** exact reproduction, outputs or artifacts, stable symbols, verified root cause, ownership, and provenance. For a violation of the development skill's **Forbidden** section, prove the classification from behavior, control flow, and history instead of merely naming the prohibition. Line numbers are navigation, not proof.
- **Consequence surface:** affected consumers, states, platforms, compatibility and failure paths, plus the complete case matrix for the cause.
- **Invariant:** the required behavior and architectural owner, without prescribing an implementation mechanism. Discovery explanations, closed issue approaches, and candidate mechanisms remain hypotheses for the implementer to validate; executed evidence establishes constraints and rejected alternatives, not a prescribed solution.
- **Acceptance and verification:** positive, negative, boundary, and regression outcomes with narrow and broader proving commands.
- **Coordination:** dependencies, safe parallelism, exclusions, migration concerns, and related open, closed, accepted, or rejected work.

Use tables for repeated case mappings. Read the rendered issue back and keep its body as the current operative handoff; use comments only for chronology.

Before publication, require a critic who did not draft the issue to reproduce the current failure and independent oracle in a fresh isolated worktree, verify the invariant, complete owner and consumer census, supported-environment boundary, equivalent-spelling and provenance matrix, positive and negative twins, boundary cases, and a counterfactual proving that the reproduction distinguishes the expected behavior. Pass-after and fix-mutation evidence belong to implementation verification. The critic rejects any prescribed implementation mechanism, including one that appears to fit the current evidence; this issue-body check is in addition to the disposition review above.

## Develop And Repeat The Campaign

Read [development.md](development.md) in full when the user authorizes implementation pull requests or ends a campaign that entered implementation. It owns per-push campaign CI cancellation, DAG-based batching, claim pull requests, non-idling implementation and review, worktree cleanup, renewed discovery, the no-format rule, and Post-Campaign Cleanup. Start cancellation immediately after every implementation-wave remote mutation, but a pending local command or cancellation poll must never make an implementation agent idle; every cancellation record must be complete before merge.

An audit or issue-publication-only campaign does not load this campaign's [implementation procedure](development.md) or mutate repository Actions.
