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
  const devLauncher = path.resolve(__dirname, "ttsc-dev.js");
  const result = spawnSync(
    process.execPath,
    [devLauncher, ...process.argv.slice(2)],
    {
      stdio: "inherit",
      env: process.env,
      windowsHide: true,
    },
  );
  if (result.error) {
    process.stderr.write(`ttsc: failed to launch source checkout: ${result.error.message}\n`);
    process.exitCode = 1;
  } else {
    process.exitCode = result.status ?? 1;
  }
}
