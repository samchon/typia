import { TestValidator } from "@nestia/e2e";

import { FeatureIdentity } from "../FeatureIdentity";

/**
 * Verifies the identity rule flags a `test_*` file whose export is not its own
 * name.
 *
 * Pins the rule that caught the five original defects, together with the twins
 * that must stay silent. Without the negative twin an over-eager rule would
 * flag the whole tree, and without the zero- and multi-export cases an exotic
 * export form would slip through unchecked instead of failing closed.
 *
 * 1. Assert a file whose export equals its basename yields no diagnostic.
 * 2. Assert a file exporting a different name is reported, naming both sides.
 * 3. Assert a file exporting nothing, and a file exporting two tests, are both
 *    reported.
 */
export const test_feature_identity_filename_mismatch = (): void => {
  // 1. THE MATCHING TWIN STAYS SILENT
  TestValidator.equals(
    "matching",
    [] as string[],
    FeatureIdentity.diagnose([
      file("test_llm_schema_enum", ["test_llm_schema_enum"]),
    ]),
  );

  // 2. THE MISMATCH IS REPORTED
  const mismatch: string[] = FeatureIdentity.diagnose([
    file("test_http_llm_function_tags", ["test_http_llm_function_deprecated"]),
  ]);
  TestValidator.equals("mismatch count", 1, mismatch.length);
  TestValidator.predicate(
    `mismatch names both sides: ${mismatch[0]}`,
    mismatch[0]!.includes("test_http_llm_function_deprecated") &&
      mismatch[0]!.includes("test_http_llm_function_tags"),
  );

  // 3. FAIL CLOSED ON ZERO AND ON MANY
  TestValidator.equals(
    "no export",
    1,
    FeatureIdentity.diagnose([file("test_llm_schema_enum", [])]).length,
  );
  TestValidator.equals(
    "two exports",
    1,
    FeatureIdentity.diagnose([
      file("test_llm_schema_enum", ["test_llm_schema_enum", "test_extra"]),
    ]).length,
  );
};

const file = (
  basename: string,
  exports: string[],
): FeatureIdentity.IFeatureFile => ({
  suite: "test-utils",
  path: `tests/test-utils/src/features/${basename}.ts`,
  basename,
  exports,
});
