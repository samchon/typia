#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const builtCli = path.resolve(__dirname, "..", "lib", "cli.js");
if (fs.existsSync(builtCli)) {
  const { main } = require(builtCli);
  const code = main(process.argv.slice(2));
  if (typeof code === "number") {
    process.exitCode = code;
  }
} else {
  const packageRoot = path.resolve(__dirname, "..");
  const ttscDev = path.resolve(packageRoot, "..", "ttsc", "bin", "ttsc-dev.js");
  const ttscRoot = path.resolve(packageRoot, "..", "ttsc");
  const ttscBuild = bootstrapWithTtscDev(ttscDev, ttscRoot);
  if (ttscBuild.error) {
    process.stderr.write(
      `ttsx: failed to bootstrap @typia/ttsc in source checkout: ${ttscBuild.error.message}\n`,
    );
    process.exitCode = 1;
  } else if ((ttscBuild.status ?? 1) !== 0) {
    process.exitCode = ttscBuild.status ?? 1;
  } else {
    const build = bootstrapWithTtscDev(ttscDev, packageRoot);
    if (build.error) {
      process.stderr.write(`ttsx: failed to bootstrap source checkout: ${build.error.message}\n`);
      process.exitCode = 1;
    } else if ((build.status ?? 1) !== 0) {
      process.exitCode = build.status ?? 1;
    } else if (fs.existsSync(builtCli)) {
      const { main } = require(builtCli);
      const code = main(process.argv.slice(2));
      if (typeof code === "number") {
        process.exitCode = code;
      }
    } else {
      process.stderr.write("ttsx: bootstrap succeeded but lib/cli.js is still missing\n");
      process.exitCode = 1;
    }
  }
}

function bootstrapWithTtscDev(ttscDev, cwd) {
  return spawnSync(
    process.execPath,
    [ttscDev, "build", "--emit", "--tsconfig=tsconfig.json", `--cwd=${cwd}`],
    {
      stdio: "inherit",
      env: process.env,
      windowsHide: true,
    },
  );
}
