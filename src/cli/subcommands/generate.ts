import { defineCommand } from "citty";

import { TypiaProgrammer } from "../../programmers/TypiaProgrammer";

import { findUp } from "../utils/fs";
import { showErrorAndExit } from "../utils/message";

export const generateCommand = defineCommand({
  args:{
    input: {
      type: "string",
      description: "input directory",
      required: true,
    },
    output: {
      type: "string",
      description: "output directory",
      required: true,
    },
    project: {
      type: "string",
      description: "tsconfig.json file location",
      required: false,
    },
  },
  async run({args}) {
    // TODO: select

    const {
      input,
      output,
      project: _project,
    } = args;


    const project = _project ?? await findUp("tsconfig.json");

    if (project==null) {
      showErrorAndExit("tsconfig.json not found");
    }

    await TypiaProgrammer.build({input, output, project});
  }
});

