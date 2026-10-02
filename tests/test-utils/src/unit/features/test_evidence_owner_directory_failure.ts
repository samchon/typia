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
