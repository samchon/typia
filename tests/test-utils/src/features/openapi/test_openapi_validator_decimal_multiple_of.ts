import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiValidator } from "@typia/utils";

/**
 * Verifies OpenAPI numeric validation uses mathematical decimal divisibility.
 *
 * JavaScript remainder arithmetic rejects ordinary JSON decimals such as `0.03`
 * against `multipleOf: 0.01`. The validator must instead follow JSON Schema's
 * integer-quotient rule without accepting a nearby decimal.
 *
 * 1. Accept decimal, negative, integer, scientific, and extreme finite cases.
 * 2. Reject nearby values whose exact decimal quotient is not an integer.
 * 3. Exercise both number and integer schemas through the public validator.
 */
export const test_openapi_validator_decimal_multiple_of = (): void => {
  const matrices: Array<{
    schema: OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IInteger;
    valid: number[];
    invalid: number[];
  }> = [
    {
      schema: { type: "number", multipleOf: 0.01 },
      valid: [0, 0.03, 1.01, -0.03, 10_000_000_000.01],
      invalid: [0.031, 1.011, 0.030000000000000002],
    },
    {
      schema: { type: "number", multipleOf: 1e-7 },
      valid: [3e-7, -9e-7, 1e-6],
      invalid: [3.1e-7, 1.01e-6],
    },
    {
      schema: { type: "number", multipleOf: 5e-324 },
      valid: [5e-324, 1e-323],
      invalid: [],
    },
    {
      schema: { type: "integer", multipleOf: 1.5 },
      valid: [-6, 0, 3, 9],
      invalid: [-4, 1, 1.5, 4],
    },
  ];
  for (const [i, matrix] of matrices.entries()) {
    for (const value of matrix.valid)
      TestValidator.equals(
        `matrix ${i} accepts ${value}`,
        OpenApiValidator.validate({
          components: {},
          schema: matrix.schema,
          value,
          required: true,
        }).success,
        true,
      );
    for (const value of matrix.invalid)
      TestValidator.equals(
        `matrix ${i} rejects ${value}`,
        OpenApiValidator.validate({
          components: {},
          schema: matrix.schema,
          value,
          required: true,
        }).success,
        false,
      );
  }
};
