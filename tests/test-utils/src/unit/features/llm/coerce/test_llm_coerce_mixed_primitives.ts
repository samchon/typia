import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface IPrimitiveArrays {
  numbers: number[];
  booleans: boolean[];
  nullables: null[];
}

/**
 * Verifies schema-directed coercion for mixed primitives.
 *
 * This case checks that numeric, boolean and null array members preserve their
 * kind, order and population. Authored schema input isolates utility semantics
 * from compiler production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse/coerce calls check that numeric, boolean and null array members preserve their kind, order and population.
 * @evidence contracts/testing.md#independent-expectations Literal schema kinds are authored from the declared fixture shape, not produced by typia. Authored values and explicit scalar, field or complete-array expectations establish the result independently of the conversion implementation; these assertions do not certify unasserted properties.
 * @evidence contracts/testing.md#distinguishing-cases The distinguishing contribution is that numeric, boolean and null array members preserve their kind, order and population. Complementary string/no-string, nullable/non-null and affirmative/negative cases run in the same direct population. This case does not establish malformed-input rejection, reference-cycle handling or the correctness of compiler-produced schemas.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under a plugin-free configuration and oracle. No native producer, installed consumer or host is needed for these assertions; transformer-to-utility assembly remains a separate boundary responsibility.
 */
export const test_llm_coerce_mixed_primitives = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      numbers: {
        type: "array",
        items: {
          type: "number",
        },
      },
      booleans: {
        type: "array",
        items: {
          type: "boolean",
        },
      },
      nullables: {
        type: "array",
        items: {
          type: "null",
        },
      },
    },
    required: ["numbers", "booleans", "nullables"],
    additionalProperties: false,
    $defs: {},
  };
  const original: IPrimitiveArrays = {
    numbers: [1, 2, 3],
    booleans: [true, false, true],
    nullables: [null, null],
  };

  const corrupted = {
    numbers: original.numbers.map((n) => JSON.stringify(n) as unknown),
    booleans: original.booleans.map((b) => JSON.stringify(b) as unknown),
    nullables: original.nullables.map((n) => JSON.stringify(n) as unknown),
  };

  const result = LlmJson.parse<IPrimitiveArrays>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("numbers", result.data.numbers, [1, 2, 3]);
    TestEquality.equals("booleans", result.data.booleans, [true, false, true]);
    TestEquality.equals("nullables", result.data.nullables, [null, null]);
  }
};
