import { TestStructure } from "@typia/template";
import typia from "typia";

import { resolved_equal_to } from "../utils/resolved_equal_to";

/**
 * Verifies protobuf.decode through its supplied operation and fixture.
 *
 * One fixture and three local binary/content values support the round-trip
 * check; a byte loop checks every re-encoded index without retaining history.
 *
 * 1. Run the clean fixture scenario and its observable assertions.
 * 2. Retain the applicable invalid or round-trip distinctions described below.
 *
 * @evidence contracts/common.md#principled-implementation The actual encoder supplies bytes to the decoder; resolved decoded content must match the fixture projection and re-encoding must retain exact byte length and values. Authored fixture/RESOLVE defines expected decoded content, but wire bytes come from a sibling typia encoder. Encoder and decoder can share mistakes, so round-trip equality does not independently prove the wire format.
 * @evidence contracts/common.md#clear-and-simple-design One fixture and three local binary/content values support the round-trip check; a byte loop checks every re-encoded index without retaining history.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The actual supplied callback is executed without substituting a verdict. One clean binary-compatible fixture is exercised per call. No malformed, truncated or otherwise invalid byte inputs are supplied here.
 * @evidence contracts/common.md#meaningful-documentation The introduction and scenario list identify this helper's assertion responsibility; the answers state its exact comparisons, executable owner and oracle limitations.
 * @evidence contracts/testing.md#behavioral-verification The actual encoder supplies bytes to the decoder; resolved decoded content must match the fixture projection and re-encoding must retain exact byte length and values.
 * @evidence contracts/testing.md#independent-expectations Authored fixture/RESOLVE defines expected decoded content, but wire bytes come from a sibling typia encoder. Encoder and decoder can share mistakes, so round-trip equality does not independently prove the wire format.
 * @evidence contracts/testing.md#distinguishing-cases One clean binary-compatible fixture is exercised per call. No malformed, truncated or otherwise invalid byte inputs are supplied here.
 * @evidence contracts/testing.md#execution-ownership Generated protobuf.decode/createDecode entries and validating-decode ObjectSimple composites invoke this helper through TestServant. The entries own producer assembly.
 */
export const _test_protobuf_decode =
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  (functor: {
    decode: (input: Uint8Array) => typia.Resolved<T>;
    encode: (input: T) => Uint8Array;
  }): void => {
    const data: T = factory.generate();
    const encoded: Uint8Array = functor.encode(data);
    const decoded: typia.Resolved<T> = functor.decode(encoded);
    const again: Uint8Array = functor.encode(decoded as T);

    const equal: boolean =
      resolved_equal_to(factory)(data, decoded) &&
      encoded.length === again.length &&
      (() => {
        for (let i: number = 0; i < encoded.length; i++)
          if (encoded[i] !== again[i]) return false;
        return true;
      })();
    if (equal === false)
      throw new Error(
        `Bug on typia.protobuf.decode(): failed to understand ${name} type.`,
      );
  };
