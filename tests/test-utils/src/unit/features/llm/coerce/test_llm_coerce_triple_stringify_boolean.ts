import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface IBool {
  flag: boolean;
}

/**
 * Verifies schema-directed coercion for triple stringify boolean.
 *
 * This case checks that two nested string encodings recover true rather than
 * retaining JSON text. Authored schema input isolates utility semantics from
 * compiler production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 */
export const test_llm_coerce_triple_stringify_boolean = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      flag: {
        type: "boolean",
      },
    },
    required: ["flag"],
    additionalProperties: false,
    $defs: {},
  };
  const original: IBool = { flag: true };

  const corrupted = {
    flag: JSON.stringify(JSON.stringify(original.flag)) as unknown,
  };

  const result = LlmJson.parse<IBool>(JSON.stringify(corrupted), parameters);
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("flag", result.data.flag, true);
  }
};
