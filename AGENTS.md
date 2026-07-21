# AGENTS.md

`typia` is a TypeScript transformer and runtime library that turns pure TypeScript types into inline validators, serializers, schemas, decoders, and random-data generators. It ships the `typia` CLI plus the `typia`, `@typia/interface`, `@typia/utils`, `@typia/langchain`, `@typia/mcp`, and `@typia/vercel` packages.

## Attitude

Follow the literal request; it is the contract, not a hint at what the user "really" wants.

- **Scope is the user's to widen.** Reinterpret the goal, weigh alternatives, or expand the task only on an explicit hand-off ("figure it out", "you decide"). Take a confident, specific ask as given.
- **Fidelity binds the goal, not the effort.** Within that goal, act with full initiative: do the substeps it needs, verify your work, surface what you notice. Literal scope is no excuse for passive execution.
- **Match the user's language.** Communicate in English when the user writes in English and in Korean when the user writes in Korean. Switch when the user switches, unless they explicitly request another language.
- **Choose the principled course.** Decide from evidence, correctness, product boundaries, and the durable consequence. Time, difficulty, and consequence surface are reasons to investigate and validate more carefully, never reasons to settle for a shortcut, workaround, or weaker standard.
- **Evidence precedes correction.** Treat issue reports, review proposals, and claims that something is wrong or missing as hypotheses. Verify the real code path, tests, generated artifacts, upstream ownership, and history before accepting the premise or changing behavior.
- **Trace the consequence surface.** A named file or failing case is the starting point, not the investigation boundary. Follow the same cause through downstream consumers, side effects, state transitions, platforms, and boundary cases, then address the whole verified class of failure within the requested goal.
- **Default over ask.** On an ambiguous detail, pick the sensible default and say what you chose; reserve questions for forks only the user can settle.

## Skills

Durable project conventions and workflows live under `.agents/skills/`. Read the linked skill when its topic applies; each skill indexes its own conditionally needed topic documents.

### Project Outline

What typia is, the package family, the JS-descriptor / Go-plugin boundary, the workspace layout, product boundaries, and canonical commands, `.agents/skills/project/SKILL.md`.

### Development

Work rules, testing, validation, consequence analysis, and change integrity, `.agents/skills/development/SKILL.md`. Read before writing or modifying code.

### Documentation

README, website guide, and agent-instruction authoring rules, `.agents/skills/documentation/SKILL.md`. Read before writing or modifying documentation.

### Issue Campaigns

Default solo repository-wide issue discovery, issue publication, one CI-validated implementation pull request per cycle, and renewed discovery, `.agents/skills/issue-campaign/SKILL.md`. Read when the user asks for a broad audit, many issue candidates, or an issue-to-implementation campaign without explicitly requesting parallel agents; do not use it for one already-defined issue.

### Review

Default solo Self-Review, unqualified review, and exhaustive issue-discovery rounds, `.agents/skills/review/SKILL.md`. The reviewer inspects the whole declared surface and repeats fresh rounds until a complete pass produces no sound improvement or meaningful issue candidate.

### Multi-Agent Workflows

Explicitly parallel review and issue-campaign variants live under one entry point, `.agents/skills/multi-agent/SKILL.md`. Read it only when the user explicitly asks for a team, parallel, or multi-agent workflow. Multi-agent issue campaigns parallelize discovery and implementation by default and switch to solo implementation only on an explicit discovery-only parallel request; Self-Review remains solo.

### Discussion

Structured multi-agent topic discussion with persistent research notes and transcripts, `.agents/skills/discussion/SKILL.md`. Read only when the user explicitly asks for a discussion; review and issue discovery do not imply discussion.

### Pull Request Submission

Branch, commit, pull request, check, and merge flow, `.agents/skills/pull-request/SKILL.md`. Read when the user explicitly asks to open, submit, update, or merge a pull request, or when a standing autonomous mandate authorizes end-to-end delivery; never open, push, or propose one on unprompted initiative.

### Benchmark

Benchmark runners, fixture integrity, measurement integrity, result archives, and publication, `.agents/skills/benchmark/SKILL.md`. Read before running, modifying, or publishing benchmark results.

## Maintenance

### Writing style

`AGENTS.md` and `SKILL.md` files are operational documents for humans as well as agents. Read the documentation skill before editing either; it defines concise, clear agent-instruction writing and the prose-line rule.

### AGENTS.md

This is the single shared entry point for both Claude Code (via `CLAUDE.md -> @AGENTS.md`) and Codex CLI. Keep it to the brief product identity, global attitude, and skill index. The H2s are `## Attitude`, `## Skills`, and `## Maintenance`; `## Attitude` is the one place global agent-behavior rules live.

Update AGENTS.md only for repository-contract changes: a new skill area, a renamed or merged skill, a workflow that no longer fits an existing skill, a release-process change, or a coding-agent rule that applies globally before any skill loads.

### Skills

- **Location.** `.agents/skills/<kebab-name>/SKILL.md`. No numeric prefix. Each file opens with YAML frontmatter whose `name` matches the directory and whose third-person `description` states what the skill covers and when to use it.
- **Core in SKILL.md, conditional topics as sibling documents.** Keep always-applicable procedure in SKILL.md. Move a topic needed only under a specific condition to a one-level-deep sibling document and link it with that read condition.
- **Two trigger surfaces, one scope.** The frontmatter description is the full trigger contract, including exclusions. The AGENTS.md pointer mirrors that scope more briefly. Correct the frontmatter first when the scope changes.
- **Create or merge.** Add a skill when a substantial repository concern would otherwise inflate AGENTS.md beyond an index. Merge sibling concerns when they share most of their structure.
- **Repository skill files only.** Keep repository skills to `SKILL.md` and conditionally loaded sibling documents. Do not add separate `multi-agent-*` skills; the parallel variants live under the one `multi-agent` skill.
- **Headings are plain.** No chapter numbers in skill or AGENTS.md headings. Use descriptive titles.
- **Current set.** The repository skills are `project`, `development`, `documentation`, `issue-campaign`, `review`, `multi-agent`, `discussion`, `pull-request`, and `benchmark`.
