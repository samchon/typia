import process from "node:process";
import { defineCommand } from "citty";

import { TypiaProgrammer } from "../programmers/TypiaProgrammer";

import { findUp } from "./utils";

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

    /* correct the type */
    let project = _project as string | undefined;

    /** if project is undefined, find tsconfig.json */
    if(project != null){
      project = await findUp("tsconfig.json", {cwd: process.cwd()});
    }

    if (project == null) {
      throw new URIError("Unable to find tsconfig.json file.");
    }

    await TypiaProgrammer.build({input, output, project});
  }
});

