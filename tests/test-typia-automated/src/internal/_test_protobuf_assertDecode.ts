import { TestStructure } from "@typia/template";
import typia from "typia";

import { _test_protobuf_decode } from "./_test_protobuf_decode";

/**
 * Verifies protobuf.assertDecode through its supplied operation and fixture.
 *
 * A wrapper adapter keeps the callback result shape separate from the shared
 * decode round-trip assertions, without installing or launching anything.
 *
 * 1. Run the clean fixture scenario and its observable assertions.
 * 2. Retain the applicable invalid or round-trip distinctions described below.
 *
 * @evidence contracts/testing.md#behavioral-verification Delegates clean decoded-content and byte-stable re-encoding to _test_protobuf_decode. The ErrorClass parameter is unused, and no invalid-byte assertion is executed.
 * @evidence contracts/testing.md#independent-expectations The authored fixture/RESOLVE supplies expected content; the sibling native encoder supplies bytes and can share decoder errors. No independently authored malformed wire input is provided.
 * @evidence contracts/testing.md#distinguishing-cases The existing ObjectSimple clean encoded value is the sole scenario. This wrapper does not cover truncated/malformed bytes or invalid decoded values.
 * @evidence contracts/testing.md#execution-ownership Committed test_protobuf_assertDecode_ObjectSimple is the native producer connection discovered by TestServant. The corresponding full generated family remains disabled.
 */
export const _test_protobuf_assertDecode =
  (_ErrorClass: Function) =>
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  (functor: {
    decode: (input: Uint8Array) => typia.Resolved<T>;
    encode: (input: T) => Uint8Array;
  }): void => {
    _test_protobuf_decode(name)(factory)({
      decode: functor.decode,
      encode: functor.encode,
    }) satisfies void;
  };
