import { command } from 'cleye';
import fs from "node:fs/promises";

import * as Logger from "../utils/logger";

const FROM_WITH_COMMENT = `var defaultJSDocParsingMode = 2 /* ParseForTypeErrors */`;
const TO_WITH_COMMENT = `var defaultJSDocParsingMode = 0 /* ParseAll */`;
const FROM_ONLY = `var defaultJSDocParsingMode = 2`;
const TO_ONLY = `var defaultJSDocParsingMode = 0`;

export const patch = command({
  name: "patch",

  aliases: ["p"],

  help: {
    description: "Extra patching for TypeScript",
  }
}, async () => {
    Logger.logger.info(
      [
        `Since TypeScript v5.3 update, "tsc" no more parses JSDoc comments.`,
        ``,
        `Therefore, "typia" revives the JSDoc parsing feature by patching "tsc".`,
        ``,
        `This is a temporary feature of "typia", and it would be removed when "ts-patch" being updated.`,
      ].join("\n"),
    );

    await executePatch();
    Logger.logger.success("Patched TypeScript");
  }
);

export async function executePatch(): Promise<void> {
  const location: string = require.resolve("typescript/lib/tsc.js");
  const content: string = await fs.readFile(location, "utf8");
  if (!content.includes(FROM_WITH_COMMENT)) {
    await fs.writeFile(
      location,
      content.replace(FROM_WITH_COMMENT, TO_WITH_COMMENT),
      "utf8",
    );
  } else if (!content.includes(FROM_ONLY)) {
    await fs.writeFile(location, content.replace(FROM_ONLY, TO_ONLY), "utf8");
  }
}
