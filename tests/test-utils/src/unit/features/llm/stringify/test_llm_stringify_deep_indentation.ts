import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies deep feedback retains nested keys and annotations.
 *
 * Deep object and array data must remain available for correction; the existing
 * object assertion checks indentation presence rather than its exact width.
 *
 * 1. Author failure data and error paths for the stated scenarios.
 * 2. Call LlmJson.stringify and compare the declared fields and boundaries.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.stringify calls assert deep feedback retains nested keys and annotations; authored failure objects reach the shared runtime renderer without a compiler-produced validator.
 * @evidence contracts/testing.md#independent-expectations Literal values, error paths and expected fields follow the documented annotated-feedback contract; native JSON spelling supplies the value meaning. These retained presence assertions do not establish complete-output equivalence.
 * @evidence contracts/testing.md#distinguishing-cases This case owns ten object levels, indentation on level ten and five nested array levels. Complementary direct cases preserve their own assertion identity.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test and imports the plugin-free shared oracle; no native producer, installed consumer or host is needed to execute its authored failure objects.
 */
export const test_llm_stringify_deep_indentation = (): void => {
  // Test case: Very deeply nested structure to test indentation (tab parameter)

  const deepData = {
    level1: {
      level2: {
        level3: {
          level4: {
            level5: {
              level6: {
                level7: {
                  level8: {
                    level9: {
                      level10: {
                        value: "deep",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  };

  const failure: IValidation.IFailure = {
    success: false,
    data: deepData,
    errors: [
      {
        path: "$input.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value",
        expected: "number",
        value: "deep",
      },
    ],
  };

  const output: string = LlmJson.stringify(failure);

  TestEquality.equals("contains code block", output.includes("```json"), true);
  TestEquality.equals("contains error marker", output.includes("// ❌"), true);
  // Check that all levels are present
  TestEquality.equals("contains level1", output.includes("level1"), true);
  TestEquality.equals("contains level10", output.includes("level10"), true);
  TestEquality.equals("contains value", output.includes('"value"'), true);

  // Check indentation pattern (multiple spaces before nested keys)
  const lines = output.split("\n");
  const level10Line = lines.find((line) => line.includes("level10"));
  TestEquality.equals(
    "level10 has deep indentation",
    level10Line !== undefined && level10Line.startsWith("  "),
    true,
  );

  // Test: Deep array nesting
  const deepArrayData = {
    matrix: [[[[["deep"]]]]],
  };

  const failure2: IValidation.IFailure = {
    success: false,
    data: deepArrayData,
    errors: [
      {
        path: "$input.matrix[0][0][0][0][0]",
        expected: "number",
        value: "deep",
      },
    ],
  };

  const output2: string = LlmJson.stringify(failure2);
  TestEquality.equals(
    "deep-array-code-block",
    output2.includes("```json"),
    true,
  );
  TestEquality.equals(
    "deep-array-error-marker",
    output2.includes("// ❌"),
    true,
  );
};
