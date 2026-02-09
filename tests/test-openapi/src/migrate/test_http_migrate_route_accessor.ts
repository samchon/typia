import { TestValidator } from "@nestia/e2e";
import {
  HttpMigration,
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  OpenApi,
} from "@samchon/openapi";
import fs from "fs";

import { TestGlobal } from "../TestGlobal";

export const test_http_migrate_route_accessor = async (): Promise<void> => {
  const document: OpenApi.IDocument = OpenApi.convert(
    JSON.parse(
      await fs.promises.readFile(
        `${TestGlobal.ROOT}/examples/v3.1/shopping.json`,
        "utf8",
      ),
    ),
  );
  const application: IHttpMigrateApplication =
    HttpMigration.application(document);
  const route: IHttpMigrateRoute | undefined = application.routes.find(
    (r) => r.path === "/shoppings/sellers/sales" && r.method === "post",
  );
  TestValidator.equals(
    "accessor",
    route?.accessor.join("."),
    "shoppings.sellers.sales.create",
  );
};
