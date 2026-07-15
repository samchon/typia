---
name: discussion
description: Runs structured multi-agent discussions for open-ended typia topics. Use only when the user explicitly asks for Discussion or a team debate with transcripts and conclusions; do not use for Self-Review, Review Cycle, research review, or issue discovery.
---

# Discussion

Discussion explores a topic without changing code or turning the exchange into a review queue. Reviews and issue discovery use the review skill instead.

## Team

Form the largest practical team, up to six agents. Give every agent a self-contained brief with the topic, constraints, known evidence, output expectations, and the exact repository instructions and skills to read. Do not give a preferred conclusion or divide the topic into assigned slices.

## Knowledge Base

Create `.discussions/<topic>/` with a short filesystem-safe name. Do not delete or overwrite an existing discussion directory unless the user explicitly requests it.

Each agent maintains a personal wiki-style subdirectory under the topic directory. Agents read the live transcript and one another's statements between turns, continue researching, and revise their own notes.

## Transcript

Run three unrestricted transcript rounds as `round1.md`, `round2.md`, and `round3.md`. The lead moderates and records every statement in speaking order as a live transcript, not a retrospective summary. Do not narrow the topic unless the user does.

After `round3.md`, the lead writes agreed conclusions, disagreements, and major open points to `summary.md`, reports the result, and waits. Discussion does not itself authorize implementation.
