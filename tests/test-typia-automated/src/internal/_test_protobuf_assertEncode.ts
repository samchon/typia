import { TestStructure } from "@typia/template";
import { isErrorClass } from "@typia/template/error-class";
import typia, { TypeGuardError } from "typia";

import { _test_protobuf_encode } from "./_test_protobuf_encode";

/**
 * Verifies protobuf.assertEncode through its supplied operation and fixture.
 *
 * The shared binary helper owns clean byte/content checks; each invalid
 * scenario gets a fresh fixture. The failure throw follows catch so both absent
 * throws and wrong exceptions fail.
 *
 * 1. Run the clean fixture scenario and its observable assertions.
 * 2. Retain the applicable invalid or round-trip distinctions described below.
 *
 * @evidence contracts/testing.md#behavioral-verification The clean phase retains _test_protobuf_encode content/byte assertions. Every spoiler must throw the selected exact prototype with native-checked guard properties and one authored allowed path; a normal encoder return fails.
 * @evidence contracts/testing.md#independent-expectations Authored fixtures and spoilers define valid/invalid values and allowed paths. The shared clean helper uses independent protobufJS bytes only for its supported message subset; companion codec round trips and native diagnostic-record checks retain correlated-oracle limits.
 * @evidence contracts/testing.md#distinguishing-cases Clean encoded content contrasts with every declared invalid mutation. The existing ObjectSimple composite additionally supplies an unchecked real encoder on its first spoiler and requires this helper to fail rather than accept a normal return.
 * @evidence contracts/testing.md#execution-ownership Committed test_protobuf_assertEncode_ObjectSimple owns native producers and discovery; the full validating-encode generated family remains disabled. This helper owns its clean delegation and spoiler-result judgments.
 */
export const _test_protobuf_assertEncode =
  (ErrorClass: Function) =>
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  (functor: {
    message: string;
    encode: (input: T) => Uint8Array;
    decode: (input: Uint8Array) => typia.Resolved<T>;
  }): void => {
    _test_protobuf_encode(name)(factory)({
      message: functor.message,
      decode: functor.decode,
      encode: functor.encode,
    }) satisfies void;

    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);

      try {
        functor.encode(elem);
      } catch (exp) {
        if (
          isErrorClass(exp, ErrorClass) &&
          typia.is<TypeGuardError.IProps>(exp)
        ) {
          if (exp.path && expected.includes(exp.path) === true) continue;
        } else
          console.log({
            actualClassName: (exp as any).constructor.name,
            expectedClassName: ErrorClass.name,
          });
      }
      throw new Error(
        `Bug on typia.protobuf.assertEncode(): failed to detect error on the ${name} type.`,
      );
    }
  };
