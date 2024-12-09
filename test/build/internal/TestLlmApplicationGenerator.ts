import cp from "child_process";
import fs from "fs";
import { VariadicSingleton } from "tstl";

import { TestStructure } from "./TestStructure";

export namespace TestLlmApplicationGenerator {
  export const MODELS = ["3.0", "3.1", "chatgpt", "claude", "gemini", "llama"];

  export const isApplicable = (model: string, structure: string) =>
    applicable.get(model, structure);

  const applicable = new VariadicSingleton(
    async (model: string, structure: string): Promise<boolean> => {
      if (structure === "UltimateUnion") return false;
      const location: string = `${__dirname}/../../schemas/json.schemas/v3_1/${structure}.json`;
      if (fs.existsSync(location) === false) return false;

      const v31: string = await fs.promises.readFile(location, "utf8");
      if (
        (model === "chatgpt" || model === "gemini") &&
        (v31.includes(`"additionalProperties": {`) === true ||
          v31.includes(`"additionalProperties": true`) === true)
      )
        return false;
      else if (v31.includes(`"prefixItems":`) === true) return false;
      else if (model === "gemini") {
        // GEMINI DOES NOT SUPPORT UNION TYPE
        const json: string = await fs.promises.readFile(
          location.replace("v3_1", "v3_0"),
          "utf8",
        );
        if (json.includes(`"oneOf":`) === true) return false;
      }
      return true;
    },
  );

  export async function generate(
    structures: TestStructure<any>[],
  ): Promise<void> {
    const location: string = `${__dirname}/../../src/features/llm.application`;
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
      if ((await isApplicable(model, s.name)) === false) continue;
      const content: string[] = [
        `import typia from "typia";`,
        `import { ${s.name} } from "../../../structures/${s.name}";`,
        `import { _test_llm_application } from "../../../internal/_test_llm_application";`,
        "",
        `export const test_llm_application_${model.replace(".", "_")}_${s.name} = `,
        `  _test_llm_application({`,
        `    model: ${JSON.stringify(model)},`,
        `    name: ${JSON.stringify(s.name)},`,
        `  })(`,
        `    typia.llm.application<${s.name}Application, ${JSON.stringify(model)}>(),`,
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
        `${__dirname}/../../src/features/llm.application/${model}/test_llm_application_${model.replace(".", "_")}_${s.name}.ts`,
        content.join("\n"),
        "utf8",
      );
    }
  }

  export async function schemas(): Promise<void> {
    const location: string = `${__dirname}/../../schemas/llm.application`;
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
    const path: string = `${__dirname}/../../src/features/llm.application/${model}`;
    const schemaPath: string = `${__dirname}/../../schemas/llm.application/${model}`;
    for (const file of await fs.promises.readdir(path)) {
      if (file.substring(file.length - 3) !== ".ts") continue;

      const name: string = file.substring(
        `test_llm_application_${model.replace(".", "_")}_`.length,
        file.length - 3,
      );
      const location: string =
        __dirname +
        `/../../bin/features/llm.application/${model}/${file.slice(0, -3)}.js`;
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
