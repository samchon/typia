import { ObjectSimple } from "@typia/template";
import assert from "node:assert/strict";
import typia, { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../internal/_test_protobuf_assertEncode";

/**
 * Verifies assertEncode rejects the ObjectSimple fixture's invalid values.
 *
 * The shared assertion helper must also reject a callback that only encodes.
 * Otherwise an invalid value can return normally and silently pass its
 * spoiler.
 *
 * 1. Run the real assertion encoder's clean and spoiled fixture scenarios.
 * 2. Replace only the encoder with the real unchecked encoder for one spoiler.
 * 3. Require the shared helper to report that missing assertion failure.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual assertEncode, decode and message producers run the full ObjectSimple scenario. A numeric-to-string spoiler is then passed through the unchecked encoder, and node:assert requires the helper to reject its normal return instead of silently continuing.
 * @evidence contracts/testing.md#independent-expectations ObjectSimple's authored valid values and spoiler paths establish data acceptance and rejection. node:assert.throws independently observes the helper's failure; the unchecked encoder is an adversarial callback, not an oracle for its expected verdict.
 * @evidence contracts/testing.md#distinguishing-cases Real assertEncode is the positive control. The unchecked encode callback changes only assertion behavior for the same declared fixture and first spoiler, isolating missing rejection from later malformed-object exceptions.
 * @evidence contracts/testing.md#execution-ownership TestServant discovers this exported composite during test-typia-automated start. The shared helper owns binary round-trip and error-path assertions; this entry owns the actual producer bindings and the unchecked-callback counterexample.
 * @evidence contracts/e2e.md#necessary-boundary The native assertion encoder must preserve ObjectSimple's type checks before writing bytes, while its unchecked sibling does not promise validation. This assembly difference and helper rejection are observed together on actual generated functions.
 * @evidence contracts/e2e.md#shared-execution Both producer variants use the composite's existing suite project, single TestServant worker and content-keyed native artifact. No separate compiler invocation, installation or worker is opened for the negative callback.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each helper invocation generates its own values. The negative fixture wrapper selects the existing first spoiler without mutating ObjectSimple or its spoiler list; the suite runner owns and closes the one worker in finally.
 * @evidence contracts/e2e.md#preserved-coverage The original full clean/spoiler, message and decode helper invocation remains. The additional one-spoiler unchecked callback requires that a normal return cannot satisfy an expected throw and does not remove any original assertion.
 */
export const test_protobuf_assertEncode_ObjectSimple = (): void => {
  _test_protobuf_assertEncode(TypeGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )({
    encode: (input) => typia.protobuf.assertEncode<ObjectSimple>(input),
    decode: typia.protobuf.createDecode<ObjectSimple>(),
    message: typia.protobuf.message<ObjectSimple>(),
  });

  assert.throws(
    () =>
      _test_protobuf_assertEncode(TypeGuardError)("ObjectSimple")<ObjectSimple>(
        {
          ...ObjectSimple,
          SPOILERS: [ObjectSimple.SPOILERS[0]!],
        },
      )({
        encode: typia.protobuf.createEncode<ObjectSimple>(),
        decode: typia.protobuf.createDecode<ObjectSimple>(),
        message: typia.protobuf.message<ObjectSimple>(),
      }),
    /failed to detect error/,
    "an unchecked encoder cannot satisfy an assertion spoiler",
  );
};
