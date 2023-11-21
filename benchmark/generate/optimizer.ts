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
  {
    name: "typia",
    body: (type: string) =>
      [
        `import typia from "typia";`,
        ``,
        `import { ${type} } from "../../../../test/structures/${type}";`,
        `import { createOptimizerBenchmarkProgram } from "../createOptimizerBenchmarkProgram";`,
        ``,
        `createOptimizerBenchmarkProgram(`,
        `    typia.createIs<${type}>()`,
        `);`,
      ].join("\n"),
  },
  {
    name: "class-validator",
    body: (type) => {
      const schema = `ClassValidator${BenchmarkProgrammer.pascal(type)}`;
      const program = `createOptimizerClassValidatorBenchmarkProgram`;

      return [
        `import { ${schema} } from "../../../structures/class-validator/${schema}";`,
        `import { ${program} } from "./${program}";`,
        ``,
        `${program}(${schema});`,
      ].join("\n");
    },
  },
  ...["typebox", "ajv"].map((name) => ({
    name,
    body: (type: string) => {
      const file = `Typebox${BenchmarkProgrammer.pascal(type)}`;
      const schema = `__${file}`;
      const program = `createOptimizer${BenchmarkProgrammer.pascal(
        name,
      )}BenchmarkProgram`;

      return [
        `import { ${schema} } from "../../../structures/typebox/${file}";`,
        `import { ${program} } from "./${program}";`,
        ``,
        `${program}(${schema});`,
      ].join("\n");
    },
  })),
];

async function main(): Promise<void> {
  await BenchmarkProgrammer.generate({
    name: "optimizer",
    libraries: LIBRARIES,
    features: FEATURES,
  });
}

main().catch((exp) => {
  console.error(exp);
  process.exit(-1);
});
