const cp = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

/**
 * Checks every production owner and the authored test populations.
 *
 * A failed owner does not prevent the remaining owners from reporting their
 * obligations. Incomplete analysis takes precedence over ordinary violations.
 * JSON configurations run through Node without building the typia transformer.
 *
 * @evidence contracts/common.md#principled-implementation Each config runs through the installed checker; aggregate exit status preserves incomplete analysis over violations and continues after both.
 * @evidence contracts/common.md#clear-and-simple-design One sequential loop owns invocation and result aggregation; callers provide the checkout and checker entry for isolated harness tests.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The runner uses the installed public CLI and every package owner, without patching dependencies or interpreting checker diagnostics as success.
 * @evidence contracts/common.md#meaningful-documentation The comment explains complete reporting, status precedence and independence from the native build; defaults name the checkout and checker entry.
 * @evidence contracts/portability.md#os-neutral-implementation Node's executable runs the checker with an argument array and native joined paths, avoiding platform-specific pnpm shim or shell quoting.
 * @evidence contracts/performance.md#efficient-algorithms Enumerating package owners and invoking each checker once costs one directory scan plus the checker's work; sequential execution bounds simultaneous parser memory.
 * @evidenceExclude contracts/performance.md#reuse-equivalent-work Each invocation validates different source and reference scopes once; this runner owns no repeated-request computation or cached graph and delegates graph reuse to the checker.
 * @evidence contracts/performance.md#bound-retention-and-release-resources Synchronous child processes finish before the next owner starts and inherit output rather than retaining reports; the runner owns no persistent handles or cache.
 */
function checkEvidence(
  root = path.resolve(__dirname, ".."),
  executable = path.join(
    path.dirname(require.resolve("@wrtnlabs/evidence/package.json")),
    "lib/executable/evidence.js",
  ),
) {
  let entries;
  try {
    entries = fs.readdirSync(path.join(root, "packages"), {
      withFileTypes: true,
    });
  } catch (error) {
    console.error(error);
    return 2;
  }
  const owners = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => `packages/${entry.name}/evidence.config.json`)
    .sort();
  const configs = [
    ...owners,
    "tests/evidence.config.json",
    "evidence.config.json",
  ];
  let status = 0;
  for (const config of configs) {
    console.log(`Evidence owner: ${config}`);
    const result = cp.spawnSync(
      process.execPath,
      [executable, "--config", path.join(root, config)],
      { cwd: root, stdio: "inherit", windowsHide: true },
    );
    if (result.error) console.error(result.error);
    const code =
      result.error || result.signal || result.status === null
        ? 2
        : result.status === 0
          ? 0
          : result.status === 1
            ? 1
            : 2;
    status = Math.max(status, code);
  }
  return status;
}

module.exports = { checkEvidence };

if (require.main === module) process.exitCode = checkEvidence();
