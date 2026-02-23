import { IHttpMigrateApplication, OpenApi, SwaggerV2 } from "@typia/interface";
import { HttpMigration, OpenApiConverter } from "@typia/utils";
import fs from "fs";
import typia from "typia";

import { TestGlobal } from "../../TestGlobal";

export const test_http_migrate_v20 = async (): Promise<void> => {
  const path: string = `${TestGlobal.ROOT}/examples/v2.0`;
  for (const file of await fs.promises.readdir(path)) {
    if (file.endsWith(".json") === false) continue;
    const swagger: SwaggerV2.IDocument = typia.assert<SwaggerV2.IDocument>(
      JSON.parse(await fs.promises.readFile(`${path}/${file}`, "utf8")),
    );
    const openapi: OpenApi.IDocument =
      OpenApiConverter.upgradeDocument(swagger);
    const migrate: IHttpMigrateApplication = HttpMigration.application(openapi);
    typia.assert(migrate);
  }
};
