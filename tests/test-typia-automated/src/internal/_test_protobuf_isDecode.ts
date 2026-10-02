import { TestStructure } from "@typia/template";
import typia from "typia";

import { _test_protobuf_decode } from "./_test_protobuf_decode";

/**
 * Verifies protobuf.isDecode through its supplied operation and fixture.
 *
 * A wrapper adapter keeps the callback result shape separate from the shared
 * decode round-trip assertions, without installing or launching anything.
 *
 * 1. Run the clean fixture scenario and its observable assertions.
 * 2. Retain the applicable invalid or round-trip distinctions described below.
 *
 * @evidence contracts/common.md#principled-implementation Delegates clean decoded-content and byte-stable re-encoding to _test_protobuf_decode. Clean null is exposed to the resolved-content comparison; no invalid-byte null rejection is asserted. The authored fixture/RESOLVE supplies expected content; the sibling native encoder supplies bytes and can share decoder errors. No independently authored malformed wire input is provided.
 * @evidence contracts/common.md#clear-and-simple-design A wrapper adapter keeps the callback result shape separate from the shared decode round-trip assertions, without installing or launching anything.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The actual supplied callback is executed without substituting a verdict. The existing ObjectSimple clean encoded value is the sole scenario. This wrapper does not cover truncated/malformed bytes or invalid decoded values.
 * @evidence contracts/common.md#meaningful-documentation The introduction and scenario list identify this helper's assertion responsibility; the answers state its exact comparisons, executable owner and oracle limitations.
 * @evidence contracts/testing.md#behavioral-verification Delegates clean decoded-content and byte-stable re-encoding to _test_protobuf_decode. Clean null is exposed to the resolved-content comparison; no invalid-byte null rejection is asserted.
 * @evidence contracts/testing.md#independent-expectations The authored fixture/RESOLVE supplies expected content; the sibling native encoder supplies bytes and can share decoder errors. No independently authored malformed wire input is provided.
 * @evidence contracts/testing.md#distinguishing-cases The existing ObjectSimple clean encoded value is the sole scenario. This wrapper does not cover truncated/malformed bytes or invalid decoded values.
 * @evidence contracts/testing.md#execution-ownership Committed test_protobuf_isDecode_ObjectSimple is the native producer connection discovered by TestServant. The corresponding full generated family remains disabled.
 */
export const _test_protobuf_isDecode =
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  (functor: {
    decode: (input: Uint8Array) => typia.Resolved<T> | null;
    encode: (input: T) => Uint8Array;
  }): void => {
    _test_protobuf_decode(name)(factory)({
      decode: (input) => functor.decode(input)!,
      encode: functor.encode,
    }) satisfies void;
  };
