import { ObjectSimple } from "@typia/template";
import typia from "typia";

import { _test_json_validateStringify } from "../internal/_test_json_validateStringify";

/**
 * Verifies native typia.json.validateStringify with the ObjectSimple fixture.
 *
 * This composite retains the operation whose full validating matrix is
 * disabled; the shared helper owns its exact clean and invalid-result
 * assertions.
 *
 * 1. Bind the real ObjectSimple operation and its existing companion producers.
 * 2. Execute the shared helper's clean scenario and applicable invalid inputs.
 *
 * @evidence contracts/testing.md#behavioral-verification The prepared check judges the success data and a failed result for the clean fixture fails the helper; for spoilers the path lists must match exactly in length and content.
 * @evidence contracts/testing.md#independent-expectations The reference is the pre-callback JSON.stringify and the spoiler path lists are authored; the generated typia.assertEquals check on the result shape shares the native producer and is not independent.
 * @evidence contracts/testing.md#distinguishing-cases This entry supplies only ObjectSimple to the shared helper. Clean success against one failure per spoiler with exact path-list comparison, which also detects missing or extra paths.
 * @evidence contracts/testing.md#execution-ownership TestServant discovers test_json_validateStringify_ObjectSimple in src/composite during test-typia-automated start. The existing helper owns comparisons, traversal and spoiler loops; this exported entry owns the actual native callback identity and any companion encoder/decoder/message binding.
 * @evidence contracts/e2e.md#necessary-boundary The actual Go-generated typia.json.validateStringify<ObjectSimple> must preserve this declaration's data/validation decisions and operation-specific result shape. Handwritten callbacks can test oracle semantics but cannot establish that public producer binding.
 * @evidence contracts/e2e.md#shared-execution The complete generated population and all composites share one TestServant worker/project and content-keyed native plugin artifact. This entry creates no compiler process, separate installation or per-case worker.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The helper creates its own fixture values and local comparisons for this call. No callback or factory is replaced; module-scoped fixture randomness keeps its existing contract. The suite runner owns the one worker and closes it in finally; cold-cache behavior is not claimed.
 * @evidence contracts/e2e.md#preserved-coverage The existing ObjectSimple fixture, public call spelling, helper invocation and companion bindings remain unchanged. All original assertions execute through the same helper; this documentation adds no claim of a full disabled generated matrix.
 */
export const test_json_validateStringify_ObjectSimple = (): void =>
  _test_json_validateStringify("ObjectSimple")<ObjectSimple>(ObjectSimple)(
    (input) => typia.json.validateStringify<ObjectSimple>(input),
  );
