import {
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  OpenApi,
} from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
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
