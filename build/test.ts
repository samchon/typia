import cp from "child_process";
import fs from "fs";

import { TestApplicationGenerator } from "./internal/TestApplicationGenerator";
import { TestFeature } from "./internal/TestFeature";
import { TestMessageGenerator } from "./internal/TestMessageGenerator";
import { TestStructure } from "./internal/TestStructure";
import { __TypeRemover } from "./internal/__TypeRemover";

const emit = process.emit;
(process as any).emit = function (name: string, ...args: any[]) {
    if (name === "warning") return false;
    return emit.apply(process, [name, ...args] as any);
};

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
        ? `create${feat.method[0]!.toUpperCase()}${feat.method.substring(1)}`
        : feat.method;
    const path: string = `${__dirname}/../test/features/${method}`;

    if (fs.existsSync(path)) cp.execSync(`npx rimraf ${path}`);
    await fs.promises.mkdir(path);

    for (const s of structures) {
        if (s.generate === undefined) continue;
        else if (feat.jsonable && s.JSONABLE === false) continue;
        else if (feat.primitive && s.PRIMITIVE === false) continue;
        else if (feat.strict && s.ADDABLE === false) continue;
        else if (feat.method === "random" && s.RANDOM === false) continue;
        else if (
            feat.method.toLowerCase().includes("prune") &&
            s.ADDABLE === false
        )
            continue;

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
        "",
        `import { ${struct.name} } from "../../structures/${struct.name}";`,
        `import { ${common} } from "../../internal/${common}";`,
        "",
        `export const test_${method}_${struct.name} = ${common}(`,
        `    "${struct.name}",`,
        feat.random ? null : `    ${struct.name}.generate,`,
        create
            ? feat.random
                ? `    typia.createRandom<${struct.name}>(${
                      struct.RANDOM ? `${struct.name}.RANDOM` : ""
                  }),`
                : `    typia.${method}<${struct.name}>(),`
            : feat.random
            ? `    () => typia.random<${struct.name}>(${
                  struct.RANDOM ? `${struct.name}.RANDOM` : ""
              }),`
            : `    (input) => typia.${method}${
                  feat.explicit ? `<${struct.name}>` : ""
              }(input),`,
        feat.spoilable && struct.SPOILERS
            ? `    ${struct.name}.SPOILERS,`
            : null,
        feat.random
            ? `typia.createAssert<typia.Primitive<${struct.name}>>(),`
            : null,
        `);\n`,
    ];
    return elements.filter((e) => e !== null).join("\n");
}

async function main(): Promise<void> {
    process.chdir(__dirname + "/..");
    cp.execSync("npx rimraf test/generated");

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
    cp.execSync("npm run build:test", { stdio: "inherit" });
    await TestApplicationGenerator.schema();
    try {
        await TestMessageGenerator.schema();
    } catch {}

    // GENERATE TRANSFORMED FEATURES
    cp.execSync("npx rimraf test/generated");
    cp.execSync(
        [
            "npx ts-node src/executable/typia generate",
            "--input test/features",
            "--output test/generated/output",
            "--project test/tsconfig.json",
        ].join(" "),
    );
    await __TypeRemover.remove(__dirname + "/../test/generated");
    cp.execSync("npm run prettier", { stdio: "inherit" });
}
main().catch((exp) => {
    console.log(exp);
    process.exit(-1);
});
