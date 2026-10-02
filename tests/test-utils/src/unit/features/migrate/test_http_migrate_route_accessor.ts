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
 * @evidence contracts/testing.md#behavioral-verification HttpMigration.application migrates the shopping example and compares one route's accessor, exercising preservation of its unambiguous x-samchon-accessor extension.
 * @evidence contracts/testing.md#independent-expectations The expected literal matches the checked-in operation's authored x-samchon-accessor array; the default method alias would be post, so create is not derived from the migrator's default naming rule.
 * @evidence contracts/testing.md#distinguishing-cases One explicit collection-POST accessor is the positive case; default derivation, parameterized paths, reserved words and collisions are covered by separate cases.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. The example is read from disk and migrated in process with no native build, installation or host.
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
