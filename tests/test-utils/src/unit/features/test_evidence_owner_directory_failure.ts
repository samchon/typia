import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

/**
 * Verifies Evidence owner enumeration reports missing directories as
 * incomplete.
 *
 * The root runner must return its documented incomplete-analysis status rather
 * than throw before it can aggregate checker results. Package and test
 * directory discovery belong to the same failure contract.
 *
 * 1. Create an isolated checkout fixture with no owner directories.
 * 2. Check missing packages, then missing tests after creating packages.
 * 3. Remove the owned fixture on both success and failure.
 *
 * @evidence contracts/testing.md#behavioral-verification The real root checkEvidence function must return status 2 for missing packages and missing tests instead of exposing ENOENT to its caller.
 * @evidence contracts/testing.md#independent-expectations The documented incomplete-analysis status is 2; literal fixture directory states independently determine that discovery cannot finish before any checker process starts.
 * @evidence contracts/testing.md#distinguishing-cases Missing packages and present packages with missing tests exercise distinct discovery failures. This case does not verify normal checker aggregation; the official root pnpm evidence command executes that path.
 * @evidence contracts/testing.md#execution-ownership The plugin-free test-utils unit runner explicitly registers this exported case. It directly loads the maintained root function and uses an owned temporary filesystem fixture; discovery fails before launching a CLI, native producer or host.
 */
export const test_evidence_owner_directory_failure = (): void => {
  const { checkEvidence } = require(
    path.resolve(__dirname, "../../../../../scripts/check-evidence.cjs"),
  ) as { checkEvidence: (root: string, executable: string) => number };
  const prefix = path.join(os.tmpdir(), "typia-evidence-owner-");
  const root = fs.mkdtempSync(prefix);
  try {
    assert.equal(checkEvidence(root, process.execPath), 2);
    fs.mkdirSync(path.join(root, "packages"));
    assert.equal(checkEvidence(root, process.execPath), 2);
  } finally {
    assert.equal(path.resolve(root).startsWith(path.resolve(prefix)), true);
    fs.rmSync(root, { recursive: true, force: true });
  }
};
