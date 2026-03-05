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
      `import { createClientPerformanceBenchmarkProgram } from "../createClientPerformanceBenchmarkProgram";`,
      ``,
      `createClientPerformanceBenchmarkProgram(`,
      `  __dirname + "/../internal/${BenchmarkProgrammer.emend(
        name,
      )}/benchmark-server-performance-${BenchmarkProgrammer.emend(
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
        `import { ${type} } from "../../../../structures/pure/${type}";`,
        `import { createExpressServerPerformanceBenchmarkProgram } from "../createExpressServerPerformanceBenchmarkProgram";`,
        ``,
        `createExpressServerPerformanceBenchmarkProgram(`,
        `  typia.createAssert<ICollection<${type}>>(),`,
        `  typia.json.createStringify<ICollection<${type}>>(),`,
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
        `import { ${type} } from "../../../../structures/pure/${type}";`,
        `import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";`,
        `import { ${schema} } from "../../../../structures/class-validator/${schema}";`,
        `import { createExpressServerPerformanceBenchmarkProgram } from "../createExpressServerPerformanceBenchmarkProgram";`,
        ``,
        `const schema = ClassValidatorCollection(${schema});`,
        `createExpressServerPerformanceBenchmarkProgram<${type}, any>(`,
        `  (input) => {`,
        `    const output = plainToInstance(schema, input);`,
        `    const result = validateSync(output);`,
        `    if (result.length > 0)`,
        `      throw new Error(result[0].toString());`,
        `    return output;`,
        `  },`,
        `  (input) => JSON.stringify(instanceToPlain(schema)),`,
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
        `import { ${type} } from "../../../../structures/pure/${type}";`,
        `import { createFastifyPureServerPerformanceBenchmarkProgram } from "../createFastifyPureServerPerformanceBenchmarkProgram";`,
        ``,
        `createFastifyPureServerPerformanceBenchmarkProgram(`,
        `   typia.json.schemas<[ICollection<${type}>], "3.0">()`,
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
        `import { ${type} } from "../../../../structures/pure/${type}";`,
        `import { createFastifyCustomServerPerformanceBenchmarkProgram } from "../createFastifyCustomServerPerformanceBenchmarkProgram";`,
        ``,
        `createFastifyCustomServerPerformanceBenchmarkProgram(`,
        `  typia.createAssert<ICollection<${type}>>(),`,
        `  typia.json.createStringify<ICollection<${type}>>(),`,
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
        `import { ${type} } from "../../../../structures/pure/${type}";`,
        `import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";`,
        `import { ${schema} } from "../../../../structures/class-validator/${schema}";`,
        `import { createFastifyCustomServerPerformanceBenchmarkProgram } from "../createFastifyCustomServerPerformanceBenchmarkProgram";`,
        ``,
        `const schema = ClassValidatorCollection(${schema});`,
        `createFastifyCustomServerPerformanceBenchmarkProgram<${type}, any>(`,
        `  (input) => {`,
        `    const output = plainToInstance(schema, input);`,
        `    const result = validateSync(output);`,
        `      if (result.length > 0)`,
        `        throw new Error(result[0].toString());`,
        `      return output;`,
        `  },`,
        `  (input) => JSON.stringify(instanceToPlain(input)),`,
        `);`,
      ].join("\n");
    },
  },
];

BenchmarkProgrammer.generate({
  name: "server-performance",
  features: FEATURES,
  libraries: CLIENTS,
});
BenchmarkProgrammer.generate({
  name: "server-performance/internal",
  features: FEATURES,
  libraries: SERVERS,
});
