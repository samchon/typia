import { OpenApi, OpenApiV3_2 } from "@typia/interface";
import { OpenApiConverter } from "@typia/utils";
import fs from "fs";
import typia from "typia";

import { TestGlobal } from "../../TestGlobal";

export const test_document_upgrade_v32 = async (): Promise<void> => {
  const path: string = `${TestGlobal.ROOT}/examples/v3.2`;
  for (const file of await fs.promises.readdir(path)) {
    if (file.endsWith(".json") === false) continue;
    const swagger: OpenApiV3_2.IDocument = typia.assert<OpenApiV3_2.IDocument>(
      JSON.parse(await fs.promises.readFile(`${path}/${file}`, "utf8")),
    );
    const openapi: OpenApi.IDocument =
      OpenApiConverter.upgradeDocument(swagger);
    typia.assert(openapi);

    // Verify query method is preserved
    if (swagger.paths) {
      for (const [pathKey, pathItem] of Object.entries(swagger.paths)) {
        if (pathItem?.query !== undefined) {
          const upgradedPath = openapi.paths?.[pathKey];
          if (upgradedPath?.query === undefined) {
            throw new Error(
              `Query method was not preserved for path ${pathKey}`,
            );
          }
        }
      }
    }
  }
};
