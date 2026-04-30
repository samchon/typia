const { spawnSync } = require(
  "node:child_process",
) as typeof import("node:child_process");
const fs = require("node:fs") as typeof import("node:fs");
const path = require("node:path") as typeof import("node:path");

const packageRoot = path.resolve(
  path.dirname(path.resolve(process.argv[1] ?? "")),
  "..",
  "..",
  "..",
);
const nativeProject = path.resolve(packageRoot, "native");
const nativeEntrypoint = path.resolve(
  nativeProject,
  "cmd",
  "ttsc-typia",
  "main.go",
);
const command = process.platform === "win32" ? "go.exe" : "go";
const invocationCwd = process.cwd();
const argv = [...process.argv.slice(2)];

if (
  process.env.TYPIA_TTSC_TRANSFORM_OUTPUT === "ts" &&
  argv[0] === "transform" &&
  !argv.some((value) => value === "--output" || value.startsWith("--output="))
) {
  argv.push("--output=ts");
}

if (
  argv.length > 0 &&
  needsCwd(argv[0]!) &&
  !argv.some((value) => value === "--cwd" || value.startsWith("--cwd="))
) {
  argv.push(`--cwd=${invocationCwd}`);
}

const hasSourceEntrypoint = fs.existsSync(nativeEntrypoint);

if (!hasSourceEntrypoint) {
  process.stderr.write(
    "ttsc-typia: backend source is missing. Expected native/cmd/ttsc-typia/main.go inside the typia package.\n",
  );
  process.exitCode = 1;
} else {
  const result = spawnSync(command, ["run", "./cmd/ttsc-typia", ...argv], {
    cwd: nativeProject,
    env: process.env,
    stdio: "inherit",
    windowsHide: true,
  });
  if (result.error) {
    process.stderr.write(
      `ttsc-typia: failed to launch source backend via ${command}: ${result.error.message}\n`,
    );
    process.exitCode = 1;
  } else {
    process.exitCode = result.status ?? 1;
  }
}

function needsCwd(commandName: string): boolean {
  return (
    commandName === "build" ||
    commandName === "check" ||
    commandName === "transform" ||
    commandName === "-p" ||
    commandName === "--project"
  );
}
