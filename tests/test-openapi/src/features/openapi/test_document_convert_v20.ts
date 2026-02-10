import { OpenApi, SwaggerV2 } from "@samchon/openapi";
import fs from "fs";
import typia from "typia";

import { TestGlobal } from "../../TestGlobal";

export const test_document_convert_v20 = async (): Promise<void> => {
  const path: string = `${TestGlobal.ROOT}/examples/v2.0`;
  for (const file of await fs.promises.readdir(path)) {
    if (file.endsWith(".json") === false) continue;
    const swagger: SwaggerV2.IDocument = typia.assert<SwaggerV2.IDocument>(
      JSON.parse(await fs.promises.readFile(`${path}/${file}`, "utf8")),
    );
    const openapi: OpenApi.IDocument = OpenApi.convert(swagger);
    typia.assert(openapi);
  }
};
