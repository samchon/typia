# E2E Contracts

Apply these chapters in addition to the common test contracts. They own the reason for real boundary execution and the organization of that execution. Common assertion quality and expectation validity remain with the test contracts.

## Necessary boundary

Identify the actual components and connection exercised, and the failure that direct unit calls cannot detect. Keep portable parsing, rule semantics, option decisions and state calculations in unit tests; retain a minimal real connection check for assembly, transport, installation or host behavior that those calls do not exercise.

Explain the distinct contribution of this boundary case relative to other E2E cases. Invoking a CLI or building Go code is not itself a justification. Remove a redundant scenario only after its meaningful assertions have verified owners in unit tests or the surviving boundary batch. Do not claim that unit coverage proves a real connection it never exercises.

## Shared execution

Batch surviving boundary cases around the minimum necessary installation, build, project load and host or process session. Identify the producer and consumers of each expensive preparation, which cases reuse it, and the changed inputs that genuinely require another preparation. Native transformer semantics must not rebuild or launch a separate native host for every rule or input.

Explain every independent installation, build or process lifetime that remains. Prefer case inputs and assertions within an existing batch when the boundary permits it. Separate CI jobs, matrix entries or concurrent workers do not eliminate repeated work. Moving the same expensive preparation into unit tests does not reduce it. Keep each case's failure observable so one failed assertion does not hide unrelated cases that can still run.

## State isolation and reuse validity

Share only preparations whose inputs and effects are equivalent for their consumers. Identify artifact identity, cache inputs and invalidation, mutable fixture state, and the reset or separation that prevents an earlier case from determining a later result. Preserve an actual cold or invalidated state when that transition is the behavior being tested; do not let a warm cache bypass its assertion.

Identify the owner and end of shared processes, handles, directories and retained state on success, failure and cancellation. Justify isolated resources by the conflicting state they prevent. Do not use wholesale cache deletion or per-case rebuilding where a bounded reset preserves the required distinction.

## Preserved coverage

When consolidating or transferring a scenario, identify the surviving assertions and their executable owners. Preserve every valid distinction, failure path and supported boundary previously verified, and strengthen coverage when the old assertion did not distinguish the intended defect.

Explain which assertions remain in this batch and which portable assertions are exercised in unit tests. Delete checks with no behavioral value under the common test contracts, but do not disguise a lost meaningful assertion as redundancy. A smaller case count, a green run or a shorter duration is not evidence of equivalent coverage. Report unresolved coverage or execution limitations honestly.
