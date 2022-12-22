import cp from "child_process";
import fs from "fs";

import { TestStructure } from "./TestStructure";

export namespace TestApplicationGenerator {
    export async function generate(
        structures: TestStructure<any>[],
    ): Promise<void> {
        const path: string = `${__dirname}/../../test/features/application`;
        if (fs.existsSync(path)) cp.execSync("npx rimraf " + path);
        await fs.promises.mkdir(path);

        await application(structures, "ajv");
        await application(structures, "swagger");
    }

    async function application(
        structures: TestStructure<any>[],
        purpose: "ajv" | "swagger",
    ): Promise<void> {
        const path: string = `${__dirname}/../../test/features/application/${purpose}`;
        await fs.promises.mkdir(path);

        for (const s of structures) {
            if (s.JSONABLE === false) continue;

            const content: string[] = [
                `import typia from "../../../../src";`,
                `import { ${s.name} } from "../../../structures/${s.name}";`,
                `import { _test_application } from "../../internal/_test_application";`,
                "",
                `export const test_application_${purpose}_${s.name} = `,
                `    _test_application("${purpose}")(`,
                `        "${s.name}",`,
                `        typia.application<[${s.name}], "${purpose}">(),`,
                `    );`,
            ];
            await fs.promises.writeFile(
                `${__dirname}/../../test/features/application/${purpose}/test_application_${purpose}_${s.name}.ts`,
                content.join("\n"),
                "utf8",
            );
        }
    }

    export async function schema(): Promise<void> {
        const schemas: string = `${__dirname}/../../test/schemas/json`;
        await mkdir(schemas);

        await iterate("ajv");
        await iterate("swagger");
    }

    function getSchema(content: string): object {
        const first: number = content.indexOf("schemas: [");
        const last: number = content.lastIndexOf("}");

        return new Function(
            "return {" + content.substring(first, last) + "}",
        )();
    }

    async function iterate(type: "ajv" | "swagger") {
        const path: string = `${__dirname}/../../test/features/application/${type}`;
        const schemaPath: string = `${__dirname}/../../test/schemas/json/${type}`;
        await mkdir(schemaPath);

        for (const file of await fs.promises.readdir(path)) {
            if (file.substring(file.length - 3) !== ".ts") continue;

            const name: string = file.substring(
                `test_application_${type}_`.length,
                file.length - 3,
            );
            const location: string = `${__dirname}/../../test/features/application/${type}/${file}`;
            const jsLocation: string =
                __dirname +
                `/../../bin/test/features/application/${type}/${file.slice(
                    0,
                    -3,
                )}.js`;
            const schema: object = getSchema(
                fs.readFileSync(jsLocation, "utf8"),
            );
            await fs.promises.writeFile(
                `${schemaPath}/${name}.json`,
                JSON.stringify(schema, null, 2),
                "utf8",
            );
        }
    }

    async function mkdir(path: string): Promise<void> {
        if (fs.existsSync(path)) cp.execSync(`npx rimraf ${path}`);
        await fs.promises.mkdir(path);
    }
}
