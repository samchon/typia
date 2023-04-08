import { BenchmarkProgrammer } from "./BenchmarkProgrammer";

const FEATURES: string[] = [
    "ObjectSimple",
    "ObjectHierarchical",
    "ObjectRecursive",
    "ObjectUnionExplicit",
    "ArraySimple",
    "ArrayHierarchical",
    "ArrayRecursive",
    "ArrayRecursiveUnionExplicit",
];

const LIBRARIES: BenchmarkProgrammer.ILibrary[] = [
    ...["typia.stringify", "typia.isStringify", "typia.assertStringify"].map(
        (name) => ({
            name,
            body: (type: string) =>
                [
                    `import typia from "typia";`,
                    ``,
                    `import { ${type} } from "../../../../test/structures/${type}";`,
                    `import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";`,
                    ``,
                    `createStringifyBenchmarkProgram(`,
                    `    typia.create${BenchmarkProgrammer.pascal(
                        name.split(".")[1],
                    )}<${type}>()`,
                    `);`,
                ].join("\n"),
        }),
    ),
    {
        name: "JSON.stringify",
        body: (type) =>
            [
                `import { ${type} } from "../../../../test/structures/${type}";`,
                `import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";`,
                ``,
                `createStringifyBenchmarkProgram(`,
                `    (value: ${type}) => JSON.stringify(value)`,
                `)`,
            ].join("\n"),
    },
    {
        name: "fast-json-stringify",
        body: (type: string) =>
            [
                `import typia from "typia";`,
                ``,
                `import { ${type} } from "../../../../test/structures/${type}";`,
                `import { createStringifyFastBenchmarkProgram } from "./createStringifyFastBenchmarkProgram";`,
                ``,
                `createStringifyFastBenchmarkProgram(`,
                `    typia.application<[${type}], "ajv">()`,
                `);`,
            ].join("\n"),
    },
    {
        name: "class-transformer",
        body: (type) => {
            const schema = `ClassValidator${BenchmarkProgrammer.pascal(type)}`;
            const program = `createStringifyClassTransformerBenchmarkProgram`;

            return [
                `import { ${schema} } from "../../../structures/class-validator/${schema}";`,
                `import { ${program} } from "./${program}";`,
                ``,
                `${program}(${schema});`,
            ].join("\n");
        },
    },
];

async function main(): Promise<void> {
    await BenchmarkProgrammer.generate({
        name: "stringify",
        libraries: LIBRARIES,
        features: FEATURES,
    });
}

main().catch((exp) => {
    console.error(exp);
    process.exit(-1);
});
