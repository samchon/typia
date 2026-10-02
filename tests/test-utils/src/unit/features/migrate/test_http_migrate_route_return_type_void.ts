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
 * Verifies an operation whose JSON response declares no schema migrates with a
 * null success.
 *
 * A response with application/json content but no schema means the call returns
 * nothing typed. The route must still exist and must report no success schema
 * so generators emit a void return type.
 *
 * 1. Upgrade the checked-in swagger fixture and migrate it.
 * 2. Find GET /nothing, whose 200 response has empty JSON content.
 * 3. Assert the route exists and its success is null.
 *
 * @evidence contracts/testing.md#behavioral-verification HttpMigration.application migrates the fixture and the route's presence and success value are compared, so a dropped route or an invented success schema fails.
 * @evidence contracts/testing.md#independent-expectations The fixture authors the empty content object and the expected null success follows from the route model's definition of an untyped response; it is not an output snapshot.
 * @evidence contracts/testing.md#distinguishing-cases The empty-content response is the owned boundary; routes with typed successes are asserted by other cases. The authored success-null case covers the same decision on a hand-built document.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. The fixture is read from disk and migrated in process with no native build, installation or host.
 */
export const test_http_migrate_route_return_type_void =
  async (): Promise<void> => {
    const document: OpenApi.IDocument = OpenApiConverter.upgradeDocument(
      JSON.parse(
        await fs.promises.readFile(`${TestGlobal.ROOT}/swagger.json`, "utf8"),
      ),
    );
    const app: IHttpMigrateApplication = HttpMigration.application(document);
    const route: IHttpMigrateRoute | undefined = app.routes.find(
      (r) => r.path === "/nothing" && r.method === "get",
    );
    TestEquality.equals("exists", !!route, true);
    TestEquality.equals("success", route?.success, null);
  };
