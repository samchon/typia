import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_deep_indentation = (): void => {
  // Test case: Very deeply nested structure to test indentation (tab parameter)
  // This tests line 62: const indent = "  ".repeat(tab)

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

  TestValidator.equals(
    "contains code block",
    output.includes("```json"),
    true,
  );
  TestValidator.equals(
    "contains error marker",
    output.includes("// ❌"),
    true,
  );
  // Check that all levels are present
  TestValidator.equals("contains level1", output.includes("level1"), true);
  TestValidator.equals("contains level10", output.includes("level10"), true);
  TestValidator.equals("contains value", output.includes('"value"'), true);

  // Check indentation pattern (multiple spaces before nested keys)
  const lines = output.split("\n");
  const level10Line = lines.find((line) => line.includes("level10"));
  TestValidator.equals(
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
  TestValidator.equals(
    "deep-array-code-block",
    output2.includes("```json"),
    true,
  );
  TestValidator.equals(
    "deep-array-error-marker",
    output2.includes("// ❌"),
    true,
  );
};
