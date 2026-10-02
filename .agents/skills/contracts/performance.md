# Performance

These chapters address the cost of one necessary computation, reuse across requests and retained resource lifetimes respectively. Review the owning operation together with its helpers; moving work into another layer does not remove its cost.

## Efficient algorithms

Apply to functions that choose the algorithm, data structure or processing strategy for a necessary computation.

Choose the most efficient correct algorithm and data structure suited to the supported workload. Avoid unnecessary traversal and intermediate allocation within that computation. Unnecessary work increases with input size even when a small example appears inexpensive.

Identify the input dimensions that drive processing time and temporary space, and explain the dominant cost. Justify full scans or rebuilds when indexing, batching or incremental processing could avoid work for the supported workload. Explain efficiency from the algorithm and access pattern without claiming unmeasured speedups.

## Reuse equivalent work

Apply to operations that coordinate completed or in-flight computation across requests, phases or consumers.

Reuse equivalent work whenever the supported contract permits it. Cache completed results or share in-flight computation so separate requests do not repeat the same valid work. Share the validation needed to establish reuse as well when its own inputs are equivalent.

Identify the shared computation and the inputs, dependencies and effects that determine whether consumers may share it. Explain how the producer's identity and invalidation mechanism establish continued validity. A matching key or a quiet watcher alone does not prove equivalence, and an effectful operation cannot be shared merely because its return values match.

Explain which consumers use the shared result and when changed inputs require new work. This concerns permission to reuse a result; it does not determine how long its storage must remain allocated.

## Bound retention and release resources

Apply to operations that own retained state, handles or running tasks and control their acquisition, transfer or release. A data container does not independently own its consumers' lifecycle.

Retain resources only for the lifetime their owner needs and release them when that ownership ends. Account for normal completion, failure, cancellation and ownership transfer. A still-valid cached value may be evicted when it is no longer needed; a task whose result is unwanted may still need explicit termination.

Identify the owner, acquisition and release boundaries, and the input dimensions that grow the retained population. Explain the bound or reclamation policy for historical state and outstanding resources. Distinguish handle counts, retained bytes and running tasks; bounding one does not bound the others.

State an absent bound or unresolved release limitation honestly. The answer explains ownership and retained growth rather than the cost of computing an entry or the equivalence of requests that use it.
