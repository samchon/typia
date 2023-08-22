import fs from "fs";

// import pjs from "protobufjs";

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

        // const messages: string[] = expected
        //     .split("message ")
        //     .slice(1)
        //     .map((str) => str.split(" {")[0])
        //     .map((str, i, array) => (i === 0 ? str : `${array[0]}.${str}`));

        // // VALIDATE THE SCHEMA
        // const root: pjs.Root = pjs.parse(expected).root;
        // const types: pjs.Type[] = messages
        //     .map((msg) => {
        //         try {
        //             return root.lookupType(msg);
        //         } catch {
        //             return null!;
        //         }
        //     })
        //     .filter((type) => type !== null);

        // fs.writeFileSync(
        //     `${__dirname}/../../../test/schemas/protobuf/${messages[0]}.js`,
        //     [
        //         "//--------------------------------------------------",
        //         "// DEODERS",
        //         "//--------------------------------------------------",
        //         ...types.map((t) => pjs.decoder(t).toString()),
        //         "",
        //         "//--------------------------------------------------",
        //         "// ENCODERS",
        //         "//--------------------------------------------------",
        //         ...types.map((t) => pjs.encoder(t).toString()),
        //     ].join("\n"),
        //     "utf8",
        // );
    };
