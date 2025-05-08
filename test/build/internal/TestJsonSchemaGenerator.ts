import fs from "fs";

import { TestStructure } from "./TestStructure";

export namespace TestJsonSchemaGenerator {
  export async function generate(
    structures: TestStructure<any>[],
  ): Promise<void> {
    await mkdir(`${__dirname}/../../src/features/json.schemas`);
    for (const version of ["3.0", "3.1"] as const)
      await functor(structures, version);
  }

  async function functor(
    structures: TestStructure<any>[],
    version: "3.0" | "3.1",
  ): Promise<void> {
    const title: string = `v${version.replace(".", "_")}`;
    const path: string = `${__dirname}/../../src/features/json.schemas/${title}`;
    await fs.promises.mkdir(path);

    for (const s of structures) {
      if (s.JSONABLE === false) continue;

      const content: string[] = [
        `import typia from "typia";`,
        `import { ${s.name} } from "../../../structures/${s.name}";`,
        `import { _test_json_schema } from "../../../internal/_test_json_schema";`,
        "",
        `export const test_json_schema_${title}_${s.name} = `,
        `  _test_json_schema({`,
        `    version: "${version}",`,
        `    name: "${s.name}", `,
        `  })(typia.json.schema<${s.name}, "${version}">());`,
      ];
      await fs.promises.writeFile(
        `${__dirname}/../../src/features/json.schema/${title}/test_json_schema_${title}_${s.name}.ts`,
        content.join("\n"),
        "utf8",
      );
    }
  }

  export async function schemas(): Promise<void> {
    const location: string = `${__dirname}/../../schemas/json.schema`;
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
    const path: string = `${__dirname}/../../src/features/json.schema/${title}`;
    const schemaPath: string = `${__dirname}/../../schemas/json.schema/${title}`;
    await mkdir(schemaPath);

    for (const file of await fs.promises.readdir(path)) {
      if (file.substring(file.length - 3) !== ".ts") continue;

      const name: string = file.substring(
        `test_json_schema_${title}_`.length,
        file.length - 3,
      );
      const location: string =
        __dirname +
        `/../../bin/features/json.schema/${title}/${file.slice(0, -3)}.js`;
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
