import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface IObjectWithNestedArrays {
  data: {
    items: Array<{
      values: number[];
    }>;
  };
}

/**
 * Verifies schema-directed coercion for nested array deep.
 *
 * This case checks that object and nested numeric-array encodings preserve both
 * complete value arrays. Authored schema input isolates utility semantics from
 * compiler production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 */
export const test_llm_coerce_nested_array_deep = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      data: {
        type: "object",
        properties: {
          items: {
            type: "array",
            items: {
              type: "object",
              properties: {
                values: {
                  type: "array",
                  items: {
                    type: "number",
                  },
                },
              },
              required: ["values"],
              additionalProperties: false,
            },
          },
        },
        required: ["items"],
        additionalProperties: false,
      },
    },
    required: ["data"],
    additionalProperties: false,
    $defs: {},
  };
  const original: IObjectWithNestedArrays = {
    data: {
      items: [{ values: [1, 2, 3] }, { values: [4, 5, 6] }],
    },
  };

  const corrupted = {
    data: JSON.stringify({
      items: original.data.items.map((item) =>
        JSON.stringify({
          values: JSON.stringify(item.values),
        }),
      ),
    }),
  };

  const result = LlmJson.parse<IObjectWithNestedArrays>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals(
      "items[0].values",
      result.data.data.items[0]!.values,
      [1, 2, 3],
    );
    TestEquality.equals(
      "items[1].values",
      result.data.data.items[1]!.values,
      [4, 5, 6],
    );
  }
};
