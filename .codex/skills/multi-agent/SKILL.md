# Multi-Agent Workflows

Use only when the user explicitly asks for one of the named modes — Review Cycle, Discussion, or Research Review Round. Each mode composes the shared building blocks below; do not invent unnamed combinations. Read the **Briefing subagents** rule before delegating to any subagent; read a mode in full only when the user asks for it by name.

## Building Blocks

### Six-agent team

Form a team of six agents. For looped modes, replace the team with six different agents at the start of each round or cycle.

### Lead role

The lead agent coordinates the team. In modes that produce proposals, the lead rechecks every proposal against the codebase and applies only changes that are technically sound and relevant. In modes that produce transcripts, the lead moderates and scribes, writing each statement in speaking order, recording the live discussion (not a retrospective summary), and not narrowing the topic unless the user did.

### Briefing subagents

Subagents start blind: they carry no conversation history and do not auto-load `AGENTS.md` or the skills. Give each a self-contained brief with the objective, the constraints, the context it needs, the output format, and which `AGENTS.md` sections (at least `## Attitude`) and `.codex/skills/*/SKILL.md` files to read. State the evidence and the constraints, not a pre-chosen answer; a leading hypothesis steers the agent to a shallow fix. A subagent runs its brief directly and does not re-delegate.

### Topic directory

Create `.discussions/<topic>/` with a short filesystem-safe topic name. Do not delete or overwrite existing discussion directories unless the user explicitly requests it.

### Per-agent knowledge base

Each agent creates a personal subdirectory under the topic directory and continuously maintains its own wiki-style knowledge base there. Between turns, agents read the updated transcript and each other's statements, keep researching, revise their knowledge bases, and prepare notes.

### Three transcript rounds

Run three unrestricted rounds recorded as `round1.md`, `round2.md`, and `round3.md`. Each round has a one-hour budget.

### Stop condition for looped modes

Continue while at least one verified proposal is accepted. Stop when no agent proposes an improvement, or when no proposal survives lead-agent validation.

## Modes

### Review Cycle

Direct review of changed source, docs, and tests. No topic directory, no transcripts.

1. Form the team. Each agent reads the changed source/docs/tests in full and proposes concrete improvements.
2. Lead validates each proposal against the codebase and applies surviving ones.
3. Start the next cycle with a fresh team. Apply the stop condition.

### Discussion

Open-ended topic exploration without changing code. No proposals, no validation.

1. Create the topic directory. Form the team; each builds its knowledge base.
2. Run the three transcript rounds directly under the topic directory.
3. After `round3.md`, the lead writes agreed conclusions and major open points into `summary.md`, reports to the user, and waits.

### Research Review Round

Review that needs shared research before individual proposals — the discussion KB workflow plus the validation loop.

1. Create the topic directory. Each round lives in its own `review-round-N/` subdirectory containing fresh agents' KB folders, `round1.md`, `round2.md`, `round3.md`, `proposals.md`, and `lead-validation.md`.
2. In each round: agents build KBs from changed source/docs/tests plus relevant research → three transcript rounds → each agent submits its own concrete proposals (no consensus required; discussion is for shared understanding, not voting) → lead validates and applies surviving ones.
3. Fresh team next round; apply the stop condition.
