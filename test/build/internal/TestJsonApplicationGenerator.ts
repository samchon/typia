import cp from "child_process";
import fs from "fs";

import { TestStructure } from "./TestStructure";

export namespace TestJsonApplicationGenerator {
  export async function generate(
    structures: TestStructure<any>[],
  ): Promise<void> {
    const location: string = `${__dirname}/../../src/features/json.application`;
    if (fs.existsSync(location)) cp.execSync("npx rimraf " + location);
    await fs.promises.mkdir(location);

    for (const purpose of ["ajv", "swagger"] as const)
      for (const surplus of [true, false])
        await application(structures, purpose, surplus);
  }

  async function application(
    structures: TestStructure<any>[],
    purpose: "ajv" | "swagger",
    surplus: boolean,
  ): Promise<void> {
    const title: string = `${purpose}_${surplus ? "surplus" : "standard"}`;
    const path: string = `${__dirname}/../../src/features/json.application/${title}`;
    await fs.promises.mkdir(path);

    for (const s of structures) {
      if (s.JSONABLE === false) continue;

      const content: string[] = [
        `import typia from "typia";`,
        `import { ${s.name} } from "../../../structures/${s.name}";`,
        `import { _test_json_application } from "../../../internal/_test_json_application";`,
        "",
        `export const test_json_application_${title}_${s.name} = `,
        `  _test_json_application({ purpose: "${purpose}",`,
        `    surplus: ${surplus},`,
        `    name: "${s.name}", `,
        `  })(`,
        `    typia.json.application<[${s.name}], "${purpose}", ${surplus}>(),`,
        `  );`,
      ];
      await fs.promises.writeFile(
        `${__dirname}/../../src/features/json.application/${title}/test_json_application_${title}_${s.name}.ts`,
        content.join("\n"),
        "utf8",
      );
    }
  }

  export async function schemas(): Promise<void> {
    const location: string = `${__dirname}/../../schemas/json`;
    await mkdir(location);

    for (const purpose of ["ajv", "swagger"] as const)
      for (const surplus of [true, false]) await iterate(purpose, surplus);
  }

  function getSchema(content: string): object {
    const first: number = content.indexOf("schemas: [");
    const last: number = content.lastIndexOf("}");

    return new Function("return {" + content.substring(first, last) + "}")();
  }

  async function iterate(purpose: "ajv" | "swagger", surplus: boolean) {
    const title: string = `${purpose}_${surplus ? "surplus" : "standard"}`;
    const path: string = `${__dirname}/../../src/features/json.application/${title}`;
    const schemaPath: string = `${__dirname}/../../schemas/json/${title}`;
    await mkdir(schemaPath);

    for (const file of await fs.promises.readdir(path)) {
      if (file.substring(file.length - 3) !== ".ts") continue;

      const name: string = file.substring(
        `test_json_application_${title}_`.length,
        file.length - 3,
      );
      const location: string =
        __dirname +
        `/../../bin/features/json.application/${title}/${file.slice(0, -3)}.js`;
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
    await fs.promises.mkdir(path);
  }
}
