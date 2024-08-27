import { command } from 'cleye';
import { TypiaProgrammer } from "../../programmers/TypiaProgrammer";

import { findTsConfig } from "../utils/confFiles";
import { logger } from "../utils/logger";
import { bail } from "../utils/message";

export const generate = command({
  name: "generate",

  flags: {
    input: {
      type: String,
      description: "input directory",
    },
    output: {
      type: String,
      description: "output directory",
    },
    project: {
      type: String,
      description: "tsconfig.json file path (e.g. ./tsconfig.test.json)",
    },
  },

  help: {
      description: "Generate Typia files",
  }
}, async (argv) => {
    let { input, output, project } = argv.flags;

    input ??= await logger.prompt("input directory", { type: "text" });
    output ??= await logger.prompt("output directory", { type: "text" });
    project ??= await findTsConfig();

    if (project == null) {
      bail("tsconfig.json not found");
    }

    await TypiaProgrammer.build({ input, output, project });
  },
);
