---
name: contracts
description: Defines self-acknowledgments for production declarations and tests. Use when implementing or reviewing maintained source, unit tests or E2E tests, or selecting Evidence checklists.
---

# Implementation Contracts

For production declarations, read [common.md](common.md) and only the scoped topic whose design decisions the declaration owns. Select scoped questions by the operation's responsibility, not membership in a package. For every test, read [testing.md](testing.md); for E2E tests, also read [e2e.md](e2e.md). Apply production contracts to maintained helpers when their implementation owns those decisions.

Select types and functions; fields keep native documentation and are covered by their type. Include private helpers in the review of their owning operation so delegation does not hide an implementation decision.

An acknowledgment explains why the approach is appropriate, the assumptions it relies on and any unresolved departure. Production acknowledgments do not enumerate regression cases; test acknowledgments identify the cases and assertions they own. Neither certifies outputs or claims tests passed. State an actual limitation rather than declaring compliance with a requirement the implementation does not meet.

Meet all applicable requirements together. No chapter permits weakening the supported behavior to satisfy another.

Benchmarks, test runs and formal proofs are not universal acknowledgment requirements. The answer supplies grounds for review, not a verification report.

Product behavior belongs to [project](../project/SKILL.md) and package documentation. [Development](../development/SKILL.md#testing) owns test procedures and [Evidence adoption](../development/SKILL.md#evidence-adoption) owns selection and validation. Evidence checks that answers exist; [review](../review/SKILL.md#non-negotiable-review-law) checks their truth. Neither replaces behavioral verification.

Keep document links in this entry file. Checklist documents must contain no links, so each checklist remains independently readable.

Apply the [documentation skill](../documentation/SKILL.md) when writing contract prose and related repository documentation.

Give each requirement one chapter owner. A declaration may answer several chapters about the same implementation, but each answer must address its own question without requesting the other answers again. Maintain these boundaries when revising the checklists:

| Chapter | Question owned |
| --- | --- |
| Principled Implementation | Why does the method or value representation establish the required meaning under its stated premises? |
| Clear and Simple Design | Why are the responsibilities and structural elements clear and necessary for current requirements? |
| Prohibited Implementation Shortcuts | Does the implementation rely on a forbidden substitution or a compensation for a disproven assumption? |
| Meaningful documentation | What useful information is written for users and maintainers, and does that writing follow the documentation guidance? |
| OS-neutral implementation | How are native platform differences represented at the filesystem or process boundary? |
| Efficient algorithms | What does one necessary computation cost as its input grows? |
| Reuse equivalent work | Which requests can share a computation, and what establishes continued validity of its result? |
| Bound retention and release resources | Who owns retained state and handles, how does their population grow, and when are they released? |
| Behavioral verification | Which actual behavior and defect do the test's assertions distinguish? |
| Independent expectations | What establishes the expected result independently of the implementation under test? |
| Distinguishing cases | Which positive, negative and boundary distinctions does this test own? |
| Execution ownership | Which layer and discoverable entry execute these cases? |
| Necessary boundary | Which real connection requires E2E execution and what unique defect does it detect? |
| Shared execution | Which expensive preparations can the surviving E2E cases share? |
| State isolation and reuse validity | Which identities, resets and resource lifetimes make shared test execution valid? |
| Preserved coverage | Where does every meaningful assertion execute after consolidation or transfer? |

## [Common Implementation Principles](common.md)

Principled implementation and its justification, clear and simple design, prohibited shortcuts and useful documentation that follows the documentation skill.

## [OS-Neutral Implementation](portability.md)

Platform assumptions and supported abstractions at native filesystem and process boundaries.

## [Performance](performance.md)

Separate questions for algorithmic efficiency, required computation reuse and resource lifetime.

## [Testing](testing.md)

Behavioral assertions, independent expectations, distinguishing cases and execution ownership for every test.

## [E2E](e2e.md)

Necessary real boundaries, shared preparation, valid isolation and preserved assertions when consolidating E2E cases.
