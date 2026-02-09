import { TestValidator } from "@nestia/e2e";
import {
  HttpMigration,
  IHttpConnection,
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  IHttpResponse,
  OpenApi,
} from "@samchon/openapi";
import fs from "fs";

import { TestGlobal } from "../TestGlobal";

export const test_http_migrate_fetch_propagate = async (
  connection: IHttpConnection,
): Promise<void> => {
  const document: OpenApi.IDocument = OpenApi.convert(
    JSON.parse(
      await fs.promises.readFile(`${TestGlobal.ROOT}/swagger.json`, "utf8"),
    ),
  );
  const app: IHttpMigrateApplication = HttpMigration.application(document);
  const route: IHttpMigrateRoute | undefined = app.routes.find(
    (r) =>
      r.path === "/{index}/{level}/{optimal}/parameters" && r.method === "get",
  );
  if (route === undefined) throw new Error("Route not found");

  const response: IHttpResponse = await HttpMigration.propagate({
    connection,
    route,
    parameters: ["https://some.url/index.html", "two", "one"],
  });
  TestValidator.equals("status", response.status, 400);
};
