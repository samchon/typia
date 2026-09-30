import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { checkEvidence } from "../../../../scripts/check-evidence.cjs";

/**
 * Verifies every owner runs despite violations or incomplete analysis.
 *
 * A first-failure exit would hide later obligations, while returning ordinary
 * failure for incomplete analysis would misrepresent the graph's completeness.
 * Child invocations record their actual received config arguments, so the
 * oracle observes execution rather than a source or manifest arrangement.
 *
 * 1. Create three package owners and a checker process with controlled results.
 * 2. Place success, violation and incomplete results in different owner orders.
 * 3. Verify every invocation occurs and incomplete analysis wins aggregation,
 *    including an unexpected child status and an unavailable owner directory.
 *
 * @evidence contracts/testing.md#behavioral-verification Calls the actual runner and reads each checker child's received argument path from its execution log; early failure, omitted owners and lost incomplete status produce different assertions.
 * @evidence contracts/testing.md#independent-expectations Literal exit codes follow the public Evidence CLI contract: complete success is 0, violations are 1 and incomplete analysis is 2; the expected owner set comes from deliberately created fixture inputs.
 * @evidence contracts/testing.md#distinguishing-cases Success, violation and incomplete results occupy first, middle and last package positions; all-success proves aggregation does not always fail, an unexpected child code and missing discovery root become incomplete, and each spawned run includes the final test/tooling owners.
 * @evidence contracts/testing.md#execution-ownership Node's test runner registers the named exported function from test-evidence's canonical start command; the scenario owns child argument delivery and aggregate exit handling, not Evidence's parsing or obligation semantics.
 * @evidence contracts/e2e.md#necessary-boundary Real Node child processes expose spawn argument delivery and exit-status propagation through the production runner; a calculation-only test cannot show that later owners actually ran after an earlier child failed.
 * @evidence contracts/e2e.md#shared-execution One temporary root and checker entry serve all result permutations, with no installation or native build per case; each permutation needs separate children because their process exit results are the boundary under test.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation resets its status fixture and execution log; a unique temporary directory isolates the test, children finish synchronously, and finally removes only that owned root even after assertion failure.
 * @evidence contracts/e2e.md#preserved-coverage Every permutation asserts both the complete invocation sequence and final aggregate code, preserving owner-continuation and status distinctions without transferring semantic checker assertions into this fixture.
 */
export const test_evidence_runner_collects_failures = () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "typia-evidence-runner-"));
  try {
    const owners = ["alpha", "beta", "gamma"];
    for (const owner of owners)
      fs.mkdirSync(path.join(root, "packages", owner), { recursive: true });
    const executable = path.join(root, "checker.cjs");
    fs.writeFileSync(
      executable,
      `const fs = require("node:fs");
const path = require("node:path");
const config = path.relative(__dirname, process.argv[3]).replaceAll("\\\\", "/");
fs.appendFileSync(path.join(__dirname, "executed.jsonl"), JSON.stringify(config) + "\\n");
const statuses = JSON.parse(fs.readFileSync(path.join(__dirname, "statuses.json"), "utf8"));
process.exitCode = statuses[config] ?? 0;
`,
    );
    const expected = [
      ...owners.map((owner) => `packages/${owner}/evidence.config.json`),
      "tests/evidence.config.json",
      "evidence.config.json",
    ];
    for (const statuses of [
      [0, 0, 0],
      [1, 0, 0],
      [1, 2, 0],
      [2, 0, 1],
      [0, 1, 2],
      [0, 0, 3],
    ]) {
      const log = path.join(root, "executed.jsonl");
      fs.writeFileSync(log, "");
      fs.writeFileSync(
        path.join(root, "statuses.json"),
        JSON.stringify(
          Object.fromEntries(statuses.map((code, i) => [expected[i], code])),
        ),
      );
      assert.equal(
        checkEvidence(root, executable),
        Math.max(...statuses.map((code) => (code > 1 ? 2 : code))),
      );
      assert.deepEqual(
        fs
          .readFileSync(log, "utf8")
          .trim()
          .split("\n")
          .map((line) => JSON.parse(line)),
        expected,
      );
    }
    assert.equal(checkEvidence(path.join(root, "absent"), executable), 2);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
};

test(
  "Evidence runner collects every owner and preserves status",
  test_evidence_runner_collects_failures,
);
