const cp = require("node:child_process");
const path = require("node:path");

const [command, ...args] = process.argv.slice(2);
if (!command) {
  console.error("Usage: node scripts/with-ttsc-cache.cjs <command> [...args]");
  process.exit(1);
}

const env = {
  ...process.env,
  TTSC_CACHE_DIR:
    process.env.TTSC_CACHE_DIR ??
    path.resolve(__dirname, "..", "node_modules", ".ttsc"),
};

const result = cp.spawnSync(command, args, {
  env,
  shell: process.platform === "win32",
  stdio: "inherit",
});

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}
process.exit(result.status ?? 1);
