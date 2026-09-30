import assert from "node:assert/strict";
import cp from "node:child_process";
import fs from "node:fs";
import { createRequire } from "node:module";
import os from "node:os";
import path from "node:path";
import test from "node:test";

/**
 * Verifies the installed checker enforces an actual declaration checklist.
 *
 * A working script alone cannot prove that its selected code is obligated. This
 * fixture changes a native documentation answer while keeping the production
 * declaration and independently authored Markdown requirement fixed.
 *
 * 1. Reject a selected exported function with no acknowledgment.
 * 2. Accept its contract-specific answer, then reject an unresolved target.
 * 3. Remove the required document and reject the empty reference population.
 *
 * @evidence contracts/testing.md#behavioral-verification Real installed CLI checks observe missing, restored and unresolved declaration-to-checklist links, followed by an empty reference population; reports and process exits must agree.
 * @evidence contracts/testing.md#independent-expectations The fixture's sole exported function and sole Markdown chapter establish one obligation independently of checker output; 0/1/2 status meanings follow the public CLI contract.
 * @evidence contracts/testing.md#distinguishing-cases Missing and misspelled answers fail, a concrete correct answer passes, and deleting the reference fails as an empty population instead of vacuous success; every run pins its diagnostic class or zero-error result.
 * @evidence contracts/testing.md#execution-ownership Node registers this named exported function in test-evidence's start command; the process runs the actual dependency CLI against a unique fixture and exercises its parsing, configuration, graph and exit boundary.
 * @evidence contracts/e2e.md#necessary-boundary The installed CLI's configuration discovery, grammar loading, graph obligations, JSON reporting and exit result must agree; a mock child or direct result calculation cannot establish that integration.
 * @evidence contracts/e2e.md#shared-execution All four transitions share one installed checker, grammar cache, fixture declaration and requirement; only the answer and missing-reference state change, with no per-case installation or native build.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity A unique temporary root owns fixture/config/report files, each invocation overwrites its report and is bounded by a timeout, and finally removes that root after all child processes have ended.
 * @evidence contracts/e2e.md#preserved-coverage Missing, valid, unresolved and unavailable-reference outcomes remain distinct process/report assertions in this single boundary scenario; it does not substitute successful parsing for declaration-specific review.
 */
export const test_evidence_checker_enforces_acknowledgments = () => {
  const require = createRequire(import.meta.url);
  const executable = path.join(
    path.dirname(require.resolve("@wrtnlabs/evidence/package.json")),
    "lib/executable/evidence.js",
  );
  const root = fs.mkdtempSync(
    path.join(os.tmpdir(), "typia-evidence-checker-"),
  );
  try {
    const config = path.join(root, "evidence.config.json");
    const source = path.join(root, "identity.ts");
    const requirement = path.join(root, "principles.md");
    fs.writeFileSync(
      requirement,
      "# Principles\n\n## Preserve value\n\nReturn the supplied value unchanged.\n",
    );
    fs.writeFileSync(
      config,
      JSON.stringify({
        severity: "error",
        claims: [
          {
            type: "typescript",
            files: ["identity.ts"],
            symbol: "function",
            reference: {
              type: "markdown",
              files: ["principles.md"],
              symbol: "h2",
              checklist: true,
            },
          },
        ],
      }),
    );
    const scenarios = [
      { tag: "", status: 1, code: "graph-checklist-missing" },
      {
        tag: "/** @evidence principles.md#preserve-value The identity function returns its argument without mutation or coercion. */\n",
        status: 0,
      },
      {
        tag: "/** @evidence principles.md#unknown The function preserves its argument. */\n",
        status: 1,
        code: "target-missing-member",
      },
      {
        tag: "",
        status: 1,
        code: "graph-empty-reference",
        missingReference: true,
      },
    ];
    for (const scenario of scenarios) {
      fs.writeFileSync(
        source,
        `${scenario.tag}export const identity = <T>(input: T): T => input;\n`,
      );
      if (scenario.missingReference) fs.rmSync(requirement);
      const reportFile = path.join(root, "report.json");
      const result = cp.spawnSync(
        process.execPath,
        [
          executable,
          "--config",
          config,
          "--format",
          "json",
          "--output",
          reportFile,
        ],
        { encoding: "utf8", timeout: 120_000, windowsHide: true },
      );
      assert.equal(result.error, undefined);
      const report = JSON.parse(fs.readFileSync(reportFile, "utf8"));
      assert.equal(result.status, scenario.status, JSON.stringify(report));
      assert.equal(report.exitCode, scenario.status);
      assert.equal(
        report.status,
        scenario.status === 2 ? "incomplete" : "complete",
      );
      if (scenario.code)
        assert.ok(
          report.diagnostics.some(
            (diagnostic) => diagnostic.code === scenario.code,
          ),
          JSON.stringify(report.diagnostics),
        );
      if (scenario.status === 0) {
        assert.equal(report.success, true);
        assert.equal(report.counts.errors, 0);
      }
    }
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
};

test(
  "Installed Evidence checker enforces declaration answers",
  test_evidence_checker_enforces_acknowledgments,
);
