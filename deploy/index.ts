import { parseArgs } from "node:util";

import { DeployRunner } from "./internal/DeployRunner";

const main = async (): Promise<void> => {
  const args: string[] = process.argv.slice(2);
  const {
    values: { tag, template },
  } = parseArgs({
    args,
    options: {
      tag: { type: "string", short: "t" },
      template: { type: "boolean", short: "p", default: false },
    },
  });
  if (tag === undefined) {
    console.log("specify tag name like latest or next");
    process.exit(-1);
  }
  await DeployRunner.main({
    tag,
    publish: tag !== "tgz",
    setup: true,
    testExecutors: [
      {
        name: "test",
        commands:
          tag === "tgz" && template === true
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
