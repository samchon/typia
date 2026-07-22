---
name: issue-campaign
description: "Defines the default solo repository-wide issue campaign for typia: exhaustive discovery, lead-vetted issue publication, one unified CI-validated implementation pull request per cycle, solo Self-Review, and repeated rediscovery until a full clean round. Use for broad audits, many issue candidates, or repeated issue-to-pull-request campaigns unless the user explicitly requests parallel or multi-agent execution; do not use for one already-defined issue or an ordinary pull request."
---

# Issue Campaign

An issue campaign is a repeatable solo sequence of exhaustive discovery, issue publication, one unified implementation pull request, and renewed discovery. The main agent owns every phase and spawns no subagent other than the read-only commit early-warning pass that [development.md](development.md#implement-and-write-tests) requires for every landed commit.

Use the [multi-agent skill](../multi-agent/SKILL.md) and its issue-campaign procedure instead only when the user explicitly asks for a parallel or multi-agent issue campaign.

The user's requested phase boundary controls how far to proceed. Do not infer permission to publish issues, push branches, open pull requests, or merge from an audit-only request.

Apply [AGENTS.md's **Choose the principled course** rule](../../../AGENTS.md#attitude) to every admission, disposition, implementation, and review decision.

Read the project, development, and review skills before starting. Use the review skill's Solo Issue Discovery Rounds; issue discovery is independent review, not discussion. Read [development.md](development.md) in full only when implementation is authorized.

## Campaign Knowledge Base

Create `.wiki/<campaign>/` with a short filesystem-safe campaign name. Preserve any existing campaign directory and reconcile it rather than deleting or assuming a blank slate.

Keep concise, current Markdown documents for:

- repository provenance, architecture, validation ownership, and product boundaries;
- experiments, reproductions, dogfooding, and related issue or pull-request history;
- every raw candidate, its evidence, dependencies, and final disposition, including combinations, splits, rejections, and deferrals with the evidence supporting each decision;
- the published-issue DAG, internal implementation order, the unified cycle pull request, CI and Self-Review iterations, external blockers, and official GitHub `createdAt`-to-`mergedAt` cycle timing;
- the exact commit, dependency lock, provisioning command, supported environment contract, and tracked-file census for each discovery round;
- a mandatory coverage matrix that crosses public operations, owners, consumers, declaration spellings and provenance, composition, transform options, input contexts and boundaries, generated artifacts, packaging, CLI, and supported platforms;
- a per-issue consequence matrix and implementation impact record that names every caller, equivalent spelling, provenance, option, context, boundary, artifact, consumer, and platform revalidated by the fix; and
- an integration-command manifest that records and hashes the exact commands, environment, tool versions, triggering change classes, expected artifacts, and clean-consumer setup required before and after each integration-sensitive merge.

Record raw candidates before fact-checking. The knowledge base is the durable place to collect overlapping observations, then combine, split, rewrite, reject, or defer them without losing why.

Give every tracked path and matrix cell a stable ID, and record one row per ID with `round`, `base SHA`, `matrix hash`, `path or cell ID`, `status`, `evidence`, and `candidate`.

A status is one of four values, and it means something different for a path than for an executable cell:

| Status | Tracked path | Executable matrix cell |
| --- | --- | --- |
| `PASS` | contents, history, owner, and linked cells were audited | the recorded oracle and controls passed |
| `FAIL` | a candidate remains | the oracle or a control failed |
| `N/A` | evidence that the path is outside an explicitly authorized contract | a product-contract reason |
| `UNTESTED` | the audit is absent | the cell did not run |

Reconcile the path census with `git ls-files` and verify that the matrix covers every public operation and known historical dimension before the round begins. When the round discovers a missing owner, consumer, axis, or interaction, version and re-hash the canonical matrix and execute the added cells.

Reconcile the finished rows against the frozen census and final matrix. Any missing row, `UNTESTED`, unsupported `N/A`, or absent evidence makes the round `INCOMPLETE`.

The knowledge base supports the campaign but is not the final issue body. A published issue must stand alone without access to `.wiki`.

## Discover Issues

Run the review skill's [Solo Issue Discovery Rounds](../review/SKILL.md#solo-issue-discovery-rounds) over the entire declared campaign scope. That procedure owns the frozen commit, environment contract, tracked-file census, mandatory coverage matrix, and the `COMPLETE` and `INCOMPLETE` round states. This section adds only what the campaign itself owns.

Only an explicit user instruction or existing public product contract can exclude a surface or environment. The campaign cannot narrow itself, and an unresolved support-policy question makes the round `INCOMPLETE`.

Source is only one evidence layer. Exercise real workflows and inspect relevant upstream behavior, history, generated artifacts, consumers, fixtures, public documentation, and closed decisions.

Never combine results from different commits, and never accept a stale, unprovisioned, skipped, contaminated, sampled, or missing-type harness whose tags or declarations collapse to `any` or `unknown` as full-round evidence.

Treat the development skill's [Forbidden](../development/SKILL.md#forbidden) section as an explicit retrospective audit contract, not only a rule for future changes. In every complete round, inspect the current implementation and its history for violations, including code that predates the campaign or passes every test. A verified violation is a meaningful issue candidate. Prove the classification from purpose, control flow, consequence, and history; resemblance or stylistic preference alone is not evidence.

Do not stop after finding enough work for a pull request. Complete the entire scope, adjudicate the full candidate pool, and publish only the surviving issues when authorized.

### Every Round Is Full-Scope

Every round re-audits the entire declared scope from scratch against the state it was frozen on. A round is never partitioned: not by package, file, concern, platform, candidate class, validation lane, or pass, not by the areas the last cycle or the last round happened to touch, and not by splitting the scope across rounds so that each one covers a slice. What an earlier round read is never coverage for this one, whether it ran in an earlier cycle against a state a merge has since changed, or earlier in this cycle against the same commit. The [review skill's Non-Negotiable Review Law](../review/SKILL.md#non-negotiable-review-law) states the same rule for every round and review the campaign runs.

### Discovery Ends Only On An Empty Round

Discovery repeats in two nested loops, and both end on the same condition.

Inside one cycle, accepting a candidate does not end discovery. Begin another complete full-scope round against the same frozen commit and repeat until one round produces no meaningful candidate that survives verification. Only that empty round settles the cycle's issue set. Publishing or implementing from the first round that found something freezes the cycle around whatever that round happened to reach first, and the issues the next round would have added arrive too late to join it.

Across cycles, a merged cycle does not end the campaign. It produces one more round against the integrated repository, with no round limit, and the campaign ends only when a complete fresh round is not `INCOMPLETE`, produces no meaningful candidate that survives verification, and leaves no accepted issue unresolved.

Report the campaign complete only from a round that actually came up empty. Ending after a cycle that merely felt thorough leaves the issues the next round would have found unrecorded.

## Vet And Publish Issues

The same main agent owns every publication decision. For each candidate:

1. Reopen its evidence and reproduce the behavior.
2. Verify ownership, provenance, and any claimed classification under the development skill's **Forbidden** section.
3. Trace the full consequence surface.
4. Compare open and closed issues and pull requests.
5. Record accept, partial acceptance, rewrite, combine, split, reject, or defer with the supporting evidence.

Revalidate every disposition from primary evidence in a fresh state, including rejection, narrowing, combination, split, deferral, and confirmed-invalid conclusions, rather than trusting the note that first recorded it. A disposition that cannot be reproduced leaves the candidate surviving and blocks `CLEAN`; it cannot be hidden by omitting publication. The [multi-agent procedure](../multi-agent/issue-campaign.md) assigns this audit to an independent critic agent; a solo campaign performs it as a separate pass with its own recorded evidence.

Publish only the adjudicated form and only with user authorization.

### Self-Contained Issue Body

Write enough context for a fresh AI agent to begin implementation from the issue alone. Do not require access to local `.wiki`, the discovery conversation, or unstated repository knowledge. Cover these sections when they apply:

- **Problem:** current and expected behavior, impact, and affected users.
- **Evidence:** exact reproduction, outputs or artifacts, stable symbols, verified root cause, ownership, and provenance. For a violation of the development skill's **Forbidden** section, prove the classification from behavior, control flow, and history instead of merely naming the prohibition. Line numbers are navigation, not proof.
- **Consequence surface:** affected consumers, states, platforms, compatibility and failure paths, plus the complete case matrix for the cause.
- **Invariant:** the required behavior and architectural owner, without prescribing an implementation mechanism. Discovery explanations, closed issue approaches, and candidate mechanisms remain hypotheses for the implementer to validate; executed evidence establishes constraints and rejected alternatives, not a prescribed solution.
- **Acceptance and verification:** positive, negative, boundary, and regression outcomes with narrow and broader proving commands.
- **Coordination:** dependencies, exclusions, migration concerns, external blockers, and related open, closed, accepted, or rejected work.

Use tables for repeated case mappings. Read the rendered issue back and keep its body as the current operative handoff; use comments only for chronology.

Before publication, reproduce the current failure and its independent oracle once more in a fresh state, and verify the invariant, complete owner and consumer census, supported-environment boundary, equivalent-spelling and provenance matrix, positive and negative twins, boundary cases, and a counterfactual proving that the reproduction distinguishes the expected behavior. Pass-after and fix-mutation evidence belong to implementation verification. Strike any prescribed implementation mechanism, including one that appears to fit the current evidence.

## Develop And Repeat The Campaign

Read [development.md](development.md) in full when the user authorizes implementation pull requests or the end of a campaign that entered implementation. It owns the single cycle pull request, empty claim, internal DAG order, test authoring, formatting, ordinary CI, red-CI repair, solo Self-Review, the integration-sensitive gate, merge, branch and temporary-asset cleanup, and renewed discovery.

An audit-only or issue-publication-only campaign does not load the development procedure or mutate repository, Actions, or GitHub state beyond the authorized publications.
