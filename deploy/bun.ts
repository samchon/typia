import cp from "child_process";

import { DeployRunner } from "./internal/DeployRunner";

const has_bun = (): boolean => {
  try {
    cp.execSync("bun --version", { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
};

const main = async (): Promise<void> => {
  if (has_bun() === false) return;
  await DeployRunner.main({
    tag: "tgz",
    publish: false,
    setup: process.argv.includes("--skipSetup") === false,
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
};
main().catch((exp) => {
  console.error(exp);
  process.exit(-11);
});
