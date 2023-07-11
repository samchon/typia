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

const CLIENTS: BenchmarkProgrammer.ILibrary[] = [
    "express (pure)",
    "express (typia)",
    "express (class-transformer)",
    "fastify (pure)",
    "fastify (typia)",
    "fastify (class-transformer)",
].map((name) => ({
    name,
    body: (type: string) =>
        [
            `import { createClientStringifyBenchmarkProgram } from "../createClientStringifyBenchmarkProgram";`,
            ``,
            `createClientStringifyBenchmarkProgram(`,
            `    __dirname + "/../internal/${BenchmarkProgrammer.emend(
                name,
            )}/benchmark-server-stringify-${BenchmarkProgrammer.emend(
                name,
            )}-${type}" + __filename.substr(-3)`,
            `);`,
        ].join("\n"),
}));

const SERVERS: BenchmarkProgrammer.ILibrary[] = [
    {
        name: "express (pure)",
        body: () =>
            [
                `import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";`,
                ``,
                `createExpressServerStringifyBenchmarkProgram(JSON.stringify);`,
            ].join("\n"),
    },
    {
        name: "express (typia)",
        body: (type: string) =>
            [
                `import typia from "typia";`,
                ``,
                `import { ICollection } from "../../../../structures/ICollection";`,
                `import { ${type} } from "../../../../../test/structures/${type}";`,
                `import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";`,
                ``,
                `createExpressServerStringifyBenchmarkProgram(`,
                `    typia.createStringify<ICollection<${type}>>(),`,
                `);`,
            ].join("\n"),
    },
    {
        name: "express (class-transformer)",
        body: (type: string) => {
            const schema = `ClassValidator${BenchmarkProgrammer.pascal(type)}`;
            return [
                `import { instanceToPlain, plainToInstance } from "class-transformer";`,
                ``,
                `import { ${type} } from "../../../../../test/structures/${type}";`,
                `import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";`,
                `import { ${schema} } from "../../../../structures/class-validator/${schema}";`,
                `import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";`,
                ``,
                `const schema = ClassValidatorCollection(${schema});`,
                `createExpressServerStringifyBenchmarkProgram<${type}>(`,
                `    (input) => JSON.stringify(`,
                `        instanceToPlain(`,
                `            plainToInstance(schema, input),`,
                `        ),`,
                `    ),`,
                `);`,
            ].join("\n");
        },
    },
    {
        name: "fastify (pure)",
        body: (type: string) =>
            [
                `import typia from "typia";`,
                ``,
                `import { ICollection } from "../../../../structures/ICollection";`,
                `import { ${type} } from "../../../../../test/structures/${type}";`,
                `import { createFastifyPureServerStringifyBenchmarkProgram } from "../createFastifyPureServerStringifyBenchmarkProgram";`,
                ``,
                `createFastifyPureServerStringifyBenchmarkProgram(`,
                `   typia.application<[ICollection<${type}>], "ajv">()`,
                `);`,
            ].join("\n"),
    },
    {
        name: "fastify (typia)",
        body: (type: string) =>
            [
                `import typia from "typia";`,
                ``,
                `import { ICollection } from "../../../../structures/ICollection";`,
                `import { ${type} } from "../../../../../test/structures/${type}";`,
                `import { createFastifyCustomServerStringifyBenchmarkProgram } from "../createFastifyCustomServerStringifyBenchmarkProgram";`,
                ``,
                `createFastifyCustomServerStringifyBenchmarkProgram(`,
                `    typia.createStringify<ICollection<${type}>>(),`,
                `);`,
            ].join("\n"),
    },
    {
        name: "fastify (class-transformer)",
        body: (type: string) => {
            const schema = `ClassValidator${BenchmarkProgrammer.pascal(type)}`;
            return [
                `import { instanceToPlain, plainToInstance } from "class-transformer";`,
                ``,
                `import { ${type} } from "../../../../../test/structures/${type}";`,
                `import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";`,
                `import { ${schema} } from "../../../../structures/class-validator/${schema}";`,
                `import { createFastifyCustomServerStringifyBenchmarkProgram } from "../createFastifyCustomServerStringifyBenchmarkProgram";`,
                ``,
                `const schema = ClassValidatorCollection(${schema});`,
                `createFastifyCustomServerStringifyBenchmarkProgram<${type}>(`,
                `    (input) => JSON.stringify(`,
                `        instanceToPlain(`,
                `            plainToInstance(schema, input),`,
                `        ),`,
                `    ),`,
                `);`,
            ].join("\n");
        },
    },
];

BenchmarkProgrammer.generate({
    name: "server-stringify",
    features: FEATURES,
    libraries: CLIENTS,
});
BenchmarkProgrammer.generate({
    name: "server-stringify/internal",
    features: FEATURES,
    libraries: SERVERS,
});
