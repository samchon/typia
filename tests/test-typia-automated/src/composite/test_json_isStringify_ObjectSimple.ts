import { ObjectSimple } from "@typia/template";
import typia from "typia";

import { _test_json_isStringify } from "../internal/_test_json_isStringify";

/**
 * Verifies native typia.json.isStringify with the ObjectSimple fixture.
 *
 * This composite retains the operation whose full validating matrix is
 * disabled; the shared helper owns its exact clean and invalid-result
 * assertions.
 *
 * 1. Bind the real ObjectSimple operation and its existing companion producers.
 * 2. Execute the shared helper's clean scenario and applicable invalid inputs.
 *
 * @evidence contracts/testing.md#behavioral-verification The clean text is judged by the prepared stringify check and a null result fails it; each spoiled fixture must produce null, so an accepting guard fails.
 * @evidence contracts/testing.md#independent-expectations The reference is JSON.stringify of the clean fixture before the callback, and the spoilers are authored beside the fixture declarations as independent invalid inputs.
 * @evidence contracts/testing.md#distinguishing-cases This entry supplies only ObjectSimple to the shared helper. Positive clean fixture against one negative per authored spoiler; spoilers that stringify to null for another reason are not distinguished.
 * @evidence contracts/testing.md#execution-ownership TestServant discovers test_json_isStringify_ObjectSimple in src/composite during test-typia-automated start. The existing helper owns comparisons, traversal and spoiler loops; this exported entry owns the actual native callback identity and any companion encoder/decoder/message binding.
 * @evidence contracts/e2e.md#necessary-boundary The actual Go-generated typia.json.isStringify<ObjectSimple> must preserve this declaration's data/validation decisions and operation-specific result shape. Handwritten callbacks can test oracle semantics but cannot establish that public producer binding.
 * @evidence contracts/e2e.md#shared-execution The complete generated population and all composites share one TestServant worker/project and content-keyed native plugin artifact. This entry creates no compiler process, separate installation or per-case worker.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The helper creates its own fixture values and local comparisons for this call. No callback or factory is replaced; module-scoped fixture randomness keeps its existing contract. The suite runner owns the one worker and closes it in finally; cold-cache behavior is not claimed.
 * @evidence contracts/e2e.md#preserved-coverage The existing ObjectSimple fixture, public call spelling, helper invocation and companion bindings remain unchanged. All original assertions execute through the same helper; this documentation adds no claim of a full disabled generated matrix.
 */
export const test_json_isStringify_ObjectSimple = (): void =>
  _test_json_isStringify("ObjectSimple")<ObjectSimple>(ObjectSimple)((input) =>
    typia.json.isStringify<ObjectSimple>(input),
  );
