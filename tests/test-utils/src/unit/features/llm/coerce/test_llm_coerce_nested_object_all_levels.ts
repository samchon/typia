import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface ISimpleNested {
  outer: {
    inner: {
      value: number;
    };
  };
}

/**
 * Verifies schema-directed coercion for nested object all levels.
 *
 * This case checks that two stringified object levels recover the deepest
 * numeric value. Authored schema input isolates utility semantics from compiler
 * production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 */
export const test_llm_coerce_nested_object_all_levels = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      outer: {
        type: "object",
        properties: {
          inner: {
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
        required: ["inner"],
        additionalProperties: false,
      },
    },
    required: ["outer"],
    additionalProperties: false,
    $defs: {},
  };
  const original: ISimpleNested = {
    outer: {
      inner: { value: 777 },
    },
  };

  const corrupted = {
    outer: JSON.stringify({
      inner: JSON.stringify(original.outer.inner),
    }),
  };

  const result = LlmJson.parse<ISimpleNested>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("value", result.data.outer.inner.value, 777);
  }
};
