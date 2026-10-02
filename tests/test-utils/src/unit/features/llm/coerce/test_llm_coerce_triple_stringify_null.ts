import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface INull {
  nothing: null;
}

/**
 * Verifies schema-directed coercion for triple stringify null.
 *
 * This case checks that two nested string encodings recover null rather than
 * retaining JSON text. Authored schema input isolates utility semantics from
 * compiler production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 */
export const test_llm_coerce_triple_stringify_null = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      nothing: {
        type: "null",
      },
    },
    required: ["nothing"],
    additionalProperties: false,
    $defs: {},
  };
  const original: INull = { nothing: null };

  const corrupted = {
    nothing: JSON.stringify(JSON.stringify(original.nothing)) as unknown,
  };

  const result = LlmJson.parse<INull>(JSON.stringify(corrupted), parameters);
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("nothing", result.data.nothing, null);
  }
};
