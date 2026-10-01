import {
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  OpenApi,
} from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { HttpMigration } from "@typia/utils";

/**
 * Verifies a JSON response without a schema yields a null route success.
 *
 * Empty JSON content carries no type information. Treating it as a schema would
 * make generators invent a return type.
 *
 * 1. Declare a GET operation whose 200 response has an empty application/json
 *    content object.
 * 2. Migrate the document.
 * 3. Assert the route's success is null.
 *
 * @evidence contracts/testing.md#behavioral-verification HttpMigration.application migrates the authored document and the route's success is compared with null; synthesizing a schema or undefined fails.
 * @evidence contracts/testing.md#independent-expectations The input is authored and null is the route model's documented value for an untyped response, not a snapshot of the migrator.
 * @evidence contracts/testing.md#distinguishing-cases The empty-content response is the only case; a typed response and a response without content are not asserted by this case.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. Migration runs in process on an authored document with no native build, installation or host.
 */
export const test_http_migrate_route_success_null = (): void => {
  const document: OpenApi.IDocument = {
    openapi: "3.2.0",
    components: {},
    paths: {
      "/nothing": {
        get: {
          responses: {
            "200": {
              description: "something",
              content: {
                "application/json": {},
              },
            },
          },
        },
      },
    },
    "x-typia-emended-v12": true,
  };
  const app: IHttpMigrateApplication = HttpMigration.application(document);
  const route: IHttpMigrateRoute = app.routes[0]!;
  TestEquality.equals("success", route.success, null);
};
