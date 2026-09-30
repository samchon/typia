import { TestEquality } from "@typia/oracle/equality";

import { FeatureIdentity } from "../FeatureIdentity";

/**
 * Verifies the source parser recognizes the real export forms and fails closed
 * on the rest.
 *
 * The parser decides what the rules see, so an over-match would invent tests
 * out of comments or nested code, while an unrecognized-but-real export form
 * must not read as "this file is fine". It must read as "this file exports
 * nothing", which the identity rule reports. Every existing feature file uses
 * `export const`; the other declaration forms are accepted so that a later
 * contributor's `export function` is understood rather than condemned.
 *
 * 1. Assert each top-level declaration form is recognized.
 * 2. Assert a nested namespace declaration, a comment, and a non-`test_` export
 *    are not mistaken for tests.
 * 3. Assert a renamed re-export yields nothing, so the file fails closed.
 *
 * @evidence contracts/testing.md#behavioral-verification FeatureIdentity.parse receives actual module source strings and complete name arrays distinguish supported const and async or ordinary function declarations from comments, namespace members, helpers and renamed exports.
 * @evidence contracts/testing.md#independent-expectations Literal names follow the authored module-level declarations; namespace-local names and comment text do not create module exports, while renamed exports are intentionally outside this analyzer's direct-declaration policy.
 * @evidence contracts/testing.md#distinguishing-cases Three supported declaration forms contrast with comment, valid namespace nesting, non-test values, interface members and a renamed re-export; the separate syntax-boundary unit owns formatting, multiple bindings, value kinds and erased wrappers.
 * @evidence contracts/testing.md#execution-ownership The workspace explicitly imports and calls this synchronous fixture unit; it directly invokes the source parser without constructing a native typia artifact or running a feature module.
 */
export const test_feature_identity_source_parse = (): void => {
  // 1. THE FORMS THAT COUNT
  TestEquality.equals(
    "declaration forms",
    ["test_alpha", "test_beta", "test_gamma"],
    FeatureIdentity.parse(
      [
        "import typia from 'typia';",
        "export const test_alpha = (): void => {};",
        "export async function test_beta(): Promise<void> {}",
        "export function test_gamma(): void {}",
      ].join("\n"),
    ),
  );

  // 2. WHAT MUST NOT COUNT
  TestEquality.equals(
    "non-declarations",
    [] as string[],
    FeatureIdentity.parse(
      [
        "// export const test_commented = (): void => {};",
        "namespace wrapper {",
        "  export const test_nested = 1;",
        "}",
        "export const helper_test_name = (): void => {};",
        "export interface ITest { test_field: string }",
      ].join("\n"),
    ),
  );

  // 3. AN EXOTIC EXPORT FAILS CLOSED
  TestEquality.equals(
    "renamed re-export",
    [] as string[],
    FeatureIdentity.parse(
      [
        "const inner = (): void => {};",
        "export { inner as test_renamed };",
      ].join("\n"),
    ),
  );
};
