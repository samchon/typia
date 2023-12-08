import cp from "child_process";
import fs from "fs";

import { TestStructure } from "./TestStructure";

export namespace TestReflectMetadataGenerator {
  export const generate = async (
    structures: TestStructure<any>[],
  ): Promise<void> => {
    const path: string = `${__dirname}/../../src/features/reflect.metadata`;
    if (fs.existsSync(path)) cp.execSync("npx rimraf " + path);
    await fs.promises.mkdir(path);

    for (const s of structures) {
      const content: string = [
        `import typia from "typia";`,
        `import { ${s.name} } from "../../structures/${s.name}";`,
        `import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";`,
        "",
        `export const test_reflect_metadata_${s.name} = `,
        `  _test_reflect_metadata("${s.name}")(`,
        `    typia.reflect.metadata<[${s.name}]>()`,
        `  );`,
      ].join("\n");
      await fs.promises.writeFile(
        `${path}/test_reflect_metadata_${s.name}.ts`,
        content,
        "utf8",
      );
    }
  };

  export const schemas = async (): Promise<void> => {
    const path: string = `${__dirname}/../../schemas/reflect/metadata`;
    await fs.promises.mkdir(path, { recursive: true });

    const directory: string[] = await fs.promises.readdir(
      `${__dirname}/../../src/features/reflect.metadata`,
    );
    for (const file of directory) {
      if (file.substring(file.length - 3) !== ".ts") continue;

      const name: string = file.substring(
        "test_reflect_metadata_".length,
        file.length - 3,
      );
      const location: string = `${__dirname}/../../bin/features/reflect.metadata/${file.slice(
        0,
        -3,
      )}.js`;
      const schema: object = getSchema(
        await fs.promises.readFile(location, "utf8"),
      );
      await fs.promises.writeFile(
        `${path}/${name}.json`,
        JSON.stringify(schema, null, 2),
        "utf8",
      );
    }
  };

  const getSchema = (content: string): object => {
    const first: number = content.indexOf("metadatas: [");
    const last: number = content.lastIndexOf("}");
    return new Function(`return {${content.substring(first, last)}}`)();
  };
}
