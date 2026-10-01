import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/oracle/equality";

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
 *
 * @evidence contracts/testing.md#behavioral-verification FeatureIdentity.diagnose receives authored file records and the count and text of each diagnostic are asserted for matching, mismatched, empty and doubled exports.
 * @evidence contracts/testing.md#independent-expectations The identity rule (one export equal to the basename) is the repository's declared contract; records and expected counts are authored, and the mismatch text must name both sides rather than match a snapshot.
 * @evidence contracts/testing.md#distinguishing-cases The matching file is the negative twin, while a different name, no export and two exports are the rejection cases; non-test helper files are owned by test_feature_identity_helper_file.
 * @evidence contracts/testing.md#execution-ownership The test-feature-identity start command explicitly imports and calls this exported case; it invokes the pure diagnose function on in-memory records with no git, native artifact or feature module execution.
 */
export const test_feature_identity_filename_mismatch = (): void => {
  // 1. THE MATCHING TWIN STAYS SILENT
  TestEquality.equals(
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
  TestEquality.equals("mismatch count", 1, mismatch.length);
  TestValidator.predicate(
    `mismatch names both sides: ${mismatch[0]}`,
    mismatch[0]!.includes("test_http_llm_function_deprecated") &&
      mismatch[0]!.includes("test_http_llm_function_tags"),
  );

  // 3. FAIL CLOSED ON ZERO AND ON MANY
  TestEquality.equals(
    "no export",
    1,
    FeatureIdentity.diagnose([file("test_llm_schema_enum", [])]).length,
  );
  TestEquality.equals(
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
