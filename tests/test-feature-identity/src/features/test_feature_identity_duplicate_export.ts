import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/oracle/equality";

import { FeatureIdentity } from "../FeatureIdentity";

/**
 * Verifies the uniqueness rule is scoped to one suite.
 *
 * The boundary is the whole point of the rule. Two files exporting one name
 * inside a suite collide in that suite's single report, but the same name in
 * two suites is legal — `test_llm_schema_enum` really does exist in both
 * `test-typia-schema` and `test-utils`, which run as separate processes with
 * separate reports. A rule that ignored the suite would either miss the real
 * collisions or condemn those legitimate pairs.
 *
 * 1. Assert one name exported by two files of the same suite is reported once,
 *    naming both files.
 * 2. Assert the same name exported by two files of different suites is silent.
 *
 * @evidence contracts/testing.md#behavioral-verification FeatureIdentity.diagnose receives authored file records; one same-suite name collision must yield exactly one uniqueness diagnostic (the colliding record also violates the identity rule, which is a separate diagnostic) naming both files and a cross-suite duplicate must yield none.
 * @evidence contracts/testing.md#independent-expectations The policy states that the report is keyed by one suite's executions; inputs and the expected single diagnostic and empty list are authored, not derived from the implementation.
 * @evidence contracts/testing.md#distinguishing-cases The same-suite collision is the positive case and the identical name across two suites is its negative twin, so ignoring the suite in either direction fails; three-way collisions and unit versus native files of one suite are not asserted separately.
 * @evidence contracts/testing.md#execution-ownership The test-feature-identity start command explicitly imports and calls this exported case; it invokes the pure diagnose function on in-memory records with no git, native artifact or feature module execution.
 */
export const test_feature_identity_duplicate_export = (): void => {
  // 1. SAME SUITE: A COLLISION
  const collision: string[] = FeatureIdentity.diagnose([
    file("test-utils", "test_http_llm_application"),
    {
      ...file("test-utils", "test_http_llm_application_human"),
      exports: ["test_http_llm_application"],
    },
  ]);
  TestEquality.equals(
    "uniqueness diagnostics",
    1,
    collision.filter((line) => line.includes("is exported by 2 files")).length,
  );
  TestValidator.predicate(
    `collision reported: ${collision.join(" | ")}`,
    collision.some(
      (line) =>
        line.includes("test_http_llm_application.ts") &&
        line.includes("test_http_llm_application_human.ts"),
    ),
  );

  // 2. DIFFERENT SUITES: LEGITIMATE
  TestEquality.equals(
    "cross-suite duplicate",
    [] as string[],
    FeatureIdentity.diagnose([
      file("test-typia-schema", "test_llm_schema_enum"),
      file("test-utils", "test_llm_schema_enum"),
    ]),
  );
};

const file = (
  suite: string,
  basename: string,
): FeatureIdentity.IFeatureFile => ({
  suite,
  path: `tests/${suite}/src/features/${basename}.ts`,
  basename,
  exports: [basename],
});
