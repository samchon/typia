import fs from "fs";

import { TestLlmApplicationGenerator } from "./TestLlmApplicationGenerator";
import { TestStructure } from "./TestStructure";

export namespace TestLlmApplicationEqualsGenerator {
  export async function generate(
    structures: TestStructure<any>[],
  ): Promise<void> {
    const location: string = `${__dirname}/../../src/features/llm.applicationEquals`;
    await mkdir(location);
    await application(structures);
  }

  async function application(structures: TestStructure<any>[]): Promise<void> {
    for (const s of structures) {
      if ((await TestLlmApplicationGenerator.isApplicable(s.name)) === false)
        continue;
      const content: string[] = [
        `import typia from "typia";`,
        `import { ${s.name} } from "../../structures/${s.name}";`,
        `import { _test_llm_applicationEquals } from "../../internal/_test_llm_applicationEquals";`,
        "",
        `export const test_llm_applicationEquals_${s.name} = (): void =>`,
        `  _test_llm_applicationEquals({`,
        `    name: ${JSON.stringify(s.name)},`,
        `    factory: ${s.name}`,
        `  })(`,
        `    typia.llm.application<${s.name}Application, { equals: true }>(),`,
        `  );`,
        ``,
        `interface ${s.name}Application {`,
        `  insert(p: { first: ${s.name} }): Promise<void>;`,
        `  reduce(p: { first: ${s.name}, second: ${s.name} | null }): Promise<${s.name}>;`,
        `  coalesce(p: {`,
        `    first: ${s.name} | null,`,
        `    second: ${s.name} | null,`,
        `    third?: ${s.name} | null,`,
        `  }): Promise<${s.name} | null>;`,
        `}`,
      ];
      await fs.promises.writeFile(
        `${__dirname}/../../src/features/llm.applicationEquals/test_llm_applicationEquals_${s.name}.ts`,
        content.join("\n"),
        "utf8",
      );
    }
  }

  async function mkdir(path: string): Promise<void> {
    if (fs.existsSync(path) === true)
      await fs.promises.rm(path, { recursive: true });
    await fs.promises.mkdir(path, { recursive: true });
  }
}
