import cp from "child_process";
import fs from "fs";

import { TestStructure } from "./TestStructure";

export namespace TestJsonSchemaGenerator {
  export async function generate(
    structures: TestStructure<any>[],
  ): Promise<void> {
    const location: string = `${__dirname}/../../src/features/json.application`;
    if (fs.existsSync(location)) cp.execSync("npx rimraf " + location);
    await fs.promises.mkdir(location);

    for (const version of ["3.0", "3.1"] as const)
      await application(structures, version);
  }

  async function application(
    structures: TestStructure<any>[],
    version: "3.0" | "3.1",
  ): Promise<void> {
    const title: string = `v${version.replace(".", "_")}`;
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
        `  _test_json_application({`,
        `    version: "${version}",`,
        `    name: "${s.name}", `,
        `  })(typia.json.application<[${s.name}], "${version}">());`,
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

    for (const version of ["3.0", "3.1"] as const) await iterate(version);
  }

  function getSchema(content: string): object {
    const first: number = content.lastIndexOf("})({") + 4;
    const last: number = content.lastIndexOf("}");
    return new Function("return {" + content.substring(first, last) + "}")();
  }

  async function iterate(version: "3.0" | "3.1") {
    const title: string = `v${version.replace(".", "_")}`;
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
