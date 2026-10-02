import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface IDeeplyMixed {
  level1: Array<{
    level2: {
      level3: Array<{
        value: number;
      }>;
    };
  }>;
}

/**
 * Verifies schema-directed coercion for mixed deeply.
 *
 * This case checks that nested array/object encodings preserve both
 * independently asserted numeric leaves. Authored schema input isolates utility
 * semantics from compiler production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 */
export const test_llm_coerce_mixed_deeply = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      level1: {
        type: "array",
        items: {
          type: "object",
          properties: {
            level2: {
              type: "object",
              properties: {
                level3: {
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
              required: ["level3"],
              additionalProperties: false,
            },
          },
          required: ["level2"],
          additionalProperties: false,
        },
      },
    },
    required: ["level1"],
    additionalProperties: false,
    $defs: {},
  };
  const original: IDeeplyMixed = {
    level1: [
      {
        level2: {
          level3: [{ value: 111 }, { value: 222 }],
        },
      },
    ],
  };

  const corrupted = {
    level1: [
      JSON.stringify({
        level2: JSON.stringify({
          level3: JSON.stringify(
            original.level1[0]!.level2.level3.map((item) =>
              JSON.stringify(item),
            ),
          ),
        }),
      }),
    ],
  };

  const result = LlmJson.parse<IDeeplyMixed>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals(
      "level1[0].level2.level3[0].value",
      result.data.level1[0]!.level2.level3[0]!.value,
      111,
    );
    TestEquality.equals(
      "level1[0].level2.level3[1].value",
      result.data.level1[0]!.level2.level3[1]!.value,
      222,
    );
  }
};
