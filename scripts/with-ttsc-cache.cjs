const cp = require("node:child_process");
const path = require("node:path");

const rawArgs = process.argv.slice(2);
const useTsNodeRuntime = rawArgs[0] === "--ts-node-runtime";
const [command, ...args] = (
  useTsNodeRuntime ? rawArgs.slice(1) : rawArgs
);
if (!command) {
  console.error(
    "Usage: node scripts/with-ttsc-cache.cjs [--ts-node-runtime] <command> [...args]",
  );
  process.exit(1);
}

const runtimeNodeOptions = [
  "--no-experimental-strip-types",
  "--require=ts-node/register/transpile-only",
];
const nodeOptions = useTsNodeRuntime
  ? [
      process.env.NODE_OPTIONS,
      ...runtimeNodeOptions.filter(
        (option) => !process.env.NODE_OPTIONS?.includes(option),
      ),
    ]
      .filter(Boolean)
      .join(" ")
  : process.env.NODE_OPTIONS;

const env = {
  ...process.env,
  ...(nodeOptions ? { NODE_OPTIONS: nodeOptions } : {}),
  ...(useTsNodeRuntime ? { TS_NODE_TRANSPILE_ONLY: "1" } : {}),
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
