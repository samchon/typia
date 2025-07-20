import fs from "fs";

export const _test_protobuf_message =
  (name: string) =>
  (expected: string): void => {
    // COMPARE SCHEMA WITH EXPECTED
    const replacer = (str: string) => str.split("\r\n").join("\n").trim();
    const directory: string = `${__dirname}/../../schemas/protobuf`;
    const solution: string = replacer(
      fs.readFileSync(`${directory}/${name}.proto`, "utf8"),
    );

    expected = replacer(expected);
    if (expected !== solution)
      throw new Error(
        `Bug on typia.protobuf.message(): failed to understand the ${name} type.`,
      );
  };
