import fs from "fs";

export const _test_message = (name: string, expected: string) => () => {
    const solution: string = fs.readFileSync(
        `${__dirname}/../../../../test/schemas/protobuf/${name}.proto`,
        "utf8",
    );
    if (expected !== solution)
        throw new Error(
            `Bug on typia.message(): failed to understand the ${name} type.`,
        );
};
