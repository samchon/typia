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
    "fastify",
].map((name) => ({
    name,
    body: (type: string) =>
        [
            `import { createClientBenchmarkProgram } from "../createClientBenchmarkProgram";`,
            ``,
            `createClientBenchmarkProgram(`,
            `    __dirname + "/../internal/${BenchmarkProgrammer.emend(
                name,
            )}/benchmark-server-${BenchmarkProgrammer.emend(
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
                `import { createExpressServerBenchmarkProgram } from "../createExpressServerBenchmarkProgram";`,
                ``,
                `createExpressServerBenchmarkProgram(JSON.stringify);`,
            ].join("\n"),
    },
    {
        name: "express (typia)",
        body: (type: string) =>
            [
                `import typia from "typia";`,
                ``,
                `import { ${type} } from "../../../../../test/structures/${type}";`,
                `import { createExpressServerBenchmarkProgram } from "../createExpressServerBenchmarkProgram";`,
                ``,
                `createExpressServerBenchmarkProgram(`,
                `    typia.createStringify<${type}[]>(),`,
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
                `import { ${schema} } from "../../../../structures/class-validator/${schema}";`,
                `import { createExpressServerBenchmarkProgram } from "../createExpressServerBenchmarkProgram";`,
                ``,
                `createExpressServerBenchmarkProgram<${type}>(`,
                `    (input) => JSON.stringify(`,
                `        input.map((elem) => instanceToPlain(`,
                `            plainToInstance(${schema}, elem),`,
                `        )),`,
                `    ),`,
                `);`,
            ].join("\n");
        },
    },
    {
        name: "fastify",
        body: (type: string) =>
            [
                `import typia from "typia";`,
                ``,
                `import { ${type} } from "../../../../../test/structures/${type}";`,
                `import { createFastifyServerBenchmarkProgram } from "../createFastifyServerBenchmarkProgram";`,
                ``,
                `createFastifyServerBenchmarkProgram(`,
                `   typia.application<[${type}[]], "ajv", "#/definitions">()`,
                `);`,
            ].join("\n"),
    },
];

BenchmarkProgrammer.generate({
    name: "server",
    features: FEATURES,
    libraries: CLIENTS,
});
BenchmarkProgrammer.generate({
    name: "server/internal",
    features: FEATURES,
    libraries: SERVERS,
});
