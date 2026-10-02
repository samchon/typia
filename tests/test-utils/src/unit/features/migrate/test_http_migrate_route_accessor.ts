import {
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  OpenApi,
} from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { HttpMigration, OpenApiConverter } from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "../../../TestGlobal";

/**
 * Verifies a migrated route retains its explicitly declared accessor.
 *
 * SDK generators build namespaces and function names from route accessors, so a
 * regression in honoring an unambiguous custom accessor changes API names.
 *
 * 1. Upgrade the checked-in shopping example and migrate it.
 * 2. Find POST /shoppings/sellers/sales.
 * 3. Assert its accessor is shoppings.sellers.sales.create.
 *
 */
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
  TestEquality.equals(
    "accessor",
    route?.accessor.join("."),
    "shoppings.sellers.sales.create",
  );
};
