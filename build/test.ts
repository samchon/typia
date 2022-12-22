import cp from "child_process";
import fs from "fs";

import { TestApplicationGenerator } from "./internal/TestApplicationGenerator";
import { TestFeature } from "./internal/TestFeature";
import { TestMessageGenerator } from "./internal/TestMessageGenerator";
import { TestStructure } from "./internal/TestStructure";

async function load(): Promise<TestStructure<any>[]> {
    const path: string = `${__dirname}/../test/structures`;
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
    const path: string = `${__dirname}/../test/features/${method}`;

    if (fs.existsSync(path)) cp.execSync(`npx rimraf ${path}`);
    await fs.promises.mkdir(path);

    for (const s of structures) {
        if (s.generate === undefined) continue;
        else if (feat.jsonable && s.JSONABLE === false) continue;
        else if (feat.primitive && s.PRIMITIVE === false) continue;
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
        `import typia from "../../../src";`,
        `import { ${struct.name} } from "../../structures/${struct.name}";`,
        `import { ${common} } from "../internal/${common}";`,
        "",
        `export const test_${method}_${struct.name} = ${common}(`,
        `    "${struct.name}",`,
        `    ${struct.name}.generate,`,
        create
            ? `    typia.${method}<${struct.name}>(),`
            : `    (input) => typia.${method}${
                  feat.explicit ? `<${struct.name}>` : ""
              }(input),`,
        feat.spoilable && struct.SPOILERS
            ? `    ${struct.name}.SPOILERS,`
            : null,
        `);`,
    ];
    return elements.filter((e) => e !== null).join("\n");
}

async function main(): Promise<void> {
    process.chdir(__dirname + "/..");

    const structures: TestStructure<any>[] = await load();

    // NORMAL FEATURES
    for (const feature of TestFeature.DATA) {
        await generate(feature, structures, false);
        if (feature.creatable) await generate(feature, structures, true);
    }

    // SCHEMAS
    const schemas: string = `${__dirname}/../test/schemas`;
    if (fs.existsSync(schemas)) cp.execSync(`npx rimraf ${schemas}`);
    await fs.promises.mkdir(schemas);

    await TestApplicationGenerator.generate(structures);
    await TestMessageGenerator.generate(structures);

    // FILL SCHEMA CONTENTS
    cp.execSync("npm run build:test");
    await TestApplicationGenerator.schema();
    await TestMessageGenerator.schema();
}
main().catch((exp) => {
    console.log(exp);
    process.exit(-1);
});
