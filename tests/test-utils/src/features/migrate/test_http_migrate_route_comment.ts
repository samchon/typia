import { TestValidator } from "@nestia/e2e";
import {
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  OpenApi,
} from "@typia/interface";
import { HttpMigration, OpenApiConverter } from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "../../TestGlobal";

export const test_http_migrate_route_comment = async (): Promise<void> => {
  const swagger: OpenApi.IDocument = OpenApiConverter.upgradeDocument(
    JSON.parse(
      await fs.promises.readFile(
        `${TestGlobal.ROOT}/examples/v3.1/shopping.json`,
        "utf8",
      ),
    ),
  );
  const migrate: IHttpMigrateApplication = HttpMigration.application(swagger);
  const route: IHttpMigrateRoute | undefined = migrate.routes.find(
    (r) => r.path === "/shoppings/sellers/sales/{id}" && r.method === "put",
  );
  TestValidator.predicate(
    "comment",
    () =>
      !!route?.comment()?.startsWith("Update a sale.") &&
      !!route
        ?.comment()
        ?.includes("Update a {@link IShoppingSale sale} with new information"),
  );
};
