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
    publish: tag !== "test",
    setup: true,
    testExecutors: [
      {
        name: "test",
        commands:
          tag === "test" && template === true
            ? [
                "pnpm run template",
                "pnpm run build",
                "pnpm start",
                "pnpm run generate",
              ]
            : ["pnpm run build", "pnpm start", "pnpm run generate"],
      },
      {
        name: "test-esm",
        commands: ["pnpm run build", "pnpm start"],
      },
      {
        name: "test-error",
        commands: ["pnpm start"],
      },
      {
        name: "benchmark",
        commands: ["pnpm run build"],
      },
    ],
  });
};
main().catch((exp) => {
  console.error(exp);
  process.exit(-11);
});
