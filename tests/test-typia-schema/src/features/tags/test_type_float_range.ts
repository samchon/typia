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
 * @evidence contracts/testing.md#behavioral-verification Float type/comment validators and typed-array random metadata preserve finite float32 range.
 * @evidence contracts/testing.md#independent-expectations Authored symmetric limits and literal verdicts anchor validation; the custom generator captures actual schema bounds and expected fround output.
 * @evidence contracts/testing.md#distinguishing-cases Twelve zero/subnormal/normal/edge values and seven outside/nonfinite values remain through helper and both native tag forms.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_type_float_range in the schema start suite under ttsx and the native plugin; the exported body owns these assertions.
 * @evidence contracts/e2e.md#necessary-boundary Native tag checks and typed-array generator emission must connect to the same numeric range.
 * @evidence contracts/e2e.md#shared-execution The suite project load and native artifact are reused with neighboring cases; no per-input process or build is created.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Inputs and observed outputs are local to the case. The suite owns shared host lifetime; mutable data is not handed to another case and no cold cache behavior is asserted.
 * @evidence contracts/e2e.md#preserved-coverage Twelve zero/subnormal/normal/edge values and seven outside/nonfinite values remain through helper and both native tag forms. Source review preserves the executable matrix; final native execution is tracked separately.
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
