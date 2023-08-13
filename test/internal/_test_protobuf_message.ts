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
        if (expected !== solution)
            throw new Error(
                `Bug on typia.protobuf.message(): failed to understand the ${name} type.`,
            );

        // VALIDATE THE SCHEMA
        const result: pjs.IParserResult = pjs.parse(expected);
        const typeList: pjs.Type[] = result.root.nestedArray
            .filter((nested) => nested instanceof pjs.Type)
            .map((nested) => nested as pjs.Type);

        // ARCHIVE ENCODER AND DECODER SCRIPT FOR REFERENCE
        fs.writeFileSync(
            `${directory}/${name}.js`,
            [
                "//---------------------------------------------------------",
                "// ENCODER",
                "//---------------------------------------------------------",
                ...typeList.map((type) => pjs.encoder(type).toString()),
                "",
                "//---------------------------------------------------------",
                "// DECODER",
                "//---------------------------------------------------------",
                ...typeList.map((type) => pjs.decoder(type).toString()),
            ].join("\n"),
            "utf8",
        );
    };
