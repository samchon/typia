import cp from "child_process";
import fs from "fs";

import { TestLlmApplicationGenerator } from "./TestLlmApplicationGenerator";
import { TestStructure } from "./TestStructure";

export namespace TestLlmSchemaGenerator {
  export async function generate(
    structures: TestStructure<any>[],
  ): Promise<void> {
    const location: string = `${__dirname}/../../src/features/llm.schema`;
    if (fs.existsSync(location)) cp.execSync("npx rimraf " + location);
    await fs.promises.mkdir(location);
    for (const model of MODELS) {
      await fs.promises.mkdir(`${location}/${model}`);
      await application(model, structures);
    }
  }

  async function application(
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
        `import { _test_llm_schema } from "../../../internal/_test_llm_schema";`,
        "",
        `export const test_llm_schema_${model.replace(".", "_")}_${s.name} = `,
        `  _test_llm_schema({`,
        `    model: ${JSON.stringify(model)},`,
        `    name: ${JSON.stringify(s.name)},`,
        `  })(typia.llm.schema<${s.name}, ${JSON.stringify(model)}>(${REFERENCEABLE.includes(model) ? "{}" : ""}));`,
      ];
      await fs.promises.writeFile(
        `${__dirname}/../../src/features/llm.schema/${model}/test_llm_schema_${model.replace(".", "_")}_${s.name}.ts`,
        content.join("\n"),
        "utf8",
      );
    }
  }

  export async function schemas(): Promise<void> {
    const location: string = `${__dirname}/../../schemas/llm.schema`;
    if (fs.existsSync(location)) cp.execSync("npx rimraf " + location);
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
    const path: string = `${__dirname}/../../src/features/llm.schema/${model}`;
    const schemaPath: string = `${__dirname}/../../schemas/llm.schema/${model}`;
    for (const file of await fs.promises.readdir(path)) {
      if (file.substring(file.length - 3) !== ".ts") continue;

      const name: string = file.substring(
        `test_llm_schema_${model.replace(".", "_")}_`.length,
        file.length - 3,
      );
      const location: string =
        __dirname +
        `/../../bin/features/llm.schema/${model}/${file.slice(0, -3)}.js`;
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
    if (fs.existsSync(path)) cp.execSync(`npx rimraf ${path}`);
    await fs.promises.mkdir(path, { recursive: true });
  }
}

const MODELS = ["3.0", "3.1", "chatgpt", "claude", "llama", "gemini"];
const REFERENCEABLE = ["3.1", "chatgpt", "claude", "llama"];
