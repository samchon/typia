import {
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  OpenApi,
} from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { HttpMigration } from "@typia/utils";

/**
 * Verifies reserved words in a path become escaped accessor segments.
 *
 * Accessors become function and namespace names in generated SDKs, so segments
 * that are JavaScript reserved words must be escaped with a leading underscore
 * while the method name stays plain.
 *
 * 1. Migrate a document with the path /case/switch/do/while.
 * 2. Read the first route's accessor.
 * 3. Assert the segments are _case, _switch, _do, _while and get.
 *
 * @evidence contracts/testing.md#behavioral-verification HttpMigration.application migrates the authored document and the full accessor array is compared.
 * @evidence contracts/testing.md#independent-expectations case, switch, do and while are reserved by the ECMAScript grammar, so the escaped spelling is authored from the escaping rule and not from the migrator.
 * @evidence contracts/testing.md#distinguishing-cases A path made only of reserved words; non-reserved neighbors are covered by the identifier case.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. Migration runs in process on an authored document with no native producer.
 */
export const test_http_migrate_route_accessor_reserved = (): void => {
  const document: OpenApi.IDocument = {
    openapi: "3.2.0",
    "x-typia-emended-v12": true,
    paths: {
      "/case/switch/do/while": {
        get: {},
      },
    },
    components: {},
  };
  const app: IHttpMigrateApplication = HttpMigration.application(document);
  const route: IHttpMigrateRoute = app.routes[0]!;
  TestEquality.equals("accessor", route.accessor, [
    "_case",
    "_switch",
    "_do",
    "_while",
    "get",
  ]);
};
