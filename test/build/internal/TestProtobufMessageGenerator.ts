import fs from "fs";

import { TestStructure } from "./TestStructure";

export namespace TestProtobufMessageGenerator {
  export async function generate(
    structures: TestStructure<any>[],
  ): Promise<void> {
    const path: string = `${__dirname}/../../src/features/protobuf.message`;
    await mkdir(path);

    for (const s of structures) {
      if (s.BINARABLE === false) continue;

      const content: string[] = [
        `import typia from "typia";`,
        `import { ${s.name} } from "../../structures/${s.name}";`,
        `import { _test_protobuf_message } from "../../internal/_test_protobuf_message";`,
        "",
        `export const test_protobuf_message_${s.name} = (): void => _test_protobuf_message(`,
        `  "${s.name}",`,
        `)(typia.protobuf.message<${s.name}>());`,
      ];
      await fs.promises.writeFile(
        `${__dirname}/../../src/features/protobuf.message/test_protobuf_message_${s.name}.ts`,
        content.join("\n"),
        "utf8",
      );
    }
  }

  export async function schemas(): Promise<void> {
    const path: string = `${__dirname}/../../src/features/protobuf.message`;
    const protobuf: string = `${path}/../../../schemas/protobuf`;
    await mkdir(protobuf);

    const schemaList: string[] = [];
    for (const file of await fs.promises.readdir(path)) {
      if (file.substring(file.length - 3) !== ".ts") continue;

      const name: string = file.substring(
        "test_protobuf_message_".length,
        file.length - 3,
      );
      schemaList.push(name);

      await fs.promises.writeFile(
        `${protobuf}/${name}.proto`,
        await read(file),
        "utf8",
      );
    }
  }

  async function read(file: string): Promise<string> {
    const content: string = await fs.promises.readFile(
      `${__dirname}/../../bin/features/protobuf.message/${file.slice(
        0,
        -3,
      )}.js`,
      "utf8",
    );
    const first: number = content.indexOf(`[`);
    const last: number = content.lastIndexOf(`].join`) + 1;
    const script: string = `return ${content.substring(first, last)}.join("\\n")`;
    return new Function(script)();
  }

  async function mkdir(path: string): Promise<void> {
    if (fs.existsSync(path) === true)
      await fs.promises.rm(path, { recursive: true });
    await fs.promises.mkdir(path, { recursive: true });
  }
}
