import {
  IHttpMigrateApplication,
  OpenApi,
  OpenApiV3_2,
} from "@typia/interface";
import { HttpMigration, OpenApiConverter } from "@typia/utils";
import fs from "fs";
import typia from "typia";

import { TestGlobal } from "../../TestGlobal";

export const test_http_migrate_v32 = async (): Promise<void> => {
  const path: string = `${TestGlobal.ROOT}/examples/v3.2`;
  for (const file of await fs.promises.readdir(path)) {
    if (file.endsWith(".json") === false) continue;
    const swagger: OpenApiV3_2.IDocument = typia.assert<OpenApiV3_2.IDocument>(
      JSON.parse(await fs.promises.readFile(`${path}/${file}`, "utf8")),
    );
    const openapi: OpenApi.IDocument =
      OpenApiConverter.upgradeDocument(swagger);
    const migrate: IHttpMigrateApplication = HttpMigration.application(openapi);
    typia.assert(migrate);

    // Verify query method is migrated
    const queryRoutes = migrate.routes.filter((r) => r.method === "query");
    if (swagger.paths) {
      const expectedQueryCount = Object.values(swagger.paths).filter(
        (p) => p?.query !== undefined,
      ).length;
      if (queryRoutes.length !== expectedQueryCount) {
        throw new Error(
          `Expected ${expectedQueryCount} query routes but got ${queryRoutes.length}`,
        );
      }
    }
  }
};
