---
name: review
description: Defines exhaustive solo and team review workflows for typia changes and issue discovery. Use when reviewing or self-reviewing a change or pull request, running a Review Cycle or Research Review Round, or conducting repository-wide issue-discovery rounds. Self-Review and unqualified review requests are always solo; review agents work independently rather than discussing.
---

# Review

## Non-Negotiable Review Law

Every review mode uses the same unit of work: one reviewer performs one complete, from-scratch review of the entire declared surface. A team adds independent complete reviews; it never divides one review among agents.

A complete round must satisfy all four rules:

- **Whole surface:** read every changed file and hunk. For issue discovery, audit the entire campaign scope. Never partition by file, package, concern, platform, agent, or round, and never substitute another reviewer's coverage.
- **Consequence surface:** inspect affected code paths, tests, generated artifacts, CI, packaging, documentation, and consumers. Trace side effects, state transitions, concurrency, platforms, boundaries, compatibility, and failure and recovery paths beyond the named symptom or diff.
- **Fresh start:** use the current state and repeat the whole inspection. Earlier rounds, sampled files, and a recheck of only the latest fix do not count as coverage.
- **Unlimited rounds:** whenever a solo reviewer applies an improvement, or a lead accepts an improvement or meaningful issue candidate, update the work and start another complete round. Stop only after a complete round produces nothing that survives verification.

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

1. Form the largest practical team, up to six review agents. Give every agent the same complete surface and require an independent complete round. Different analytical lenses are welcome; divided coverage is forbidden.
2. Agents submit independent findings to the lead. They do not negotiate a consensus or use discussion transcripts.
3. The lead independently reproduces and validates every proposal against the repository. Apply only technically sound, in-scope improvements; rewrite, combine, partially accept, or reject proposals as the evidence warrants.
4. If the lead applies any improvement, replace the team and begin another complete cycle. Stop only after a full cycle yields no accepted improvement.

## Research Review Round

Use Research Review Round when a team review needs external or cross-repository evidence before proposing changes.

Each agent independently reviews the complete change surface and all relevant primary sources or sibling repositories. Agents submit evidence-backed proposals directly to the lead without a discussion phase.

The lead validates every proposal and applies the Team Review Cycle stop rule. External research adds evidence; it does not relax full-surface coverage.

## Issue Discovery Rounds

Use issue discovery only as part of the issue-campaign skill.

1. Form the largest practical review team, up to six agents, and apply the briefing rules below. Give every agent the entire campaign scope and require the issue-campaign, project, development, and review skills in its brief.
2. Every agent independently audits source, tests, documentation, CI, packaging, generated artifacts, platform behavior, upstream or downstream provenance, and open and closed issue or pull-request history. Audit the current implementation and history against the repository development skill's **Forbidden** section; a verified violation remains a meaningful candidate even when existing tests pass. Never divide the repository by package, file, concern, agent, or round.
3. Each agent submits its own evidence-backed candidates without discussion or a shared list.
4. The lead reopens the evidence, reproduces the behavior, checks ownership, provenance, and any claimed **Forbidden** classification, and compares existing issues and pull requests. Reject, rewrite, combine, partially accept, or return a proposal as the evidence requires.
5. Record only surviving candidates in the campaign knowledge base. If any meaningful candidate survives, replace the team and run another complete discovery round.
6. Stop only when a complete round from every agent produces no meaningful candidate that survives lead verification.

## Briefing Review Agents

Review agents may start without conversation history or loaded repository instructions. Give each a self-contained brief containing:

- the objective and complete declared surface;
- constraints and evidence locations;
- the required output format; and
- the exact repository instructions and skills to read.

State facts and constraints, not a preferred conclusion. Agents execute the brief directly and do not re-delegate.
