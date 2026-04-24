#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const builtCli = path.resolve(__dirname, "..", "..", "lib", "cli.js");
if (fs.existsSync(builtCli)) {
  const { main } = require(builtCli);
  const code = main(process.argv.slice(2));
  if (typeof code === "number") {
    process.exitCode = code;
  }
} else {
  process.stderr.write(
    "ttsc: lib/cli.js is missing. Build @typia/ttsc first with `pnpm run build:toolchain`.\n",
  );
  process.exitCode = 1;
}
