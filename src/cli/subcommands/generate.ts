import { command } from 'cleye';
import { TypiaProgrammer } from "../../programmers/TypiaProgrammer";

import * as ConfFileUtils from "../utils/confFiles";
import * as Logger from "../utils/logger";
import * as MessageUtils from "../utils/message";

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

    input ??= await Logger.logger.prompt("input directory", { type: "text" });
    output ??= await Logger.logger.prompt("output directory", { type: "text" });
    project ??= await ConfFileUtils.findTsConfig();

    if (project == null) {
      MessageUtils.bail("tsconfig.json not found");
    }

    await TypiaProgrammer.build({ input, output, project });
  },
);
