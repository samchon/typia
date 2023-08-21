import cp from "child_process";
import fs from "fs";

import { TestStructure } from "./TestStructure";

export namespace TestMessageGenerator {
    export async function generate(
        structures: TestStructure<any>[],
    ): Promise<void> {
        const path: string = `${__dirname}/../../test/features/protobuf.message`;
        await mkdir(path);

        for (const s of structures) {
            if (s.BINARABLE === false) continue;

            const content: string[] = [
                `import typia from "../../../src";`,
                `import { ${s.name} } from "../../structures/${s.name}";`,
                `import { _test_protobuf_message } from "../../internal/_test_protobuf_message";`,
                "",
                `export const test_protobuf_message_${s.name} = _test_protobuf_message(`,
                `    "${s.name}",`,
                `)(typia.protobuf.message<${s.name}>());`,
            ];
            await fs.promises.writeFile(
                `${__dirname}/../../test/features/protobuf.message/test_protobuf_message_${s.name}.ts`,
                content.join("\n"),
                "utf8",
            );
        }
    }

    export async function schema(): Promise<void> {
        const path: string = `${__dirname}/../../test/features/protobuf.message`;
        const protobuf: string = `${path}/../../schemas/protobuf`;
        await mkdir(protobuf);

        const schemaList: string[] = [];
        for (const file of await fs.promises.readdir(path)) {
            if (file.substring(file.length - 3) !== ".ts") continue;

            const name: string = file.substring(
                "test_protobuf_message_".length,
                file.length - 3,
            );
            schemaList.push(name);

            await fs.promises.writeFile(
                `${protobuf}/${name}.proto`,
                await read(file),
                "utf8",
            );
        }

        // const current: string = process.cwd();
        // process.chdir(protobuf);
        // {
        //     const root: string = `../../..`;
        //     await fs.promises.copyFile(
        //         `${root}/assets/protoc.exe`,
        //         "protoc.exe",
        //     );
        //     await fs.promises.mkdir("references");

        //     for (const schema of schemaList)
        //         try {
        //             const command: string = [
        //                 "protoc",
        //                 `--plugin=${root}/node_modules/.bin/protoc-gen-ts_proto.cmd`,
        //                 `--ts_proto_out=./references`,
        //                 `./${schema}.proto`,
        //             ].join(" ");
        //             cp.execSync(command);
        //         } catch {
        //             console.log("failed", schema);
        //         }
        // }
        // process.chdir(current);
    }

    async function read(file: string): Promise<string> {
        const content: string = await fs.promises.readFile(
            `${__dirname}/../../bin/test/features/protobuf.message/${file.slice(
                0,
                -3,
            )}.js`,
            "utf8",
        );
        const first: number = content.indexOf(`"syntax = `);
        const last: number = content.lastIndexOf(`}"`);
        return JSON.parse(content.substring(first, last + 2));
    }

    async function mkdir(path: string): Promise<void> {
        if (fs.existsSync(path)) cp.execSync(`npx rimraf ${path}`);
        await fs.promises.mkdir(path);
    }
}
