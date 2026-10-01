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
 * @evidence contracts/testing.md#behavioral-verification HttpMigration.application migrates the shopping example and the route's comment() is read; a lost summary or description changes the prefix or inclusion predicate.
 * @evidence contracts/testing.md#independent-expectations The expected prefix and phrase are literals taken from the fixture document's operation text, independent of the comment builder. Partial matching keeps the assertion tolerant of the surrounding tags.
 * @evidence contracts/testing.md#distinguishing-cases One documented operation is the positive case. Operations without a description, parameter tags and plugin extensions are covered by other cases or not covered, and exact comment layout is not asserted here.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. The example is read from disk and migrated in process with no native build, installation or host.
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
