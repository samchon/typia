import { TestStructure } from "@typia/template";
import typia from "typia";

import { _test_protobuf_encode } from "./_test_protobuf_encode";

/**
 * Verifies protobuf.validateEncode through its supplied operation and fixture.
 *
 * The shared binary helper owns clean byte/content checks; each invalid
 * scenario gets a fresh fixture. Result adaptation and sorted local mismatch
 * reports remain local to this invocation.
 *
 * 1. Run the clean fixture scenario and its observable assertions.
 * 2. Retain the applicable invalid or round-trip distinctions described below.
 *
 * @evidence contracts/testing.md#behavioral-verification The clean phase retains _test_protobuf_encode content/byte assertions. Clean input must report success with a native-checked validation record; every spoiler must fail with the entire expected sorted path multiset.
 * @evidence contracts/testing.md#independent-expectations Authored fixtures and spoilers define valid/invalid values and allowed paths. The shared clean helper uses independent protobufJS bytes only for its supported message subset; companion codec round trips and native diagnostic-record checks retain correlated-oracle limits.
 * @evidence contracts/testing.md#distinguishing-cases Clean encoded content contrasts with every declared invalid mutation. No malformed binary-input scenario is claimed by an encoder helper.
 * @evidence contracts/testing.md#execution-ownership Committed test_protobuf_validateEncode_ObjectSimple owns native producers and discovery; the full validating-encode generated family remains disabled. This helper owns its clean delegation and spoiler-result judgments.
 */
export const _test_protobuf_validateEncode =
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  (functor: {
    message: string;
    encode: (input: T) => typia.IValidation<Uint8Array>;
    decode: (input: Uint8Array) => typia.Resolved<T>;
  }): void => {
    _test_protobuf_encode(name)(factory)({
      message: functor.message,
      decode: functor.decode,
      encode: (input: T) => {
        const result: typia.IValidation<Uint8Array> = functor.encode(input);
        if (!result.success) throw new Error();
        typia.assertEquals(result);
        return result.data;
      },
    }) satisfies void;

    const wrong: ISpoiled[] = [];
    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);
      const valid: typia.IValidation<Uint8Array> = functor.encode(elem);

      if (valid.success === true)
        throw new Error(
          `Bug on typia.protobuf.validateEncode(): failed to detect error on the ${name} type.`,
        );

      typia.assertEquals(valid);
      expected.sort();
      valid.errors.sort((x, y) => (x.path < y.path ? -1 : 1));

      if (
        valid.errors.length !== expected.length ||
        valid.errors.every((e, i) => e.path === expected[i]) === false
      )
        wrong.push({
          expected,
          actual: valid.errors.map((e) => e.path),
        });
    }
    if (wrong.length !== 0) {
      console.log(wrong);
      throw new Error(
        `Bug on typia.protobuf.validateEncode(): failed to detect error on the ${name} type.`,
      );
    }
  };

interface ISpoiled {
  expected: string[];
  actual: string[];
}
