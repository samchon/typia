#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const root = fs.realpathSync.native?.(__dirname) ?? fs.realpathSync(__dirname);
const packageRoot = path.resolve(root, "..");
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

const result = spawnSync(command, ["run", "./cmd/ttsc", ...argv], {
  cwd: packageRoot,
  env: process.env,
  stdio: "inherit",
  windowsHide: true,
});

if (result.error) {
  process.stderr.write(`ttsc: failed to launch source checkout via ${command}: ${result.error.message}\n`);
  process.exitCode = 1;
} else {
  process.exitCode = result.status ?? 1;
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
