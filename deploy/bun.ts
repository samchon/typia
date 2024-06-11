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
        commands:
          process.argv[3] === "template"
            ? ["npm run template", "npm run build", "npm start"]
            : ["npm run build", "npm start"],
      },
      {
        name: "test-esm",
        commands: ["npm run build", "npm start"],
      },
      {
        name: "errors",
        commands: ["npm start"],
      },
      {
        name: "benchmark",
        commands: ["npm run build"],
      },
    ],
  });
};
main().catch((exp) => {
  console.error(exp);
  process.exit(-11);
});
