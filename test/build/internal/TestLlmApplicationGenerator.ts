import fs from "fs";
import { VariadicSingleton } from "tstl";

import { TestStructure } from "./TestStructure";

export namespace TestLlmApplicationGenerator {
  export const isApplicable = (structure: string) => applicable.get(structure);

  const applicable = new VariadicSingleton(
    async (structure: string): Promise<boolean> => {
      if (structure === "UltimateUnion") return false;
      const location: string = `${__dirname}/../../schemas/json.schemas/v3_1/${structure}.json`;
      if (fs.existsSync(location) === false) return false;

      const v31: string = await fs.promises.readFile(location, "utf8");
      if (v31.includes(`"prefixItems":`) === true) return false;
      return true;
    },
  );

  export async function generate(
    structures: TestStructure<any>[],
  ): Promise<void> {
    const location: string = `${__dirname}/../../src/features/llm.application`;
    await mkdir(location);
    await application(structures);
  }

  async function application(structures: TestStructure<any>[]): Promise<void> {
    for (const s of structures) {
      if ((await isApplicable(s.name)) === false) continue;
      const content: string[] = [
        `import typia from "typia";`,
        `import { ${s.name} } from "../../structures/${s.name}";`,
        `import { _test_llm_application } from "../../internal/_test_llm_application";`,
        "",
        `export const test_llm_application_${s.name} = (): void =>`,
        `  _test_llm_application({`,
        `    name: ${JSON.stringify(s.name)},`,
        `    factory: ${s.name}`,
        `  })(`,
        `    typia.llm.application<${s.name}Application>(),`,
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
        `${__dirname}/../../src/features/llm.application/test_llm_application_${s.name}.ts`,
        content.join("\n"),
        "utf8",
      );
    }
  }

  export async function schemas(): Promise<void> {
    const location: string = `${__dirname}/../../schemas/llm.application`;
    await mkdir(location);
    await iterate();
  }

  function getSchema(content: string): object {
    const first: number = content.lastIndexOf(`})({`) + 4;
    const last: number = content.lastIndexOf("}");
    return new Function("return {" + content.substring(first, last) + "}")();
  }

  async function iterate(): Promise<void> {
    const path: string = `${__dirname}/../../src/features/llm.application`;
    const schemaPath: string = `${__dirname}/../../schemas/llm.application`;
    for (const file of await fs.promises.readdir(path)) {
      if (file.substring(file.length - 3) !== ".ts") continue;

      const name: string = file.substring(
        `test_llm_application_`.length,
        file.length - 3,
      );
      const location: string =
        __dirname +
        `/../../bin/features/llm.application/${file.slice(0, -3)}.js`;
      const schema: object = getSchema(
        await fs.promises.readFile(location, "utf8"),
      );
      await fs.promises.writeFile(
        `${schemaPath}/${name}.json`,
        JSON.stringify(schema, null, 2),
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
