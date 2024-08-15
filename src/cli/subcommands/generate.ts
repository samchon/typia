import { defineCommand } from "citty";

import { TypiaProgrammer } from "../../programmers/TypiaProgrammer";

import { findUp } from "../utils/fs";
import { bail } from "../utils/message";

export const generateCommand = defineCommand({
  meta: {
    name: "generate",
    description: "Generate Typia files",
  },
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
      bail("tsconfig.json not found");
    }

    await TypiaProgrammer.build({input, output, project});
  }
});

