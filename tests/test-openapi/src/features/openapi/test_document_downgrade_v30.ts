import { OpenApi, OpenApiV3, OpenApiV3_1, SwaggerV2 } from "@samchon/openapi";
import fs from "fs";
import typia from "typia";

import { TestGlobal } from "../../TestGlobal";

export const test_document_downgrade_v30 = async (): Promise<void> => {
  const path: string = `${TestGlobal.ROOT}/examples/v3.1`;
  for (const directory of await fs.promises.readdir(path)) {
    const stats: fs.Stats = await fs.promises.lstat(`${path}/${directory}`);
    if (stats.isDirectory() === false) continue;
    for (const file of await fs.promises.readdir(`${path}/${directory}`)) {
      if (file.endsWith(".json") === false) continue;
      const swagger:
        | SwaggerV2.IDocument
        | OpenApiV3.IDocument
        | OpenApiV3_1.IDocument = typia.assert<
        SwaggerV2.IDocument | OpenApiV3.IDocument | OpenApiV3_1.IDocument
      >(
        JSON.parse(
          await fs.promises.readFile(`${path}/${directory}/${file}`, "utf8"),
        ),
      );
      const openapi: OpenApi.IDocument = OpenApi.convert(swagger);
      const downgraded: OpenApiV3.IDocument = OpenApi.downgrade(openapi, "3.0");
      typia.assert(downgraded);
    }
  }
};
