import cp from "child_process";
import fs from "fs";

import { TestStructure } from "./TestStructure";

export namespace TestMessageGenerator {
    export async function generate(
        structures: TestStructure<any>[],
    ): Promise<void> {
        const path: string = `${__dirname}/../features/message`;
        if (fs.existsSync(path)) cp.execSync(`npx rimraf ${path}`);
        await fs.promises.mkdir(path);

        for (const s of structures) {
            if (s.JSONABLE === false || s.BINARABLE === false) continue;

            const content: string[] = [
                `import TSON from "../../../src";`,
                `import { ${s.name} } from "../../structures/${s.name}";`,
                `import { _test_message } from "../internal/_test_message";`,
                "",
                `export const test_message_${s.name} = _test_message(`,
                `    "${s.name}",`,
                `    TSON.message<${s.name}>(),`,
                `    ""`,
                `);`,
            ];
            await fs.promises.writeFile(
                `${__dirname}/../features/message/test_message_${s.name}.ts`,
                content.join("\n"),
                "utf8",
            );
        }
    }

    export async function fill(): Promise<void> {
        const path: string = `${__dirname}/../features/message`;
        for (const file of await fs.promises.readdir(path)) {
            if (file.substring(file.length - 3) !== ".ts") continue;
            const message: string = await read(file);
            await replace(`${path}/${file}`, message);
        }
    }

    async function read(file: string): Promise<string> {
        const content: string = await fs.promises.readFile(
            `${__dirname}/../../bin/test/features/message/${file.slice(
                0,
                -3,
            )}.js`,
            "utf8",
        );
        const first: number = content.indexOf(`syntax = `);
        const last: number = content.lastIndexOf(`}"`);
        return content
            .substring(first, last + 1)
            .split("\\n")
            .join("\n");
    }

    async function replace(file: string, message: string): Promise<void> {
        const content: string = await fs.promises.readFile(file, "utf8");
        await fs.promises.writeFile(
            file,
            content.split('""').join("`" + message + "`"),
            "utf8",
        );
    }
}
