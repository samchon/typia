import cp from "child_process";
import fs from "fs";

import { TestFeature } from "./TestFeature";
import { TestStructure } from "./TestStructure";

async function load(): Promise<TestStructure<any>[]> {
    const path: string = `${__dirname}/../structures`;
    const output: TestStructure<any>[] = [];

    for (const file of await fs.promises.readdir(path)) {
        const location: string = `${path}/${file}`;
        const modulo: Record<string, TestStructure<any>> = await import(
            location
        );
        output.push({
            ...Object.values(modulo)[0],
            name: file.substring(0, file.length - 3),
        });
    }
    return output;
}

async function generate(
    feat: TestFeature,
    structures: TestStructure<any>[],
    create: boolean,
): Promise<void> {
    const method: string = create
        ? `create${feat.method[0].toUpperCase()}${feat.method.substring(1)}`
        : feat.method;
    const path: string = `${__dirname}/../features/${method}`;

    if (fs.existsSync(path)) cp.execSync(`npx rimraf ${path}`);
    await fs.promises.mkdir(path);

    for (const s of structures) {
        if (s.generate === undefined) continue;
        else if (feat.jsonable && s.JSONABLE === false) continue;
        else if (feat.strict && s.ADDABLE === false) continue;

        const location: string = `${path}/test_${method}_${s.name}.ts`;
        await fs.promises.writeFile(
            location,
            script(feat, method, s, create),
            "utf8",
        );
    }
}

function script(
    feat: TestFeature,
    method: string,
    struct: TestStructure<any>,
    create: boolean,
): string {
    const common: string = `_test_${feat.method}`;
    const elements: Array<string | null> = [
        `import TSON from "../../../src";`,
        `import { ${struct.name} } from "../../structures/${struct.name}";`,
        `import { ${common} } from "../internal/${common}";`,
        "",
        `export const test_${method}_${struct.name} = ${common}(`,
        `    "${struct.name}",`,
        `    ${struct.name}.generate,`,
        create
            ? `    TSON.${method}<${struct.name}>(),`
            : `    (input) => TSON.${method}(input),`,
        feat.spoilable && struct.SPOILERS
            ? `    ${struct.name}.SPOILERS,`
            : null,
        `);`,
    ];
    return elements.filter((e) => e !== null).join("\n");
}

async function main(): Promise<void> {
    const structures: TestStructure<any>[] = await load();
    for (const feature of TestFeature.DATA) {
        await generate(feature, structures, false);
        if (feature.creatable) await generate(feature, structures, true);
    }
}
main().catch((exp) => {
    console.log(exp);
    process.exit(-1);
});
