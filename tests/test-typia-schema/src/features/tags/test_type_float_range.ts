import { TestValidator } from "@nestia/e2e";
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
    TestValidator.equals(
      `_isTypeFloat accepts ${value}`,
      true,
      _isTypeFloat(value),
    );
    TestValidator.equals(
      `type tag accepts ${value}`,
      true,
      typia.is<ITaggedFloat>({ value }),
    );
    TestValidator.equals(
      `comment tag accepts ${value}`,
      true,
      typia.is<ICommentFloat>({ value }),
    );
  }
  for (const value of invalids) {
    TestValidator.equals(
      `_isTypeFloat rejects ${value}`,
      false,
      _isTypeFloat(value),
    );
    TestValidator.equals(
      `type tag rejects ${value}`,
      false,
      typia.is<ITaggedFloat>({ value }),
    );
    TestValidator.equals(
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
  TestValidator.equals(
    "Float32Array random minimum",
    -limit,
    observed?.minimum,
  );
  TestValidator.equals("Float32Array random maximum", limit, observed?.maximum);
  TestValidator.equals(
    "Float32Array random value",
    Math.fround(-limit),
    random[0],
  );
};
