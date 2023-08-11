import fs from "fs";
import pjs from "protobufjs";

export const _test_protobuf_message =
    (name: string) => (expected: string) => () => {
        // COMPARE SCHEMA WITH EXPECTED
        const replacer = (str: string) => str.split("\r\n").join("\n").trim();
        const solution: string = replacer(
            fs.readFileSync(
                `${__dirname}/../../../test/schemas/protobuf/${name}.proto`,
                "utf8",
            ),
        );
        expected = replacer(expected);
        if (expected !== solution)
            throw new Error(
                `Bug on typia.protobuf.message(): failed to understand the ${name} type.`,
            );

        // VALIDATE THE SCHEMA
        pjs.parse(expected);
    };
