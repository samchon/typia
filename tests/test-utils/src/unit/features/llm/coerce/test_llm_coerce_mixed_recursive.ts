import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface IRecursiveLike {
  node: {
    value: number;
    children: Array<{
      value: number;
    }>;
  };
}

/**
 * Verifies schema-directed coercion for mixed recursive.
 *
 * This case checks that the parent numeric value and two child values survive
 * nested object and element encodings. Authored schema input isolates utility
 * semantics from compiler production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 */
export const test_llm_coerce_mixed_recursive = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      node: {
        type: "object",
        properties: {
          value: {
            type: "number",
          },
          children: {
            type: "array",
            items: {
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
        },
        required: ["value", "children"],
        additionalProperties: false,
      },
    },
    required: ["node"],
    additionalProperties: false,
    $defs: {},
  };
  const original: IRecursiveLike = {
    node: {
      value: 1,
      children: [{ value: 10 }, { value: 20 }],
    },
  };

  const corrupted = {
    node: JSON.stringify({
      value: original.node.value,
      children: original.node.children.map((c) => JSON.stringify(c)),
    }),
  };

  const result = LlmJson.parse<IRecursiveLike>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("node.value", result.data.node.value, 1);
    TestEquality.equals(
      "node.children[0].value",
      result.data.node.children[0]!.value,
      10,
    );
    TestEquality.equals(
      "node.children[1].value",
      result.data.node.children[1]!.value,
      20,
    );
  }
};
