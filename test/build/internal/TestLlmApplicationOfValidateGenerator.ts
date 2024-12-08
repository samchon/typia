import cp from "child_process";
import fs from "fs";

import { TestLlmApplicationGenerator } from "./TestLlmApplicationGenerator";
import { TestStructure } from "./TestStructure";

export namespace TestLlmApplicationOfValidateGenerator {
  export const generate = async (
    structures: TestStructure<any>[],
  ): Promise<void> => {
    const location: string = `${__dirname}/../../src/features/llm.applicationOfValidate`;
    if (fs.existsSync(location)) cp.execSync("npx rimraf " + location);
    await fs.promises.mkdir(location);
    for (const model of MODELS) {
      await fs.promises.mkdir(`${location}/${model}`);
      await applicationOfValidate(model, structures);
    }
  };

  const applicationOfValidate = async (
    model: string,
    structures: TestStructure<any>[],
  ): Promise<void> => {
    for (const s of structures) {
      if (
        (await TestLlmApplicationGenerator.isApplicable(model, s.name)) ===
        false
      )
        continue;
      const content: string[] = [
        `import typia from "typia";`,
        `import { ${s.name} } from "../../../structures/${s.name}";`,
        `import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";`,
        "",
        `export const test_llm_applicationOfValidate_${model.replace(".", "_")}_${s.name} = `,
        `  _test_llm_applicationOfValidate({`,
        `    model: ${JSON.stringify(model)},`,
        `    name: ${JSON.stringify(s.name)},`,
        `    factory: ${s.name}`,
        `  })(`,
        `    typia.llm.applicationOfValidate<${s.name}Application, ${JSON.stringify(model)}>(),`,
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
        `${__dirname}/../../src/features/llm.applicationOfValidate/${model}/test_llm_applicationOfValidate_${model.replace(".", "_")}_${s.name}.ts`,
        content.join("\n"),
        "utf8",
      );
    }
  };
}

const MODELS = ["3.0", "3.1", "chatgpt", "claude", "gemini", "llama"];
