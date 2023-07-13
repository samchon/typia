import fs from "fs";

export const _test_protobuf_message =
    (name: string, expected: string) => () => {
        const replacer = (str: string) => str.split("\r\n").join("\n").trim();
        const solution: string = replacer(
            fs.readFileSync(
                `${__dirname}/../../../test/schemas/protobuf/${name}.proto`,
                "utf8",
            ),
        );
        expected = replacer(expected);

        // @todo - must be fixed soon
        if (expected.length !== solution.length) {
            throw new Error(
                `Bug on typia.protobuf.message(): failed to understand the ${name} type.`,
            );
        }
    };
