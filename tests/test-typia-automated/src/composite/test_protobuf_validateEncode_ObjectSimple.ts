import { ObjectSimple } from "@typia/template";
import typia from "typia";

import { _test_protobuf_validateEncode } from "../internal/_test_protobuf_validateEncode";

/**
 * Verifies native typia.protobuf.validateEncode with the ObjectSimple fixture.
 *
 * This composite retains the operation whose full validating matrix is
 * disabled; the shared helper owns its exact clean and invalid-result
 * assertions.
 *
 * 1. Bind the real ObjectSimple operation and its existing companion producers.
 * 2. Execute the shared helper's clean scenario and applicable invalid inputs.
 *
 * @evidence contracts/testing.md#behavioral-verification The clean phase retains _test_protobuf_encode content/byte assertions. Clean input must report success with a native-checked validation record; every spoiler must fail with the entire expected sorted path multiset.
 * @evidence contracts/testing.md#independent-expectations Authored fixtures and spoilers define valid/invalid values and allowed paths. The shared clean helper uses independent protobufJS bytes only for its supported message subset; companion codec round trips and native diagnostic-record checks retain correlated-oracle limits.
 * @evidence contracts/testing.md#distinguishing-cases This entry supplies only ObjectSimple to the shared helper. Clean encoded content contrasts with every declared invalid mutation. No malformed binary-input scenario is claimed by an encoder helper.
 * @evidence contracts/testing.md#execution-ownership TestServant discovers test_protobuf_validateEncode_ObjectSimple in src/composite during test-typia-automated start. The existing helper owns comparisons, traversal and spoiler loops; this exported entry owns the actual native callback identity and any companion encoder/decoder/message binding.
 * @evidence contracts/e2e.md#necessary-boundary The actual Go-generated typia.protobuf.validateEncode<ObjectSimple> must preserve this declaration's data/validation decisions and operation-specific result shape. Handwritten callbacks can test oracle semantics but cannot establish that public producer binding.
 * @evidence contracts/e2e.md#shared-execution The complete generated population and all composites share one TestServant worker/project and content-keyed native plugin artifact. This entry creates no compiler process, separate installation or per-case worker.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The helper creates its own fixture values and local comparisons for this call. No callback or factory is replaced; module-scoped fixture randomness keeps its existing contract. The suite runner owns the one worker and closes it in finally; cold-cache behavior is not claimed.
 * @evidence contracts/e2e.md#preserved-coverage The existing ObjectSimple fixture, public call spelling, helper invocation and companion bindings remain unchanged. All original assertions execute through the same helper; this documentation adds no claim of a full disabled generated matrix.
 */
export const test_protobuf_validateEncode_ObjectSimple = (): void =>
  _test_protobuf_validateEncode("ObjectSimple")<ObjectSimple>(ObjectSimple)({
    encode: (input) => typia.protobuf.validateEncode<ObjectSimple>(input),
    decode: typia.protobuf.createDecode<ObjectSimple>(),
    message: typia.protobuf.message<ObjectSimple>(),
  });
