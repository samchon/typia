---
name: multi-agent
description: "Defines the explicitly parallel variants of typia review and issue campaigns. Use only when the user explicitly requests a team, parallel, or multi-agent review or campaign. Route review work to review.md and issue campaigns to issue-campaign.md. Self-Review and unqualified review remain solo. Multi-agent issue campaigns parallelize discovery and implementation by default, but an explicit request may limit parallelism to discovery and return implementation to the solo campaign."
---

# Multi-Agent Workflows

This skill is the single entry point for every explicitly parallel review or campaign. Read the base solo skill first, then enter through the detailed document below for the requested workflow. That document names any shared multi-agent topic procedures it also requires.

| Explicit request | Base skill | Detailed multi-agent procedure |
| --- | --- | --- |
| Team, parallel, or multi-agent review | [review](../review/SKILL.md) | [review.md](review.md) |
| Parallel or multi-agent issue campaign | [issue-campaign](../issue-campaign/SKILL.md) | [issue-campaign.md](issue-campaign.md) |

`typia` has no benchmark-campaign skill. Use [benchmark](../benchmark/SKILL.md) for measurement integrity, then the applicable issue-campaign workflow for authorized benchmark-driven implementation.

Do not load this skill for Self-Review, an unqualified review, a discussion, or a campaign that does not explicitly request parallel agents.

## Shared Parallelism Rules

- Use the smallest number of agents that adds independent evidence or owns immediately executable disjoint work. Available thread capacity is not a reason to create an agent, and a review or discovery round is the one place where every available slot should carry a full independent pass.
- Keep the total at ten agents including the lead, so at most nine children run at once.
- Never create a waiter, poller, coordinator-only child, duplicate implementation owner, or agent that cannot begin useful work immediately.
- Give every review or discovery agent the complete declared surface. Parallel review adds independent full passes; it never partitions coverage by package, file, concern, platform, or test lane.
- Partition implementation only through verified dependency and file-ownership boundaries. One agent owns one coarse batch, branch, pull request, and worktree.
- Keep the lead active on fact-checking, integration, conflict resolution, and decisions that do not duplicate an assigned agent.
- Do not let agents re-delegate.
- Self-Review remains solo for every author and every implementation branch. An independent verifier or critic is a separate agent auditing someone else's work, never a substitute for the author's own round.
- Create worktrees only for parallel implementation batches, verification, mutation, and integrated cleanup. Solo implementation and review use the current checkout.
- Remove every finished worktree, local branch, process, and assignment-owned temporary asset before declaring its assignment complete.

The solo campaign's [commit early-warning pass](../review/SKILL.md#commit-early-warning-pass) is a different topology and relaxes neither the full-surface rule nor the solo Self-Review rule above. A parallel review gives several reviewers the entire declared surface independently and the lead adjudicates their findings. The pass gives one read-only reader one commit's slice, reports candidates to the author who is still implementing, and leaves that author's own whole-surface round as the gate. A batch implementation agent here runs no pass, because agents do not re-delegate; the carve-out in the solo development procedure belongs to a solo campaign's main agent.
