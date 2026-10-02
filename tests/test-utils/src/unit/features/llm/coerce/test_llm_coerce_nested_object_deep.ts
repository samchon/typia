import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface IDeepNested {
  level1: {
    level2: {
      level3: {
        level4: {
          value: number;
        };
      };
    };
  };
}

/**
 * Verifies schema-directed coercion for nested object deep.
 *
 * This case checks that a stringified object at the fourth level recovers its
 * numeric member without collapsing ancestors. Authored schema input isolates
 * utility semantics from compiler production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 */
export const test_llm_coerce_nested_object_deep = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      level1: {
        type: "object",
        properties: {
          level2: {
            type: "object",
            properties: {
              level3: {
                type: "object",
                properties: {
                  level4: {
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
                required: ["level4"],
                additionalProperties: false,
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
    required: ["level1"],
    additionalProperties: false,
    $defs: {},
  };
  const original: IDeepNested = {
    level1: {
      level2: {
        level3: {
          level4: { value: 42 },
        },
      },
    },
  };

  const corrupted = {
    level1: {
      level2: {
        level3: {
          level4: JSON.stringify(original.level1.level2.level3.level4),
        },
      },
    },
  };

  const result = LlmJson.parse<IDeepNested>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals(
      "value",
      result.data.level1.level2.level3.level4.value,
      42,
    );
  }
};
