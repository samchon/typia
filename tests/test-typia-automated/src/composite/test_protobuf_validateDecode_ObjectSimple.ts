import { ObjectSimple } from "@typia/template";
import typia from "typia";

import { _test_protobuf_validateDecode } from "../internal/_test_protobuf_validateDecode";

/**
 * Verifies native typia.protobuf.validateDecode with the ObjectSimple fixture.
 *
 * This composite retains the operation whose full validating matrix is
 * disabled; the shared helper owns its exact clean and invalid-result
 * assertions.
 *
 * 1. Bind the real ObjectSimple operation and its existing companion producers.
 * 2. Execute the shared helper's clean scenario and applicable invalid inputs.
 *
 * @evidence contracts/testing.md#behavioral-verification Delegates clean decoded-content and byte-stable re-encoding to _test_protobuf_decode. The decoder must report success; native assertEquals checks its success record before data is returned to the round-trip helper.
 * @evidence contracts/testing.md#independent-expectations The authored fixture/RESOLVE supplies expected content; the sibling native encoder supplies bytes and can share decoder errors. The native success-record check is correlated with the producer.
 * @evidence contracts/testing.md#distinguishing-cases This entry supplies only ObjectSimple to the shared helper. The existing ObjectSimple clean encoded value is the sole scenario. This wrapper does not cover truncated/malformed bytes or invalid decoded values.
 * @evidence contracts/testing.md#execution-ownership TestServant discovers test_protobuf_validateDecode_ObjectSimple in src/composite during test-typia-automated start. The existing helper owns comparisons, traversal and spoiler loops; this exported entry owns the actual native callback identity and any companion encoder/decoder/message binding.
 * @evidence contracts/e2e.md#necessary-boundary The actual decoder must consume bytes emitted for the ObjectSimple declaration and compose with its sibling encoder at runtime. Pure helper calls cannot establish the native callback assembly; this clean-only round trip does not establish malformed-wire rejection.
 * @evidence contracts/e2e.md#shared-execution The complete generated population and all composites share one TestServant worker/project and content-keyed native plugin artifact. This entry creates no compiler process, separate installation or per-case worker.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The helper creates its own fixture values and local comparisons for this call. No callback or factory is replaced; module-scoped fixture randomness keeps its existing contract. The suite runner owns the one worker and closes it in finally; cold-cache behavior is not claimed.
 * @evidence contracts/e2e.md#preserved-coverage The existing ObjectSimple fixture, public call spelling, helper invocation and companion bindings remain unchanged. All original assertions execute through the same helper; this documentation adds no claim of a full disabled generated matrix.
 */
export const test_protobuf_validateDecode_ObjectSimple = (): void =>
  _test_protobuf_validateDecode("ObjectSimple")<ObjectSimple>(ObjectSimple)({
    decode: (input) => typia.protobuf.validateDecode<ObjectSimple>(input),
    encode: typia.protobuf.createEncode<ObjectSimple>(),
  });
