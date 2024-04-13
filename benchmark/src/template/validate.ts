import { BenchmarkProgrammer } from "./BenchmarkProgrammer";

const FEATURES: string[] = [
  "ObjectSimple",
  "ObjectHierarchical",
  "ObjectRecursive",
  "ObjectUnionExplicit",
  "ObjectUnionImplicit",
  "ArrayRecursive",
  "ArrayRecursiveUnionExplicit",
  "ArrayRecursiveUnionImplicit",
  "UltimateUnion",
];

const LIBRARIES = (category: string): BenchmarkProgrammer.ILibrary[] => [
  {
    name: "typia",
    body: (type) => {
      const program = `create${BenchmarkProgrammer.pascal(
        category,
      )}BenchmarkProgram`;
      return [
        `import typia from "typia";`,
        ``,
        `import { ${type} } from "../../../structures/pure/${type}";`,
        `import { ${program} } from "../${program}";`,
        ``,
        `${program}(`,
        `  typia.create${BenchmarkProgrammer.pascal(
          category,
        )}<${BenchmarkProgrammer.pascal(type)}>()`,
        `);`,
      ].join("\n");
    },
  },
  ...["typebox", "io-ts", "zod", "class-validator"].map((name) => ({
    name,
    body: (type: string) => {
      const schema: string = `${BenchmarkProgrammer.pascal(name)}${type}`;
      const program: string = `create${BenchmarkProgrammer.pascal(
        category,
      )}${BenchmarkProgrammer.pascal(name)}BenchmarkProgram`;

      return [
        `import { ${schema} } from "../../../structures/${name}/${schema}";`,
        ``,
        `import { ${program} } from "./${program}";`,
        ``,
        `${program}(${schema});`,
      ].join("\n");
    },
  })),
  {
    name: "ajv",
    body: (type: string) => {
      const program: string = `create${BenchmarkProgrammer.pascal(
        category,
      )}AjvBenchmarkProgram`;

      return [
        `import typia from "typia";`,
        ``,
        `import { ${type} } from "../../../structures/pure/${type}";`,
        `import { ${program} } from "./${program}";`,
        ``,
        `${program}(`,
        `  typia.json.application<[${type}], "3.0">(),`,
        `);`,
      ].join("\n");
    },
  },
];

async function main(): Promise<void> {
  await BenchmarkProgrammer.generate({
    name: "is",
    libraries: LIBRARIES("is"),
    features: FEATURES,
  });
  await BenchmarkProgrammer.generate({
    name: "assert",
    libraries: LIBRARIES("assert"),
    features: FEATURES,
  });
  await BenchmarkProgrammer.generate({
    name: "validate",
    libraries: LIBRARIES("validate"),
    features: FEATURES,
  });
}

main().catch((exp) => {
  console.error(exp);
  process.exit(-1);
});
