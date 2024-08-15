import process from "node:process";
import { defineCommand, runMain, showUsage } from "citty";
import { wizard } from "./utils/message";
import { patchCommand } from "./subcommands/patch";
import { generateCommand } from "./subcommands/generate";
import { setupCommand } from "./subcommands/setup";

export async function cli(){
  const main = defineCommand({
    meta: {
      name: "typia-cli",
      version: "1.0.0",
      description: "CLI for Typia operations",
    },
    subCommands:{
      setup: setupCommand,
      patch: patchCommand,
      generate: generateCommand,
    },
    setup(){
      wizard();
    },
    async run()  {
      await showUsage(main);
    }
  });

  try {
    await runMain(main)
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
