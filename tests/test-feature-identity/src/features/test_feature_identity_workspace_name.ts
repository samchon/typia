import { TestEquality } from "@typia/oracle/equality";

import { RepositoryIntegrity } from "../RepositoryIntegrity";

/**
 * Verifies workspace naming diagnostics against explicit fixture records.
 *
 * The @typia/directory rule is a repository selection constraint. Testing its
 * analyzer requires changing that input and observing diagnostics, while the
 * separate integrity command enforces the policy on the maintained tree.
 *
 * 1. Accept an empty population and correctly named ordinary/Unicode records.
 * 2. Reject a different scope, a different directory and a missing name.
 * 3. Return all mismatches in deterministic source-path order.
 *
 * @evidence contracts/testing.md#behavioral-verification Calls diagnoseWorkspaceNames on fixture records and compares exact diagnostics; it tests policy decisions rather than asserting that current manifests contain a string.
 * @evidence contracts/testing.md#independent-expectations The declared @typia/directory identity rule gives literal accepted names and mismatch diagnostics; deliberate records establish empty, correct and one-axis incorrect inputs independently of maintained manifests.
 * @evidence contracts/testing.md#distinguishing-cases Empty and correct ordinary/Unicode names pass; changing scope, directory or an absent name fails, and reversed fixture order must not change sorted diagnostics.
 * @evidence contracts/testing.md#execution-ownership The feature-identity runner explicitly imports and invokes this exported function; root test:integrity separately scans maintained manifests, and this fixture case does not claim to run pnpm selection.
 */
export const test_feature_identity_workspace_name = (): void => {
  TestEquality.equals(
    "empty workspaces",
    [] as string[],
    RepositoryIntegrity.diagnoseWorkspaceNames([]),
  );
  TestEquality.equals(
    "valid names",
    [] as string[],
    RepositoryIntegrity.diagnoseWorkspaceNames([
      {
        path: "tests/test-utils/package.json",
        directory: "test-utils",
        name: "@typia/test-utils",
      },
      {
        path: "tests/test-??/package.json",
        directory: "test-??",
        name: "@typia/test-??",
      },
    ]),
  );
  const inputs = [
    {
      path: "tests/test-z/package.json",
      directory: "test-z",
      name: "@other/test-z",
    },
    {
      path: "tests/test-a/package.json",
      directory: "test-a",
      name: "@typia/test-b",
    },
    { path: "tests/test-m/package.json", directory: "test-m", name: "" },
  ];
  const expected = [
    'tests/test-a/package.json: declares the name "@typia/test-b" but its directory demands "@typia/test-a". "pnpm --filter" selects a workspace by package name and exits 0 when it matches nothing, so the two must agree.',
    'tests/test-m/package.json: declares the name "" but its directory demands "@typia/test-m". "pnpm --filter" selects a workspace by package name and exits 0 when it matches nothing, so the two must agree.',
    'tests/test-z/package.json: declares the name "@other/test-z" but its directory demands "@typia/test-z". "pnpm --filter" selects a workspace by package name and exits 0 when it matches nothing, so the two must agree.',
  ];
  TestEquality.equals(
    "mismatched names",
    expected,
    RepositoryIntegrity.diagnoseWorkspaceNames(inputs),
  );
  TestEquality.equals(
    "input order independent",
    expected,
    RepositoryIntegrity.diagnoseWorkspaceNames([...inputs].reverse()),
  );
};
