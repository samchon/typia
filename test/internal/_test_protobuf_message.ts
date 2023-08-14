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
        const result: pjs.IParserResult = pjs.parse(expected);
        try {
            const top: pjs.Type = result.root.lookupType(name);
            const children: pjs.Type[] = top.nestedArray.filter(
                (nested) => nested instanceof pjs.Type,
            ) as pjs.Type[];

            // ARCHIVE ENCODER AND DECODER SCRIPT FOR REFERENCE
            fs.writeFileSync(
                `${directory}/${name}.js`,
                [
                    "//---------------------------------------------------------",
                    "// MESSAGE",
                    "//---------------------------------------------------------",
                    ...expected.split("\n").map((line) => `// ${line}`),
                    "",
                    "//---------------------------------------------------------",
                    "// ENCODER",
                    "//---------------------------------------------------------",
                    ...[top, ...children].map((type) =>
                        pjs.encoder(type).toString(),
                    ),
                    "",
                    "//---------------------------------------------------------",
                    "// DECODER",
                    "//---------------------------------------------------------",
                    ...[top, ...children].map((type) =>
                        pjs.decoder(type).toString(),
                    ),
                ].join("\n"),
                "utf8",
            );
        } catch {}
    };
