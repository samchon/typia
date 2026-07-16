import { TestValidator } from "@nestia/e2e";

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
 * 2. Assert the same name exported by two files of different suites is
 *    silent.
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
  TestValidator.predicate(
    `collision reported: ${collision.join(" | ")}`,
    collision.some(
      (line) =>
        line.includes("test_http_llm_application.ts") &&
        line.includes("test_http_llm_application_human.ts"),
    ),
  );

  // 2. DIFFERENT SUITES: LEGITIMATE
  TestValidator.equals(
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
