import { ObjectSimple } from "@typia/template";
import typia from "typia";

import { _test_plain_isPrune } from "../internal/_test_plain_isPrune";

/**
 * Verifies native typia.plain.isPrune with the ObjectSimple fixture.
 *
 * This composite retains the operation whose full validating matrix is
 * disabled; the shared helper owns its exact clean and invalid-result
 * assertions.
 *
 * 1. Bind the real ObjectSimple operation and its existing companion producers.
 * 2. Execute the shared helper's clean scenario and applicable invalid inputs.
 *
 * @evidence contracts/testing.md#behavioral-verification The clean callback must return literal true and remove injected surplus keys while preserving valid source data/references. Every authored spoiler must return literal false.
 * @evidence contracts/testing.md#independent-expectations preparePrune snapshots the authored graph before callback execution and injects independent surplus keys. ObjectSimple spoilers establish invalid-value rejection; Boolean expectations are literal values.
 * @evidence contracts/testing.md#distinguishing-cases This entry supplies only ObjectSimple to the shared helper. ObjectSimple contributes its closed-object clean pruning graph and every declared invalid-value mutation. Portable test-utils units separately distinguish no-op/destructive pruners and malformed predicate results.
 * @evidence contracts/testing.md#execution-ownership TestServant discovers test_plain_isPrune_ObjectSimple in src/composite during test-typia-automated start. The existing helper owns comparisons, traversal and spoiler loops; this exported entry owns the actual native callback identity and any companion encoder/decoder/message binding.
 * @evidence contracts/e2e.md#necessary-boundary The actual Go-generated typia.plain.isPrune<ObjectSimple> must preserve this declaration's data/validation decisions and operation-specific result shape. Handwritten callbacks can test oracle semantics but cannot establish that public producer binding.
 * @evidence contracts/e2e.md#shared-execution The complete generated population and all composites share one TestServant worker/project and content-keyed native plugin artifact. This entry creates no compiler process, separate installation or per-case worker.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The helper creates its own fixture values and local comparisons for this call. No callback or factory is replaced; module-scoped fixture randomness keeps its existing contract. The suite runner owns the one worker and closes it in finally; cold-cache behavior is not claimed.
 * @evidence contracts/e2e.md#preserved-coverage The existing ObjectSimple fixture, public call spelling, helper invocation and companion bindings remain unchanged. All original assertions execute through the same helper; this documentation adds no claim of a full disabled generated matrix.
 */
export const test_plain_isPrune_ObjectSimple = (): void =>
  _test_plain_isPrune("ObjectSimple")<ObjectSimple>(ObjectSimple)((input) =>
    typia.plain.isPrune<ObjectSimple>(input),
  );
