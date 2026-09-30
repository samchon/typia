import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

interface IArrayUnion {
  items: number[] | string[];
}

/**
 * Verifies schema-directed coercion for anyof array union.
 *
 * This case checks that two array alternatives preserve the parsed numeric
 * array without choosing an item conversion branch. Authored schema input
 * isolates utility semantics from compiler production; the original assertions
 * remain intact.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse/coerce calls check that two array alternatives preserve the parsed numeric array without choosing an item conversion branch; every original assertion title and outcome is preserved.
 * @evidence contracts/testing.md#independent-expectations Literal schema kinds are authored from the declared fixture shape, not produced by typia. Original values and explicit scalar, field or complete-array expectations establish the result independently of the conversion implementation; these assertions do not certify unasserted properties.
 * @evidence contracts/testing.md#distinguishing-cases The distinguishing contribution is that two array alternatives preserve the parsed numeric array without choosing an item conversion branch. Complementary string/no-string, nullable/non-null and affirmative/negative cases run in the same direct population. Adjacent controls also distinguish ambiguous string-item arrays from a uniquely selected numeric array. This case does not establish malformed-input rejection, reference-cycle handling or the correctness of compiler-produced schemas.
 * @evidence contracts/testing.md#execution-ownership test-utils-unit start registers this exported case with node:test under a plugin-free configuration and oracle. No native producer, installed consumer or host is needed for these assertions; transformer-to-utility assembly remains a separate boundary responsibility.
 */
export const test_llm_coerce_anyof_array_union = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      items: {
        anyOf: [
          {
            type: "array",
            items: {
              type: "number",
            },
          },
          {
            type: "array",
            items: {
              type: "string",
            },
          },
        ],
      },
    },
    required: ["items"],
    additionalProperties: false,
    $defs: {},
  };
  const original: IArrayUnion = {
    items: [1, 2, 3],
  };

  const corrupted = {
    items: JSON.stringify(original.items) as unknown,
  };

  const result = LlmJson.parse<IArrayUnion>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("items", result.data.items, [1, 2, 3]);
  }

  // Both array kinds match: choosing the first numeric branch would damage text.
  const stringItems = { items: ["1", "2"] };
  TestEquality.equals(
    "ambiguous parsed array retains strings",
    LlmJson.coerce(stringItems, parameters),
    { items: ["1", "2"] },
  );
  TestEquality.equals(
    "ambiguous encoded array retains strings",
    LlmJson.coerce({ items: JSON.stringify(stringItems.items) }, parameters),
    { items: ["1", "2"] },
  );
  const uniqueParameters: ILlmSchema.IParameters = {
    ...parameters,
    properties: {
      items: {
        anyOf: [{ type: "array", items: { type: "number" } }, { type: "null" }],
      },
    },
  };
  TestEquality.equals(
    "unique array branch converts numeric strings",
    LlmJson.coerce(stringItems, uniqueParameters),
    { items: [1, 2] },
  );
  TestEquality.equals(
    "unique encoded array branch converts numeric strings",
    LlmJson.coerce(
      { items: JSON.stringify(stringItems.items) },
      uniqueParameters,
    ),
    { items: [1, 2] },
  );
};
