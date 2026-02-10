import {
  HttpMigration,
  IHttpMigrateApplication,
  OpenApi,
  OpenApiV3_1,
} from "@samchon/openapi";
import fs from "fs";
import typia from "typia";

import { TestGlobal } from "../../TestGlobal";

export const test_http_migrate_v31 = async (): Promise<void> => {
  const path: string = `${TestGlobal.ROOT}/examples/v3.1`;
  for (const file of await fs.promises.readdir(path)) {
    if (file.endsWith(".json") === false) continue;
    const swagger: OpenApiV3_1.IDocument = typia.assert<OpenApiV3_1.IDocument>(
      JSON.parse(await fs.promises.readFile(`${path}/${file}`, "utf8")),
    );
    const openapi: OpenApi.IDocument = OpenApi.convert(swagger);
    const migrate: IHttpMigrateApplication = HttpMigration.application(openapi);
    typia.assert(migrate);
  }
};
