import { TestValidator } from "@nestia/e2e";
import {
  HttpMigration,
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  OpenApi,
} from "@samchon/openapi";
import fs from "fs";

import { TestGlobal } from "../TestGlobal";

export const test_http_migrate_route_return_type_void =
  async (): Promise<void> => {
    const document: OpenApi.IDocument = OpenApi.convert(
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
