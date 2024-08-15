import fs from "node:fs/promises";
import { defineCommand } from "citty";

const FROM_WITH_COMMENT = `var defaultJSDocParsingMode = 2 /* ParseForTypeErrors */`;
const TO_WITH_COMMENT = `var defaultJSDocParsingMode = 0 /* ParseAll */`;
const FROM_ONLY = `var defaultJSDocParsingMode = 2`;
const TO_ONLY = `var defaultJSDocParsingMode = 0`;

export const patchCommand = defineCommand({
  meta: {
    name: "patch",
    description: "Extra patching for TypeScript",
  },
  async setup(){
    console.log(
      [
        `Since TypeScript v5.3 update, "tsc" no more parses JSDoc comments.`,
        ``,
        `Therefore, "typia" revives the JSDoc parsing feature by patching "tsc".`,
        ``,
        `This is a temporary feature of "typia", and it would be removed when "ts-patch" being updated.`,
      ].join("\n"),
    );
  },
  async run() {
    await patch();
  },
});

export async function patch(): Promise<void> {
  const location: string = require.resolve("typescript/lib/tsc.js");
  const content: string = await fs.readFile(location, "utf8");
  if (!content.includes(FROM_WITH_COMMENT)){
    await fs.writeFile(
      location,
      content.replace(FROM_WITH_COMMENT, TO_WITH_COMMENT),
      "utf8"
    );
  }
  else if (!content.includes(FROM_ONLY)){
    await fs.writeFile(
      location,
      content.replace(FROM_ONLY, TO_ONLY),
      "utf8"
    );
  }
}
