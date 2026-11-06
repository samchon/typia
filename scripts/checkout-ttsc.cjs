const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

/**
 * Checks out the native SDK matching the website's installed browser host.
 *
 * Git refuses an existing nonempty sibling, preserving local SDK work.
 *
 * @evidence contracts/common.md#principled-implementation The installed wasm package supplies the exact release tag so the sibling Go SDK and browser host use the same published interface.
 * @evidence contracts/common.md#clear-and-simple-design One package read and one git invocation own the checkout; installation and website compilation remain workflow steps.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The tag derives from installed dependency metadata and uses git's ordinary clone boundary without modifying an existing checkout.
 * @evidence contracts/common.md#meaningful-documentation The comment states the interface-matching purpose and the existing-sibling failure behavior.
 */
function checkoutTtsc() {
  const root = path.resolve(__dirname, "..");
  const { version } = JSON.parse(
    fs.readFileSync(
      path.join(root, "website/node_modules/@ttsc/wasm/package.json"),
      "utf8",
    ),
  );
  if (typeof version !== "string" || !version.trim())
    throw new Error("Installed @ttsc/wasm has no version");
  const result = spawnSync(
    "git",
    [
      "clone",
      "--branch",
      `v${version}`,
      "--depth",
      "1",
      "https://github.com/samchon/ttsc.git",
      path.resolve(root, "../ttsc"),
    ],
    { cwd: root, stdio: "inherit", windowsHide: true },
  );
  if (result.error) throw result.error;
  process.exitCode = result.status ?? 1;
}

module.exports = { checkoutTtsc };

if (require.main === module) checkoutTtsc();
