import { TestValidator } from "@nestia/e2e";

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
 * 2. Assert an indented declaration, a comment, and a non-`test_` export are not
 *    mistaken for tests.
 * 3. Assert a renamed re-export yields nothing, so the file fails closed.
 */
export const test_feature_identity_source_parse = (): void => {
  // 1. THE FORMS THAT COUNT
  TestValidator.equals(
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
  TestValidator.equals(
    "non-declarations",
    [] as string[],
    FeatureIdentity.parse(
      [
        "// export const test_commented = (): void => {};",
        "const wrapper = () => {",
        "  export const test_nested = 1;",
        "};",
        "export const helper_test_name = (): void => {};",
        "export interface ITest { test_field: string }",
      ].join("\n"),
    ),
  );

  // 3. AN EXOTIC EXPORT FAILS CLOSED
  TestValidator.equals(
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
