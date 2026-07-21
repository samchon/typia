# Multi-Agent Issue Campaign

Read this document only through the multi-agent skill for an explicitly parallel issue campaign. Read the base issue-campaign, project, development, pull-request, review, and [multi-agent review](review.md) procedures before acting.

The base issue-campaign skill owns authorization, the knowledge base, candidate adjudication, self-contained issue bodies, and the clean full-scope completion gate. This document overrides only discovery and implementation topology.

## Flow

- [Select The Parallel Boundary](#select-the-parallel-boundary)
- [Parallel Discovery](#parallel-discovery)
- [Cancel Campaign CI](#cancel-campaign-ci)
- [Plan And Claim A Pull Request Wave](#plan-and-claim-a-pull-request-wave)
- [Keep Working While Commands Run](#keep-working-while-commands-run)
- [Implement And Revalidate A Batch](#implement-and-revalidate-a-batch)
- [Remove Every Finished Worktree](#remove-every-finished-worktree)
- [While Campaign CI Is Cancelled](#while-campaign-ci-is-cancelled)
- [Repeat A Campaign Cycle](#repeat-a-campaign-cycle)
- [Post-Campaign Cleanup](#post-campaign-cleanup)

Four rules govern the entire parallel implementation phase:

- Local and package verification, solo Self-Review, independent verification, lead readback, and every applicable integration gate are mandatory implementation gates.
- Do not run `pnpm format` during discovery, issue publication, or implementation. Post-Campaign Cleanup owns the repository-wide formatter result.
- Never disable repository Actions or any workflow for a campaign. After every campaign push and pull-request creation, immediately start an exact-SHA cancellation record for only the runs caused by that campaign commit, except when the user designated that exact integration SHA before its push. Keep the record current and complete it before merge, but never make local development wait for it.
- Campaign branches and pull requests freeze package versions, release tags, and publication state throughout campaign implementation. They never choose a release number or publish a package. A maintainer release may begin only after campaign completion, or after the user explicitly suspends the campaign and lifts the freeze; it remains a separate task and does not relax this rule for campaign changes.

## Select The Parallel Boundary

A multi-agent issue campaign parallelizes both discovery and implementation by default.

Switch to parallel discovery with solo implementation only when the user explicitly requests that combination. In that mode:

1. Run Parallel Discovery and let the lead complete candidate adjudication and authorized publication.
2. Stop every discovery agent before implementation begins.
3. Read the base issue campaign's [solo development procedure](../issue-campaign/development.md).
4. Put every implementation-ready issue into its one empty-claim pull request, use the current checkout without a worktree, run `pnpm format`, validate through ordinary CI, and complete solo Self-Review while CI runs.
5. Apply that procedure's implementation, CI, merge, branch cleanup, and temporary-asset rules, but return here for the next parallel discovery round instead of switching to solo discovery.

Do not infer solo implementation from quota concerns, a small issue count, or the fact that the lead performs publication. Only the user's explicit phase boundary selects it.

## Parallel Discovery

Use [review.md](review.md)'s Parallel Issue Discovery Rounds. Every discovery agent audits the whole declared scope independently against one frozen commit, one provisioning contract, and one canonical coverage matrix. The lead alone fact-checks and publishes, and an independent critic audits every disposition.

Pool raw candidates in `.wiki`, then reproduce and combine, split, rewrite, reject, or defer them before publication. Parallel discovery changes evidence breadth, not publication authority.

## Cancel Campaign CI

A parallel campaign runs many concurrent branches, so its implementation waves rely on local verification, independent verification, and integration gates instead of ordinary pull-request checks. Repository-wide Actions and workflow settings must remain unchanged. Before the first push, record `gh api repos/{owner}/{repo}/actions/permissions` and `gh workflow list --all --limit 1000 --json id,name,path,state` in `.wiki/<campaign>/ci-state.md` so the lead can prove the campaign did not alter them.

Every push gets its own cancellation record. Start it immediately in a background supervisor rather than leaving an implementation agent to poll it:

1. Record the campaign branch and pushed commit SHA.
2. List runs for that exact SHA with `gh run list --commit <sha> --limit 100 --json databaseId,headBranch,headSha,status,conclusion,url`.
3. Cancel every `queued`, `in_progress`, `waiting`, `pending`, or `requested` run for that SHA with `gh run cancel <run-id>`. Never cancel by broad repository, workflow, or contributor filters. For an exact integration SHA the user designated before its push, do not cancel; record every run and poll it to a terminal result.
4. Poll again because push, pull-request, chained, and ruleset runs can appear after the first query. Continue until two consecutive polls find no new run and every observed run is terminal; every ordinary campaign run observed as active must end `cancelled`, while a run already terminal when first observed or a designated integration run is recorded with its actual conclusion.
5. Record the run IDs and final states in `.wiki/<campaign>/ci-state.md`. If enumeration, cancellation, or readback fails, surface the failure and suspend later remote mutations and merge until it is repaired.

Opening or updating a pull request can enqueue additional runs for the already-pushed SHA. Start the same background record immediately after pull-request creation and after any operation that retriggers checks. The exact-SHA boundary is mandatory: never cancel unrelated contributors' runs.

A live cancellation record does not block reading source, changing code, writing tests, starting local commands, committing, or Self-Review. It is a remote-progression and merge gate, not an excuse to idle. The initial claim push and the immediately following claim pull request are one reservation transaction, so opening that pull request does not wait for the first poll. Before merge, read every campaign SHA record back and require the final terminal state described above.

## Plan And Claim A Pull Request Wave

Recompute the published-issue dependency DAG after publication and before every implementation wave. A published issue is an evidence and acceptance unit, not a default pull-request boundary. Form the smallest number of maximal cohesive batches that the verified dependencies and implementation surfaces permit.

Before claiming the first wave, freeze the campaign knowledge base's integration-command manifest. Record its content hash and exact commands, environment, tool versions, triggering change classes, expected artifacts, and clean-consumer setup. Any later correction to the manifest is a reviewed campaign-state change and invalidates integration evidence recorded under the previous hash.

Admit two or more dependency-ready issues to one batch only when every row below supports the same implementation unit:

| Decision axis | Group when | Split when |
| --- | --- | --- |
| Dependency readiness | Every issue is ready on the same DAG frontier and the batch can finish without waiting for another member or an external state transition. | An issue has a different prerequisite, external blocker, release gate, or target-branch timing. |
| Owner and root cause | The issues repair the same verified root cause or closely coupled invariants under one architectural owner. | They belong to different repositories, target branches, product owners, independently releasable contracts, or unrelated root causes. |
| Change and consequence surface | The owned files overlap, must move together, or form one traceable consequence surface. Disjoint files may still group when one invariant requires all of them. | The changes can land and roll back independently without leaving either issue incomplete. |
| Shared verification | The issues share most setup, focused harnesses, generated consequences, broad validation lanes, and clean-consumer gates. | They require materially different environments, validation owners, or merge gates, or one failure would unnecessarily block the others. |
| Atomicity and review | One diff can keep every issue's acceptance matrix explicit and can be reviewed, reverted, and diagnosed as one coherent change. | Combining them obscures root cause, issue-level acceptance, rollback, or failure attribution. |

Topic, label, package proximity, reporter, and issue count do not justify a batch by themselves. File disjointness does not require a split when the same root cause and verification lane bind the files, and file overlap does not justify grouping issues with different readiness, ownership, or atomicity.

Apply merge pressure only after admission. Among partitions for which every row still supports grouping, choose fewer pull-request units because each extra batch adds a claim, rebase, cancellation, integration, and merge gate. A split result on any row wins; reducing pull-request count never overrides correctness, rollback, failure attribution, or a dependency.

Build each wave in this order:

1. Take every published, admitted, unclaimed node on the current dependency frontier.
2. Partition the nodes by architectural owner and verified root cause.
3. Merge partitions that share a change surface and most verification work while preserving issue-level acceptance and rollback.
4. Split only for a named dependency, ownership, root cause, atomicity, or validation reason from the table.
5. Check open pull requests and remote branches for overlapping implementation immediately before claiming.
6. Freeze the batch once its empty claim pull request exists. Do not close, move, split, or combine an active claim merely to improve throughput statistics; change it only when correctness, overlap, or invalidated evidence requires a lead decision.

Run disjoint dependency-ready batches concurrently up to practical capacity and serialize batches that overlap or depend on one another. Assign one batch to one agent, worktree, branch, and pull request.

Record the DAG edges, the issues in each batch, the owned change and consequence surfaces, the shared verification lane, every grouping reason, and every split reason in the campaign knowledge base. Report the pull-request unit count before batching and after batching before opening claims.

The agent assigned a batch claims it as its first action, before installing dependencies or writing implementation code:

1. Create one isolated worktree and topic branch.
2. Create one implementation-free claim commit with `git commit --allow-empty`.
3. Push the branch, start its exact-SHA cancellation record, and immediately open a draft pull request that overviews the batch scope and links every batched issue. This is an empty reservation pull request, not a request to wait for setup or validation.
4. Start the pull-request-triggered cancellation record, mark verification as pending, and record the batch, worktree, branch, issues, pull request, and cancellation records in the campaign knowledge base.
5. Start `pnpm install` asynchronously in the worktree, then begin the source, consequence-surface, and test-design work immediately.

Keep every closing keyword out of the claim body for the reason the [solo claim rule](../issue-campaign/development.md#claim-the-complete-cycle) states. The batch's closing set is the union of its commit closing lines.

The draft pull request reserves the whole batch before code is written, preventing another contributor from starting overlapping work.

Measure the official duration of a claimed batch from the empty claim pull request's GitHub `createdAt` timestamp through its `mergedAt` timestamp. Use the GitHub timestamps, not commit dates or a local stopwatch, and include installation, implementation, validation, review, dependency waiting, rebases, cancellation completion, and merge. Do not remove outliers from the official mean. Record the issue count beside the duration so batch density remains visible, but do not replace the official per-pull-request measure with a commit-to-merge or per-issue metric. A claim that never merges has no official duration; record it separately as cancelled or unresolved instead of substituting `closedAt`.

## Keep Working While Commands Run

Start every long command asynchronously and continue with work that does not depend on its result. `pnpm install`, package builds, compiler downloads, and test suites are all background work. Watching a CLI process, repeatedly polling it without a decision to make, or reserving an agent solely to wait is not campaign work.

Maintain a compact command record containing the command, worktree, source snapshot, start time, dependent decision, and final result. Check a running command at a genuine decision boundary, when it exits, or before merge. Do not use sleep loops or foreground waits merely to discover that a command is still running.

The usual overlap follows the state of the batch. While installation runs, read the batched issue and nearby implementation, map the consequence surface, and write the implementation and regression test. Once a stable source-and-test snapshot is committed and pushed, launch the narrow package-scoped tests and begin Self-Review at once. A test process may run during review because it does not change the snapshot. When several independent checks are needed, start them together rather than serially discovering that each needs the same environment.

Some boundaries remain strict because overlap would destroy the evidence:

- **A Self-Review round must not race a source change.** Freeze and commit the snapshot before opening the round, then inspect its complete diff while tests run. If review or a test result requires a change, commit the correction and restart from a fresh complete round over the new snapshot.
- **A merge must not precede its evidence.** Every required local and independent verification result, integration gate, and cancellation or designated-integration record must be final before merge.
- **A failed cancellation record stops remote progression, not local thought.** Repair it before the next remote mutation or merge, while the agent continues the local work that is still safe and useful.

Report any command still running, its dependency, and its last observed state when handing work off. Waiting is only justified when the next decision genuinely depends on the completed result and no safe, independent work remains.

## Implement And Revalidate A Batch

Analyze the full consequence and case surface across every issue in the batch. Follow the repository development skill for implementation, tests, documentation, generated artifacts, and narrow-then-broad local verification.

Before editing, turn each issue invariant into an executed consequence matrix. Enumerate every owning helper and caller, public operation and direct/factory/nested form, equivalent TypeScript spelling and declaration provenance, union/intersection/generic and transform-option interaction, input context, positive and one-axis negative twin, boundary and malformed case, generated artifact, workspace and packed consumer, and supported platform affected by the owner. The issue's examples are seeds, not the matrix boundary. Record the matrix and every non-applicable cell with evidence in the campaign knowledge base and pull request.

Close each issue from the commit that earns it. End the commit message with one `Close #n: <issue title>` line per resolved issue, and post a pull-request comment naming what that commit landed.

An implementation agent may find that an issue is false or too broad. The lead and an independent critic must validate that conclusion in separate fresh worktrees before changing campaign state. Any disagreement keeps the original issue and batch state active:

- For a narrowed issue, record the evidence on the issue and pull-request thread, then update the batch scope.
- For a confirmed-invalid issue, record the evidence and close the issue.
- If no issue remains in the batch, close the claim pull request instead of leaving an orphan reservation.

Commit and push every coherent implementation increment to the claimed branch as soon as its source and test program are complete. Do not hold a completed snapshot locally while waiting for the tests it already launched. Start the exact-SHA cancellation record immediately after the push, consume the test results when they become available, and make any correction in a new commit with the same discipline.

Before merge, complete solo Self-Review, opening each round by commenting its findings and remediation plan on the pull request before acting on them so the thread records why every follow-up change happened. A pending narrow test never delays the start of that review, but its final result is required before merge. Then require an independent verifier who did not implement the batch to use fresh base and head worktrees, inspect the complete tree and diff including file modes, links, ignored generated output, worktree status, and packed contents, reproduce fail-before, inspect pass-after emitted or packed behavior, execute every applicable consequence-matrix cell, validate every non-applicable disposition, confirm the negative twins and boundaries, and prove the regression test is sensitive by reverting or mutating only the product fix while retaining the test in a disposable worktree; the expected assertion must fail while adjacent controls still pass. The implementing agent may merge only after implementation, Self-Review, independent verification, package-scoped verification, and the full integration-sensitive gate when the change triggers one. Under an ordinary campaign it waits for explicit user authorization; under a standing autonomous mandate it merges as soon as those gates pass, without a per-pull-request request.

Treat native emitters, shared metadata, common runtime helpers, package manifests or declarations, CLI or generator code, and test or oracle infrastructure as integration-sensitive. Immediately before its integration gate, record the exact `origin/master` and pull-request head SHAs plus the integration-command manifest hash, construct their prospective merge result in a disposable worktree, and run the complete frozen canonical command set for root build, test, static analysis, generated artifacts, and clean packed consumers; the lead may add gates but may not omit one based on a narrower consequence claim. An unavailable or failed mandatory gate blocks merge. Re-read `origin/master` before merge and restart the gate if it changed. After GitHub merges, verify the exact merge SHA with the same command set and manifest hash before any later campaign pull request merges. Do not turn master red or stack another batch on a package-only-tested integration state. If campaign CI is deliberately cancelled, record the equivalent local integration gates; when the user authorizes one designated integration SHA before its push, allow only that exact commit's runs to finish.

Promote every reproduced defect class, consequence-matrix boundary, and mutation that caught an implementation error into a permanent regression discoverable by and executed from a canonical package or root command. A maintained repository probe is acceptable only when its exact command is a required, non-skippable coverage-matrix cell and mutation evidence proves that command fails. A dormant or one-off scratch witness is not enough when the same class could recur after the campaign.

## Remove Every Finished Worktree

Worktree removal is part of finishing an assignment, not optional housekeeping.

After a pull request merges:

1. Verify GitHub records it as merged into the intended target. This works for merge, squash, and rebase strategies.
2. Confirm the worktree has no unpushed or uncommitted work worth preserving.
3. Preserve compact command evidence and result hashes in the campaign knowledge base, then remove every disposable mutable root assigned to that worktree: `GOCACHE`, `GOTMPDIR`, `TTSC_CACHE_DIR`, generated-output root, tarballs, and clean-consumer install root. Never retain a Go temporary cache after its assignment ends; logs and recorded hashes are evidence, not a reason to retain compiled cache contents.
4. Run `git worktree remove --force <path>` so ignored build artifacts are deleted too.
5. Verify the worktree directory and every assigned Go temporary root no longer exist.
6. Run `git worktree prune` and delete the local topic branch.
7. Confirm `git worktree list --porcelain` contains no record of the removed path.

If an assignment ends without a merge, first record retained evidence and confirm the remaining contents are disposable. Then remove its worktree, assigned Go temporary roots, and local branch by the same standard.

Apply this rule to every campaign-created worktree, including one used for Post-Campaign Cleanup and every verifier or mutation worktree. Do not mark an assignment complete while its worktree or assigned Go temporary assets remain on disk.

## While Campaign CI Is Cancelled

- Record local verification for each pull request. Do not dispatch replacement CI unless the user designated one exact integration SHA before its push.
- Keep repository Actions and workflow settings unchanged. Cancel only exact-SHA campaign runs after every push or pull-request retrigger, and let only a pre-designated exact integration SHA run to its actual conclusion.
- If work pauses, report local verification and the final state of every run for the latest campaign SHAs.

## Repeat A Campaign Cycle

Report the wave after every surviving issue is covered by its assigned batch pull request.

After every integrated implementation wave that resolves a discovery round's accepted issues, return automatically to the parent skill's Discover Issues phase and start new unlimited full rounds over the entire repository scope. Earlier rounds are not coverage. If the user authorized discovery but not implementation, preserve the `NOT CLEAN` campaign state and wait for implementation authority; never treat the absence of authority as completion. Repository Actions remains unchanged, and discovery alone does not authorize issue publication, pull requests, or merging.

Freeze one integrated commit before briefing the next round, and give every reviewer that same commit, full repository scope, provisioning contract, and mandatory matrix. A surviving issue or recent implementation never permits lane assignment or a residual-only review: every reviewer starts again from the entire repository and continues after finding candidates until the full census is complete.

## Post-Campaign Cleanup

Run normal completion cleanup only after the terminal repository-wide round satisfies the review skill's stop rule, every campaign pull request is resolved, every campaign worktree is removed, and no campaign branch needs another push. If the user ends the campaign before that terminal clean round, record the campaign as `CANCELLED` or `INCOMPLETE`, apply Remove Every Finished Worktree to disposable campaign state, remove other safe campaign artifacts, then stop. The early-termination path skips steps 1-11 below, performs no format commit, push, or merge, and is never presented as campaign completion.

1. Return to `master` in the main checkout and confirm it contains no unrelated user changes.
2. Pull the final campaign result with `git pull --ff-only origin master`.
3. Run `pnpm format` once against the integrated repository.
4. If formatting produces no diff, report that no cleanup pull request was needed and stop.
5. If formatting changes files, create a dedicated topic branch containing the formatter result and only directly necessary fixes.
6. Commit and push under the pull-request skill, pass the exact-SHA cancellation gate, open the Post-Campaign Cleanup pull request, and pass the gate again for pull-request-triggered runs.
7. Diagnose any locally reproducible failure, fix it, commit, push, and cancel the new commit's runs by the same gate.
8. Merge once required checks pass: with explicit user authorization, or on a standing autonomous mandate without a separate request.
9. If cleanup used the main checkout, return it to `master`, pull with `git pull --ff-only origin master`, and delete the local cleanup branch.
10. If cleanup used an auxiliary worktree, remove it and its branch under Remove Every Finished Worktree, then pull `master` in the main checkout.
11. Require the main checkout to be clean. Compare the final repository Actions permission and workflow inventory with the initial record and require that the campaign made no change.
