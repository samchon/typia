import { TestValidator } from "@nestia/e2e";
import {
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  OpenApi,
} from "@typia/interface";
import { HttpMigration, OpenApiConverter } from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "../../TestGlobal";

export const test_http_migrate_route_accessor = async (): Promise<void> => {
  const document: OpenApi.IDocument = OpenApiConverter.upgradeDocument(
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
