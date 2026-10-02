import { TestValidator } from "@nestia/e2e";
import {
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  OpenApi,
} from "@typia/interface";
import { HttpMigration, OpenApiConverter } from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "../../../TestGlobal";

/**
 * Verifies a migrated route comment carries the operation summary and
 * description.
 *
 * SDK generators emit the route comment as the function's documentation.
 * Dropping the summary or the description would silently strip user-facing
 * docs.
 *
 * 1. Upgrade the checked-in shopping example and migrate it.
 * 2. Find PUT /shoppings/sellers/sales/{id}.
 * 3. Assert the comment starts with its summary and includes the description text.
 *
 */
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
