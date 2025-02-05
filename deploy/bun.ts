import cp from "child_process";
import { parseArgs } from "node:util";

import * as DeployRunner from "./internal/DeployRunner.js";

const has_bun = (): boolean => {
  try {
    cp.execSync("bun --version", { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
};

if (has_bun() === false) {
  console.log("bun is not installed");
  process.exit(-1);
}

const args = process.argv.slice(2);
const {
  values: { skipSetup },
} = parseArgs({
  args,
  options: {
    skipSetup: { type: "boolean", shor: "s", default: false },
  },
});

if (skipSetup === undefined) {
  throw new Error("skipSetup is undefined");
}

await DeployRunner.main({
  tag: "test",
  publish: false,
  setup: !skipSetup,
  testExecutors: [
    {
      name: "test",
      commands: ["bun --bun run build_run", "bun --bun run start"],
    },
    {
      name: "test-esm",
      commands: ["bun --bun run build", "bun --bun run start"],
    },
  ],
});
