import typia, { IValidation } from "typia";

import { _test_protobuf_decode } from "./_test_protobuf_decode";

/**
 * Verifies protobuf.validateDecode through its supplied operation and fixture.
 *
 * A wrapper adapter keeps the callback result shape separate from the shared
 * decode round-trip assertions, without installing or launching anything.
 *
 * 1. Run the clean fixture scenario and its observable assertions.
 * 2. Retain the applicable invalid or round-trip distinctions described below.
 *
 * @evidence contracts/testing.md#behavioral-verification Delegates clean decoded-content and byte-stable re-encoding to _test_protobuf_decode. The decoder must report success; native assertEquals checks its success record before data is returned to the round-trip helper.
 * @evidence contracts/testing.md#independent-expectations The authored fixture/RESOLVE supplies expected content; the sibling native encoder supplies bytes and can share decoder errors. The native success-record check is correlated with the producer.
 * @evidence contracts/testing.md#distinguishing-cases The existing ObjectSimple clean encoded value is the sole scenario. This wrapper does not cover truncated/malformed bytes or invalid decoded values.
 * @evidence contracts/testing.md#execution-ownership Committed test_protobuf_validateDecode_ObjectSimple is the native producer connection discovered by TestServant. The corresponding full generated family remains disabled.
 */
export const _test_protobuf_validateDecode =
  (name: string) =>
  <T extends object>(factory: { generate(): T }) =>
  (functor: {
    decode: (input: Uint8Array) => typia.IValidation<typia.Resolved<T>>;
    encode: (input: T) => Uint8Array;
  }): void => {
    _test_protobuf_decode(name)(factory)({
      decode: (input) => {
        const result = functor.decode(input);
        if (!result.success) throw new Error();
        typia.assertEquals<IValidation.ISuccess<unknown>>(result);
        return result.data;
      },
      encode: functor.encode,
    }) satisfies void;
  };
