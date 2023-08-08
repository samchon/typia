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
    "express (typia)",
    "express (class-transformer)",
    "fastify (pure)",
    "fastify (typia)",
    "fastify (class-transformer)",
].map((name) => ({
    name,
    body: (type: string) =>
        [
            `import { createClientAssertBenchmarkProgram } from "../createClientAssertBenchmarkProgram";`,
            ``,
            `createClientAssertBenchmarkProgram(`,
            `    __dirname + "/../internal/${BenchmarkProgrammer.emend(
                name,
            )}/benchmark-server-assert-${BenchmarkProgrammer.emend(
                name,
            )}-${type}" + __filename.substr(-3)`,
            `);`,
        ].join("\n"),
}));

const SERVERS: BenchmarkProgrammer.ILibrary[] = [
    {
        name: "express (typia)",
        body: (type: string) =>
            [
                `import typia from "typia";`,
                ``,
                `import { ICollection } from "../../../../structures/ICollection";`,
                `import { ${type} } from "../../../../../test/structures/${type}";`,
                `import { createExpressServerAssertBenchmarkProgram } from "../createExpressServerAssertBenchmarkProgram";`,
                ``,
                `createExpressServerAssertBenchmarkProgram(`,
                `    typia.createAssert<ICollection<${type}>>(),`,
                `);`,
            ].join("\n"),
    },
    {
        name: "express (class-transformer)",
        body: (type: string) => {
            const schema = `ClassValidator${BenchmarkProgrammer.pascal(type)}`;
            return [
                `import { instanceToPlain, plainToInstance } from "class-transformer";`,
                `import { validateSync } from "class-validator";`,
                ``,
                `import { ${type} } from "../../../../../test/structures/${type}";`,
                `import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";`,
                `import { ${schema} } from "../../../../structures/class-validator/${schema}";`,
                `import { createExpressServerAssertBenchmarkProgram } from "../createExpressServerAssertBenchmarkProgram";`,
                ``,
                `const schema = ClassValidatorCollection(${schema});`,
                `createExpressServerAssertBenchmarkProgram<${type}>(`,
                `    (input) => {`,
                `        const output = plainToInstance(schema, input);`,
                `        const result = validateSync(output);`,
                `        if (result.length > 0)`,
                `            throw new Error(result[0].toString());`,
                `        return output;`,
                `    },`,
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
                `import { createFastifyPureServerAssertBenchmarkProgram } from "../createFastifyPureServerAssertBenchmarkProgram";`,
                ``,
                `createFastifyPureServerAssertBenchmarkProgram(`,
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
                `import { createFastifyCustomServerAssertBenchmarkProgram } from "../createFastifyCustomServerAssertBenchmarkProgram";`,
                ``,
                `createFastifyCustomServerAssertBenchmarkProgram(`,
                `    typia.createAssert<ICollection<${type}>>(),`,
                `);`,
            ].join("\n"),
    },
    {
        name: "fastify (class-transformer)",
        body: (type: string) => {
            const schema = `ClassValidator${BenchmarkProgrammer.pascal(type)}`;
            return [
                `import { instanceToPlain, plainToInstance } from "class-transformer";`,
                `import { validateSync } from "class-validator";`,
                ``,
                `import { ${type} } from "../../../../../test/structures/${type}";`,
                `import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";`,
                `import { ${schema} } from "../../../../structures/class-validator/${schema}";`,
                `import { createFastifyCustomServerAssertBenchmarkProgram } from "../createFastifyCustomServerAssertBenchmarkProgram";`,
                ``,
                `const schema = ClassValidatorCollection(${schema});`,
                `createFastifyCustomServerAssertBenchmarkProgram<${type}>(`,
                `    (input) => {`,
                `        const output = plainToInstance(schema, input);`,
                `        const result = validateSync(output);`,
                `        if (result.length > 0)`,
                `            throw new Error(result[0].toString());`,
                `        return output;`,
                `    },`,
                `);`,
            ].join("\n");
        },
    },
];

BenchmarkProgrammer.generate({
    name: "server-assert",
    features: FEATURES,
    libraries: CLIENTS,
});
BenchmarkProgrammer.generate({
    name: "server-assert/internal",
    features: FEATURES,
    libraries: SERVERS,
});
