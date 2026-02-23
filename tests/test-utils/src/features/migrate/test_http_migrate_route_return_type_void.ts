import { TestValidator } from "@nestia/e2e";
import {
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  OpenApi,
} from "@typia/interface";
import { HttpMigration, OpenApiConverter } from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "../../TestGlobal";

export const test_http_migrate_route_return_type_void =
  async (): Promise<void> => {
    const document: OpenApi.IDocument = OpenApiConverter.upgradeDocument(
      JSON.parse(
        await fs.promises.readFile(`${TestGlobal.ROOT}/swagger.json`, "utf8"),
      ),
    );
    const app: IHttpMigrateApplication = HttpMigration.application(document);
    const route: IHttpMigrateRoute | undefined = app.routes.find(
      (r) => r.path === "/nothing" && r.method === "get",
    );
    TestValidator.equals("exists", !!route, true);
  };
