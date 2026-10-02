import { TestStructure } from "@typia/template";
import typia from "typia";

import { _test_protobuf_encode } from "./_test_protobuf_encode";

/**
 * Verifies protobuf.isEncode through its supplied operation and fixture.
 *
 * The shared binary helper owns clean byte/content checks; each invalid
 * scenario gets a fresh fixture. Result adaptation and sorted local mismatch
 * reports remain local to this invocation.
 *
 * 1. Run the clean fixture scenario and its observable assertions.
 * 2. Retain the applicable invalid or round-trip distinctions described below.
 *
 * @evidence contracts/common.md#principled-implementation The clean phase retains _test_protobuf_encode content/byte assertions. Clean null fails; every spoiled input must return null instead of bytes. Authored fixtures and spoilers define valid/invalid values and allowed paths. The shared clean helper uses independent protobufJS bytes only for its supported message subset; companion codec round trips and native diagnostic-record checks retain correlated-oracle limits.
 * @evidence contracts/common.md#clear-and-simple-design The shared binary helper owns clean byte/content checks; each invalid scenario gets a fresh fixture. Result adaptation and sorted local mismatch reports remain local to this invocation.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The actual supplied callback is executed without substituting a verdict. Clean encoded content contrasts with every declared invalid mutation. No malformed binary-input scenario is claimed by an encoder helper.
 * @evidence contracts/common.md#meaningful-documentation The introduction and scenario list identify this helper's assertion responsibility; the answers state its exact comparisons, executable owner and oracle limitations.
 * @evidence contracts/testing.md#behavioral-verification The clean phase retains _test_protobuf_encode content/byte assertions. Clean null fails; every spoiled input must return null instead of bytes.
 * @evidence contracts/testing.md#independent-expectations Authored fixtures and spoilers define valid/invalid values and allowed paths. The shared clean helper uses independent protobufJS bytes only for its supported message subset; companion codec round trips and native diagnostic-record checks retain correlated-oracle limits.
 * @evidence contracts/testing.md#distinguishing-cases Clean encoded content contrasts with every declared invalid mutation. No malformed binary-input scenario is claimed by an encoder helper.
 * @evidence contracts/testing.md#execution-ownership Committed test_protobuf_isEncode_ObjectSimple owns native producers and discovery; the full validating-encode generated family remains disabled. This helper owns its clean delegation and spoiler-result judgments.
 */
export const _test_protobuf_isEncode =
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  (functor: {
    message: string;
    encode: (input: T) => Uint8Array | null;
    decode: (input: Uint8Array) => typia.Resolved<T>;
  }): void => {
    _test_protobuf_encode(name)(factory)({
      message: functor.message,
      decode: functor.decode,
      encode: (input) => {
        const binary: Uint8Array | null = functor.encode(input);
        if (binary === null)
          throw new Error(
            `Bug on typia.json.isEncode(): failed to understand the ${name} type.`,
          );
        return binary;
      },
    });
    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      spoil(elem);

      if (functor.encode(elem) !== null)
        throw new Error(
          `Bug on typia.json.isEncode(): failed to detect error on the ${name} type.`,
        );
    }
  };
