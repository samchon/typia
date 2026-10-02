import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface IObject {
  data: {
    id: number;
    name: string;
  };
}

/**
 * Verifies schema-directed coercion for triple stringify object.
 *
 * This case checks that two nested string encodings recover both the numeric
 * identifier and unchanged text name. Authored schema input isolates utility
 * semantics from compiler production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 */
export const test_llm_coerce_triple_stringify_object = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      data: {
        type: "object",
        properties: {
          id: {
            type: "number",
          },
          name: {
            type: "string",
          },
        },
        required: ["id", "name"],
        additionalProperties: false,
      },
    },
    required: ["data"],
    additionalProperties: false,
    $defs: {},
  };
  const original: IObject = { data: { id: 1, name: "test" } };

  const corrupted = {
    data: JSON.stringify(JSON.stringify(original.data)) as unknown,
  };

  const result = LlmJson.parse<IObject>(JSON.stringify(corrupted), parameters);
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("data.id", result.data.data.id, 1);
    TestEquality.equals("data.name", result.data.data.name, "test");
  }
};
