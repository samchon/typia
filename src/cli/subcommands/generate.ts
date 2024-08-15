import { defineCommand } from "citty";

import { TypiaProgrammer } from "../../programmers/TypiaProgrammer";

import { findTsConfig } from "../utils/confFiles";
import { logger } from "../utils/logger";
import { bail } from "../utils/message";

export const generateCommand = defineCommand({
  meta: {
    name: "generate",
    description: "Generate Typia files",
  },
  args: {
    input: {
      type: "string",
      description: "input directory",
      required: false,
    },
    output: {
      type: "string",
      description: "output directory",
      required: false,
    },
    project: {
      type: "string",
      description: "tsconfig.json file path (e.g. ./tsconfig.test.json)",
      required: false,
    },
  },
  async run({ args }) {
    const {
      input: _input,
      output: _output,
      project: _project,
    } = args as Partial<typeof args>;

    const input =
      _input ?? (await logger.prompt("input directory", { type: "text" }));
    const output =
      _output ?? (await logger.prompt("output directory", { type: "text" }));
    const project = _project ?? (await findTsConfig());

    if (project == null) {
      bail("tsconfig.json not found");
    }

    await TypiaProgrammer.build({ input, output, project });
  },
});
