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
const nativeBinary = resolveNativeBinary();
const invocationCwd = process.cwd();
const argv = [...process.argv.slice(2)];

if (
  argv.length > 0 &&
  needsCwd(argv[0]!) &&
  !argv.some((value) => value === "--cwd" || value.startsWith("--cwd="))
) {
  argv.push(`--cwd=${invocationCwd}`);
}

const hasNativeBinary = fs.existsSync(nativeBinary);

if (!hasNativeBinary) {
  process.stderr.write(
    "ttsc-typia: backend is missing. Expected a platform @typia native package or a package-local ttsc-typia-native binary.\n",
  );
  process.exitCode = 1;
} else {
  if (hasNativeBinary && process.platform !== "win32") {
    try {
      const mode = fs.statSync(nativeBinary).mode & 0o777;
      if ((mode & 0o111) === 0) {
        fs.chmodSync(nativeBinary, mode | 0o755);
      }
    } catch {
      /* keep the original spawn error path */
    }
  }
  const result = spawnSync(nativeBinary, argv, {
    env: process.env,
    stdio: "inherit",
    windowsHide: true,
  });
  if (result.error) {
    process.stderr.write(
      `ttsc-typia: failed to launch prebuilt backend: ${result.error.message}\n`,
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

function resolveNativeBinary(): string {
  const name =
    process.platform === "win32"
      ? "ttsc-typia-native.exe"
      : "ttsc-typia-native";
  const local = path.resolve(packageRoot, "bin", name);
  if (fs.existsSync(local)) return local;
  const platformKey = `${process.platform}-${process.arch}`;
  const optionalRequest = `@typia/${platformKey}/bin/${name}`;
  try {
    return require.resolve(optionalRequest, {
      paths: [packageRoot, process.cwd()],
    });
  } catch {
    return local;
  }
}
