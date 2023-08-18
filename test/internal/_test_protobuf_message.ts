import fs from "fs";
import pjs from "protobufjs";

export const _test_protobuf_message =
    (name: string) => (expected: string) => () => {
        // COMPARE SCHEMA WITH EXPECTED
        const replacer = (str: string) => str.split("\r\n").join("\n").trim();
        const directory: string = `${__dirname}/../../../test/schemas/protobuf`;
        const solution: string = replacer(
            fs.readFileSync(`${directory}/${name}.proto`, "utf8"),
        );
        expected = replacer(expected);
        if (expected !== solution) {
            console.log(name, expected.length, solution.length);
            throw new Error(
                `Bug on typia.protobuf.message(): failed to understand the ${name} type.`,
            );
        }

        // VALIDATE THE SCHEMA
        pjs.parse(expected);
    };
