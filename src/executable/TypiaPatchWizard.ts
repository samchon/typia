import fs from "fs";

export namespace TypiaPatchWizard {
  export const main = async (): Promise<void> => {
    console.log("----------------------------------------");
    console.log(" Typia Setup Wizard");
    console.log("----------------------------------------");
    console.log(
      [
        `Since TypeScript v5.3 update, "tsc" no more parses JSDoc comments.`,
        ``,
        `Therefore, "typia" revives the JSDoc parsing feature by patching "tsc".`,
        ``,
        `This is a temporary feature of "typia", and it would be removed when "ts-patch" being updated.`,
      ].join("\n"),
    );

    await patch();
  };

  export const patch = async (): Promise<void> => {
    const location: string = require.resolve("typescript/lib/tsc.js");
    const content: string = await fs.promises.readFile(location, "utf8");
    if (content.indexOf(FROM) === -1) return;

    await fs.promises.writeFile(location, content.replace(FROM, TO), "utf8");
  };
}

const FROM = `var defaultJSDocParsingMode = 2 /* ParseForTypeErrors */`;
const TO = `var defaultJSDocParsingMode = 0 /* ParseAll */`;
