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
        `  typia.create${BenchmarkProgrammer.pascal(category).replace(
          "Error",
          "",
        )}<${BenchmarkProgrammer.pascal(type)}[]>()`,
        `);`,
      ].join("\n");
    },
  },
  {
    name: "typebox",
    body: (type) => {
      const schema: string = `Typebox${type}`;
      const program: string = `create${BenchmarkProgrammer.pascal(
        category,
      )}TypeboxBenchmarkProgram`;

      return [
        `import { __${schema} } from "../../../structures/typebox/${schema}";`,
        ``,
        `import { ${program} } from "./${program}";`,
        ``,
        `${program}(__${schema});`,
      ].join("\n");
    },
  },
  ...["io-ts", "zod", "class-validator"].map((name) => ({
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
];

async function main(): Promise<void> {
  await BenchmarkProgrammer.generate({
    name: "assert-error",
    libraries: LIBRARIES("assert-error"),
    features: FEATURES,
  });
}

main().catch((exp) => {
  console.error(exp);
  process.exit(-1);
});
