import fs from "fs";

import { TestLlmApplicationGenerator } from "./TestLlmApplicationGenerator";
import { TestStructure } from "./TestStructure";

export namespace TestLlmParametersGenerator {
  export async function generate(
    structures: TestStructure<any>[],
  ): Promise<void> {
    const location: string = `${__dirname}/../../src/features/llm.parameters`;
    await mkdir(location);
    for (const model of MODELS) {
      await fs.promises.mkdir(`${location}/${model}`);
      await parameters(model, structures);
    }
  }

  async function parameters(
    model: string,
    structures: TestStructure<any>[],
  ): Promise<void> {
    for (const s of structures) {
      if (
        (await TestLlmApplicationGenerator.isApplicable(model, s.name)) ===
        false
      )
        continue;
      const content: string[] = [
        `import typia from "typia";`,
        `import { ${s.name} } from "../../../structures/${s.name}";`,
        `import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";`,
        "",
        `export const test_llm_parameters_${model.replace(".", "_")}_${s.name} = `,
        `  _test_llm_parameters({`,
        `    model: ${JSON.stringify(model)},`,
        `    name: ${JSON.stringify(s.name)},`,
        `  })(`,
        `    typia.llm.parameters<${s.name}Parameters, ${JSON.stringify(model)}>(),`,
        `  );`,
        ``,
        `interface ${s.name}Parameters {`,
        `  regular: ${s.name};`,
        `  nullable: ${s.name} | null;`,
        `  optional: ${s.name} | undefined;`,
        `  faint: ${s.name} | null | undefined;`,
        `  array: Array<${s.name}>;`,
        `}`,
      ];
      await fs.promises.writeFile(
        `${__dirname}/../../src/features/llm.parameters/${model}/test_llm_parameters_${model.replace(".", "_")}_${s.name}.ts`,
        content.join("\n"),
        "utf8",
      );
    }
  }

  export async function schemas(): Promise<void> {
    const location: string = `${__dirname}/../../schemas/llm.parameters`;
    await mkdir(location);
    for (const model of MODELS) {
      await mkdir(`${location}/${model}`);
      await iterate(model);
    }
  }

  function getSchema(content: string): object {
    const first: number = content.lastIndexOf(`})({`) + 4;
    const last: number = content.lastIndexOf("}");
    return new Function("return {" + content.substring(first, last) + "}")();
  }

  async function iterate(model: string): Promise<void> {
    const path: string = `${__dirname}/../../src/features/llm.parameters/${model}`;
    const schemaPath: string = `${__dirname}/../../schemas/llm.parameters/${model}`;
    for (const file of await fs.promises.readdir(path)) {
      if (file.substring(file.length - 3) !== ".ts") continue;

      const name: string = file.substring(
        `test_llm_parameters_${model.replace(".", "_")}_`.length,
        file.length - 3,
      );
      const location: string =
        __dirname +
        `/../../bin/features/llm.parameters/${model}/${file.slice(0, -3)}.js`;
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

const MODELS = ["3.0", "3.1", "chatgpt", "claude", "gemini", "llama"];
