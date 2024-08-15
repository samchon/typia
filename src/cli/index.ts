import { defineCommand, runMain } from "citty";

import { wizard } from "./utils/message";

import { generateCommand } from "./subcommands/generate";
import { patchCommand } from "./subcommands/patch";
import { setupCommand } from "./subcommands/setup";

export async function cli() {
  const main = defineCommand({
    meta: {
      name: "typia",
      version: "1.0.0",
      description: "CLI for Typia operations",
    },
    subCommands: {
      setup: setupCommand,
      patch: patchCommand,
      generate: generateCommand,
    },
    setup() {
      wizard();
    },
  });

  await runMain(main);
}
