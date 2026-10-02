import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface IMixed {
  double: number;
  triple: boolean;
  normal: string;
}

/**
 * Verifies schema-directed coercion for mixed stringify levels.
 *
 * This case checks that numeric and boolean leaves with different encoding
 * depths convert while ordinary text remains intact. Authored schema input
 * isolates utility semantics from compiler production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 */
export const test_llm_coerce_mixed_stringify_levels = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      double: {
        type: "number",
      },
      triple: {
        type: "boolean",
      },
      normal: {
        type: "string",
      },
    },
    required: ["double", "triple", "normal"],
    additionalProperties: false,
    $defs: {},
  };
  const original: IMixed = { double: 100, triple: false, normal: "hello" };

  const corrupted = {
    double: JSON.stringify(original.double) as unknown,
    triple: JSON.stringify(JSON.stringify(original.triple)) as unknown,
    normal: original.normal,
  };

  const result = LlmJson.parse<IMixed>(JSON.stringify(corrupted), parameters);
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("double", result.data.double, 100);
    TestEquality.equals("triple", result.data.triple, false);
    TestEquality.equals("normal", result.data.normal, "hello");
  }
};
