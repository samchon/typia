import { TestValidator } from "@nestia/e2e";

import { FeatureIdentity } from "../FeatureIdentity";

/**
 * Verifies a non-`test_` helper file may sit in a feature tree, but may not
 * export a test.
 *
 * Feature trees legitimately hold shared helpers —
 * `test-typia-schema/src/features/plain/PlainNativeClone.ts` is one — so the
 * rule must not demand that every file be a test. The converse still bites:
 * `DynamicExecutor` requires *every* module in the tree and runs *any*
 * `test_`-prefixed export it finds, so a test hidden in a helper file would run
 * under a name no file announces, which is the same identity defect from the
 * other direction.
 *
 * 1. Assert a helper exporting no test function is silent.
 * 2. Assert a helper exporting a test function is reported.
 */
export const test_feature_identity_helper_file = (): void => {
  // 1. AN ORDINARY HELPER IS FINE
  TestValidator.equals(
    "helper",
    [] as string[],
    FeatureIdentity.diagnose([file("PlainNativeClone", [])]),
  );

  // 2. A HELPER MAY NOT HIDE A TEST
  const hidden: string[] = FeatureIdentity.diagnose([
    file("PlainNativeClone", ["test_plain_native_clone"]),
  ]);
  TestValidator.equals("hidden test count", 1, hidden.length);
  TestValidator.predicate(
    `hidden test named: ${hidden[0]}`,
    hidden[0]!.includes("test_plain_native_clone"),
  );
};

const file = (
  basename: string,
  exports: string[],
): FeatureIdentity.IFeatureFile => ({
  suite: "test-typia-schema",
  path: `tests/test-typia-schema/src/features/plain/${basename}.ts`,
  basename,
  exports,
});
