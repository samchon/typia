import {
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  OpenApi,
} from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { HttpMigration, OpenApiConverter } from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "../../../TestGlobal";

/**
 * Verifies a migrated route derives its accessor from the path and HTTP method.
 *
 * SDK generators build namespaces and function names from route accessors, so a
 * regression in segment derivation changes every generated API name.
 *
 * 1. Upgrade the checked-in shopping example and migrate it.
 * 2. Find POST /shoppings/sellers/sales.
 * 3. Assert its accessor is shoppings.sellers.sales.create.
 *
 * @evidence contracts/testing.md#behavioral-verification HttpMigration.application migrates the shopping example and the accessor of one route is compared; a changed path-to-segment or method-to-verb mapping changes the joined string.
 * @evidence contracts/testing.md#independent-expectations The expected accessor is an authored literal that follows the documented naming convention, with the POST on a collection naming create; it is not computed by the migrator.
 * @evidence contracts/testing.md#distinguishing-cases One collection POST is the positive case; parameterized paths, other methods, reserved words and collisions are covered by separate cases.
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
