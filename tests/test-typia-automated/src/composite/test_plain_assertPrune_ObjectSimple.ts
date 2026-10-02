import { ObjectSimple } from "@typia/template";
import typia, { TypeGuardError } from "typia";

import { _test_plain_assertPrune } from "../internal/_test_plain_assertPrune";

/**
 * Verifies native typia.plain.assertPrune with the ObjectSimple fixture.
 *
 * This composite retains the operation whose full validating matrix is
 * disabled; the shared helper owns its exact clean and invalid-result
 * assertions.
 *
 * 1. Bind the real ObjectSimple operation and its existing companion producers.
 * 2. Execute the shared helper's clean scenario and applicable invalid inputs.
 *
 * @evidence contracts/testing.md#behavioral-verification preparePrune captures valid graph data and injects surplus keys; the real pruner must remove those keys while preserving valid data, references, prototypes and array lengths. Each authored value spoiler must throw the selected exact error prototype, satisfy native property checks and report one allowed path.
 * @evidence contracts/testing.md#independent-expectations Pre-call authored graph snapshots and helper-owned surplus keys establish clean expectations. Spoilers supply invalid values/paths independently; native typia.is error shape is correlated, while exact prototype identity is independent.
 * @evidence contracts/testing.md#distinguishing-cases This entry supplies only ObjectSimple to the shared helper. ObjectSimple supplies a clean pruning graph and all declared invalid-value mutations. The shared portable prune units own destructive/no-op callbacks and graph boundaries; this wrapper does not assert return identity.
 * @evidence contracts/testing.md#execution-ownership TestServant discovers test_plain_assertPrune_ObjectSimple in src/composite during test-typia-automated start. The existing helper owns comparisons, traversal and spoiler loops; this exported entry owns the actual native callback identity and any companion encoder/decoder/message binding.
 * @evidence contracts/e2e.md#necessary-boundary The actual Go-generated typia.plain.assertPrune<ObjectSimple> must preserve this declaration's data/validation decisions and operation-specific result shape. Handwritten callbacks can test oracle semantics but cannot establish that public producer binding.
 * @evidence contracts/e2e.md#shared-execution The complete generated population and all composites share one TestServant worker/project and content-keyed native plugin artifact. This entry creates no compiler process, separate installation or per-case worker.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The helper creates its own fixture values and local comparisons for this call. No callback or factory is replaced; module-scoped fixture randomness keeps its existing contract. The suite runner owns the one worker and closes it in finally; cold-cache behavior is not claimed.
 * @evidence contracts/e2e.md#preserved-coverage The existing ObjectSimple fixture, public call spelling, helper invocation and companion bindings remain unchanged. All original assertions execute through the same helper; this documentation adds no claim of a full disabled generated matrix.
 */
export const test_plain_assertPrune_ObjectSimple = (): void =>
  _test_plain_assertPrune(TypeGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )((input) => typia.plain.assertPrune<ObjectSimple>(input));
