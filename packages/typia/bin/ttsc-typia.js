#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const packageRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(packageRoot, "..", "..");
const nativeProject = path.resolve(repoRoot, "packages", "transform", "native");
const nativeBinary = path.resolve(
  __dirname,
  process.platform === "win32" ? "ttsc-typia-native.exe" : "ttsc-typia-native",
);
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
  argv.length > 0 &&
  needsCwd(argv[0]) &&
  !argv.some((value) => value === "--cwd" || value.startsWith("--cwd="))
) {
  argv.push(`--cwd=${invocationCwd}`);
}

if (!fs.existsSync(nativeEntrypoint)) {
  process.stderr.write(
    "ttsc-typia: source checkout backend is missing. Expected packages/transform/native/cmd/ttsc-typia/main.go.\n",
  );
  process.exitCode = 1;
} else {
  const result = fs.existsSync(nativeBinary)
    ? spawnSync(nativeBinary, argv, {
        env: process.env,
        stdio: "inherit",
        windowsHide: true,
      })
    : spawnSync(command, ["run", "./cmd/ttsc-typia", ...argv], {
        cwd: nativeProject,
        env: process.env,
        stdio: "inherit",
        windowsHide: true,
      });
  if (result.error) {
    process.stderr.write(
      fs.existsSync(nativeBinary)
        ? `ttsc-typia: failed to launch prebuilt backend: ${result.error.message}\n`
        : `ttsc-typia: failed to launch source checkout via ${command}: ${result.error.message}\n`,
    );
    process.exitCode = 1;
  } else {
    process.exitCode = result.status ?? 1;
  }
}

function needsCwd(commandName) {
  return (
    commandName === "build" ||
    commandName === "check" ||
    commandName === "transform" ||
    commandName === "-p" ||
    commandName === "--project"
  );
}
