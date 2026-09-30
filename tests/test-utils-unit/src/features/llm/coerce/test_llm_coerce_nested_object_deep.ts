import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
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
 * utility semantics from compiler production; the original assertions remain
 * intact.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse/coerce calls check that a stringified object at the fourth level recovers its numeric member without collapsing ancestors; every original assertion title and outcome is preserved.
 * @evidence contracts/testing.md#independent-expectations Literal schema kinds are authored from the declared fixture shape, not produced by typia. Original values and explicit scalar, field or complete-array expectations establish the result independently of the conversion implementation; these assertions do not certify unasserted properties.
 * @evidence contracts/testing.md#distinguishing-cases The distinguishing contribution is that a stringified object at the fourth level recovers its numeric member without collapsing ancestors. Complementary string/no-string, nullable/non-null and affirmative/negative cases run in the same direct population. This case does not establish malformed-input rejection, reference-cycle handling or the correctness of compiler-produced schemas.
 * @evidence contracts/testing.md#execution-ownership test-utils-unit start registers this exported case with node:test under a plugin-free configuration and oracle. No native producer, installed consumer or host is needed for these assertions; transformer-to-utility assembly remains a separate boundary responsibility.
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
