import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification OpenApiValidator.validate runs numeric and integer schemas with multipleOf over a matrix of values; accepted and rejected values are asserted, so remainder arithmetic that rejects 0.03 against 0.01 fails.
 * @evidence contracts/testing.md#independent-expectations JSON Schema's integer-quotient rule decides the matrix, with values authored as decimal literals and checked by exact decimal reasoning rather than the validator's own arithmetic.
 * @evidence contracts/testing.md#distinguishing-cases Decimal, negative, integer, scientific and extreme finite values are accepted, and nearby values with a non-integer quotient are rejected, through both number and integer schemas.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. Validation runs in process on authored schemas with no native build, installation or host.
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
      TestEquality.equals(
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
      TestEquality.equals(
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
