import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface IUnionWithNestedCoercion {
  data: { nested: { value: number } } | null;
}

/**
 * Verifies schema-directed coercion for anyof nested coercion.
 *
 * This case checks that a nullable object branch recursively converts its
 * nested stringified object and numeric leaf. Authored schema input isolates
 * utility semantics from compiler production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 */
export const test_llm_coerce_anyof_nested_coercion = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      data: {
        anyOf: [
          {
            type: "object",
            properties: {
              nested: {
                type: "object",
                properties: {
                  value: {
                    type: "number",
                  },
                },
                required: ["value"],
                additionalProperties: false,
              },
            },
            required: ["nested"],
            additionalProperties: false,
          },
          {
            type: "null",
          },
        ],
      },
    },
    required: ["data"],
    additionalProperties: false,
    $defs: {},
  };
  const original: IUnionWithNestedCoercion = {
    data: { nested: { value: 456 } },
  };

  const corrupted = {
    data: JSON.stringify({
      nested: JSON.stringify(original.data!.nested),
    }),
  };

  const result = LlmJson.parse<IUnionWithNestedCoercion>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals(
      "data.nested.value",
      result.data.data?.nested.value,
      456,
    );
  }
};
