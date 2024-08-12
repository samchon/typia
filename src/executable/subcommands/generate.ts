import { defineCommand } from "citty";

import { TypiaProgrammer } from "../programmers/TypiaProgrammer";

import { findTsConfig } from "./utils";

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

    const project = await findTsConfig(_project)

    await TypiaProgrammer.build({input, output, project});
  }
});

