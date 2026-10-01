import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/oracle/equality";

import { FeatureIdentity } from "../FeatureIdentity";

/**
 * Verifies a non-`test_` helper file may sit in a feature tree, but may not
 * export a test.
 *
 * Feature trees legitimately hold shared helpers —
 * `test-typia-schema/src/features/plain/PlainNativeClone.ts` is one — so the
 * rule must not demand that every file be a test. The converse still bites:
 * `DynamicExecutor` requires _every_ module in the tree and runs _any_
 * `test_`-prefixed export it finds, so a test hidden in a helper file would run
 * under a name no file announces, which is the same identity defect from the
 * other direction.
 *
 * 1. Assert a helper exporting no test function is silent.
 * 2. Assert a helper exporting a test function is reported.
 *
 * @evidence contracts/testing.md#behavioral-verification FeatureIdentity.diagnose receives an authored helper record with and without a hidden test export; the silent result and the single diagnostic naming the hidden test are asserted.
 * @evidence contracts/testing.md#independent-expectations DynamicExecutor runs every test_-prefixed export it finds, so a hidden test is a defect; the records and expectations are authored from that discovery rule rather than the diagnose implementation.
 * @evidence contracts/testing.md#distinguishing-cases A helper without a test export is silent and the same helper exporting one is reported; helpers outside feature trees are filtered by collection, not asserted here.
 * @evidence contracts/testing.md#execution-ownership The test-feature-identity start command explicitly imports and calls this exported case; it invokes the pure diagnose function on in-memory records with no git, native artifact or feature module execution.
 */
export const test_feature_identity_helper_file = (): void => {
  // 1. AN ORDINARY HELPER IS FINE
  TestEquality.equals(
    "helper",
    [] as string[],
    FeatureIdentity.diagnose([file("PlainNativeClone", [])]),
  );

  // 2. A HELPER MAY NOT HIDE A TEST
  const hidden: string[] = FeatureIdentity.diagnose([
    file("PlainNativeClone", ["test_plain_native_clone"]),
  ]);
  TestEquality.equals("hidden test count", 1, hidden.length);
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
