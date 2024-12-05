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
    for (const file of ["tsc.js", "_tsc.js"])
      try {
        const location: string = require.resolve(`typescript/lib/${file}`);
        const content: string = await fs.promises.readFile(location, "utf8");
        if (content.indexOf(FROM_WITH_COMMENT) !== -1)
          await fs.promises.writeFile(
            location,
            content.replace(FROM_WITH_COMMENT, TO_WITH_COMMENT),
            "utf8",
          );
        else if (content.indexOf(FROM_ONLY) !== -1)
          await fs.promises.writeFile(
            location,
            content.replace(FROM_ONLY, TO_ONLY),
            "utf8",
          );
      } catch {}
  };
}

const FROM_WITH_COMMENT = `var defaultJSDocParsingMode = 2 /* ParseForTypeErrors */`;
const TO_WITH_COMMENT = `var defaultJSDocParsingMode = 0 /* ParseAll */`;
const FROM_ONLY = `var defaultJSDocParsingMode = 2`;
const TO_ONLY = `var defaultJSDocParsingMode = 0`;
