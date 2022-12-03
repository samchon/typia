import cp from "child_process";
import fs from "fs";

import { TestStructure } from "./TestStructure";

export namespace TestApplicationGenerator {
    export async function generate(
        structures: TestStructure<any>[],
    ): Promise<void> {
        await application(structures, "ajv");
        await application(structures, "swagger");
    }

    async function application(
        structures: TestStructure<any>[],
        purpose: "ajv" | "swagger",
    ): Promise<void> {
        const path: string = `${__dirname}/../features/application/${purpose}`;
        if (fs.existsSync(path)) cp.execSync(`npx rimraf ${path}`);
        await fs.promises.mkdir(path);

        for (const s of structures) {
            if (s.JSONABLE === false) continue;

            const content: string[] = [
                `import TSON from "../../../../src";`,
                `import { ${s.name} } from "../../../structures/${s.name}";`,
                `import { _test_application } from "../../internal/_test_application";`,
                "",
                `export const test_application_${purpose}_${s.name} = `,
                `    _test_application("${purpose}")(`,
                `        "${s.name}",`,
                `        TSON.application<[${s.name}], "${purpose}">(),`,
                `        {`,
                `            schemas: [],`,
                `            components: {`,
                `                schemas: {},`,
                `            },`,
                `        },`,
                `    );`,
            ];
            await fs.promises.writeFile(
                `${__dirname}/../features/application/${purpose}/test_application_${purpose}_${s.name}.ts`,
                content.join("\n"),
                "utf8",
            );
        }
    }

    export async function fill(): Promise<void> {
        await iterate("ajv");
        await iterate("swagger");
    }

    function getSchema(content: string) {
        const first: number = content.indexOf("schemas: [");
        const last: number = content.indexOf("}, {");

        return "{" + content.substring(first, last) + "}";
    }

    async function replace(
        type: "ajv" | "swagger",
        file: string,
        schema: string,
    ): Promise<void> {
        const content = await fs.promises.readFile(file, "utf8");
        const symbol: string = `], "${type}">(),`;
        const first: number = content.indexOf(symbol);

        const newContent: string =
            content.substring(0, first) + symbol + schema + "\n" + ");";
        await fs.promises.writeFile(
            file,
            newContent.split("\r\n").join("\n"),
            "utf8",
        );
    }

    async function iterate(type: "ajv" | "swagger") {
        const path: string = `${__dirname}/../features/application/${type}`;
        for (const file of await fs.promises.readdir(path)) {
            if (file.substring(file.length - 3) !== ".ts") continue;

            const location: string = `${__dirname}/../features/application/${type}/${file}`;
            const jsLocation: string =
                __dirname +
                `/../../bin/test/features/application/${type}/${file.slice(
                    0,
                    -3,
                )}.js`;
            const schema: string = getSchema(
                fs.readFileSync(jsLocation, "utf8"),
            );
            await replace(type, location, schema);
        }
    }
}
