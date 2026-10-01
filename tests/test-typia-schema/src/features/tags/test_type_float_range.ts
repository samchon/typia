import { TestEquality } from "@typia/template/equality";
import typia, { IRandomGenerator, tags } from "typia";
import { _isTypeFloat } from "typia/lib/internal/_isTypeFloat";

interface ITaggedFloat {
  value: number & tags.Type<"float">;
}

interface ICommentFloat {
  /** @type float */
  value: number;
}

/**
 * Verifies that every float validator uses the finite float32 range.
 *
 * Float tags are implemented independently by the runtime helper, native
 * JSDoc-tag generation, and typed-array random generation. This test pins the
 * symmetric positive and negative range, representative normal and subnormal
 * values, and the schema supplied to custom Float32Array generators.
 *
 * 1. Accept zero, subnormal, normal, and boundary values through both tag forms.
 * 2. Reject non-finite values and numbers outside the float32 range.
 * 3. Require Float32Array random generation to expose the same range.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.is, typia.random is evaluated by the native host on the types declared in this case and the result is checked by 9 assertions (_isTypeFloat accepts …; type tag accepts …; comment tag accepts …; _isTypeFloat rejects …; type tag rejects …; comment tag rejects …). The case documents its purpose as: Verifies that every float validator uses the finite float32 range.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Float tags are implemented independently by the runtime helper, native JSDoc-tag generation, and typed-array random generation. This test pins the symmetric positive and negative range, representative normal and subnormal values, and the schema supplied to custom Float32Array generators. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (_isTypeFloat accepts …; type tag accepts …; comment tag accepts …; _isTypeFloat rejects …; type tag rejects …; comment tag rejects …) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_type_float_range is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_type_float_range = (): void => {
  const limit = 3.4028235e38;
  const valids: number[] = [
    -limit,
    -2e38,
    -1.175494351e38,
    -1.1754943508222875e-38,
    -1.401298464324817e-45,
    -0,
    0,
    1.401298464324817e-45,
    1.1754943508222875e-38,
    1.175494351e38,
    2e38,
    limit,
  ];
  const invalids: number[] = [
    -limit * 2,
    -limit * (1 + Number.EPSILON),
    limit * (1 + Number.EPSILON),
    limit * 2,
    Number.NEGATIVE_INFINITY,
    Number.POSITIVE_INFINITY,
    Number.NaN,
  ];

  for (const value of valids) {
    TestEquality.equals(
      `_isTypeFloat accepts ${value}`,
      true,
      _isTypeFloat(value),
    );
    TestEquality.equals(
      `type tag accepts ${value}`,
      true,
      typia.is<ITaggedFloat>({ value }),
    );
    TestEquality.equals(
      `comment tag accepts ${value}`,
      true,
      typia.is<ICommentFloat>({ value }),
    );
  }
  for (const value of invalids) {
    TestEquality.equals(
      `_isTypeFloat rejects ${value}`,
      false,
      _isTypeFloat(value),
    );
    TestEquality.equals(
      `type tag rejects ${value}`,
      false,
      typia.is<ITaggedFloat>({ value }),
    );
    TestEquality.equals(
      `comment tag rejects ${value}`,
      false,
      typia.is<ICommentFloat>({ value }),
    );
  }

  let observed: Parameters<IRandomGenerator["number"]>[0] | undefined;
  const random: Float32Array = typia.random<Float32Array>({
    array: (schema) => [schema.element(0, 1)],
    number: (schema) => {
      observed = schema;
      return schema.minimum!;
    },
  });
  TestEquality.equals("Float32Array random minimum", -limit, observed?.minimum);
  TestEquality.equals("Float32Array random maximum", limit, observed?.maximum);
  TestEquality.equals(
    "Float32Array random value",
    Math.fround(-limit),
    random[0],
  );
};
