import { TestValidator } from "@nestia/e2e";
import {
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  OpenApi,
} from "@typia/interface";
import { HttpMigration } from "@typia/utils";

/**
 * Verifies HttpMigration omits empty synthesized `required` arrays.
 *
 * Query and header primitive parameters are gathered into synthesized component
 * object schemas. Optional-only parameter sets must not reintroduce `required:
 * []` into the migrated OpenAPI document.
 *
 * 1. Compose a route with one optional primitive query parameter.
 * 2. Resolve the synthesized query component schema.
 * 3. Assert the component omits the empty `required` keyword.
 */
export const test_http_migrate_empty_required = (): void => {
  const document: OpenApi.IDocument = {
    openapi: "3.2.0",
    "x-typia-emended-v12": true,
    info: { title: "test", version: "1.0.0" },
    components: {},
    paths: {
      "/items": {
        get: {
          parameters: [
            {
              name: "keyword",
              in: "query",
              required: false,
              schema: { type: "string" },
            },
          ],
          responses: {
            "200": {
              description: "OK",
            },
          },
        },
      },
    },
  };

  const app: IHttpMigrateApplication = HttpMigration.application(document);
  const route: IHttpMigrateRoute = app.routes[0]!;
  const ref = route.query!.schema as OpenApi.IJsonSchema.IReference;
  const key = ref.$ref.split("/").at(-1)!;
  const schema = app.document().components.schemas![
    key
  ] as OpenApi.IJsonSchema.IObject;

  TestValidator.equals("query properties", Object.keys(schema.properties!), [
    "keyword",
  ]);
  TestValidator.equals(
    "query required omitted",
    Object.prototype.hasOwnProperty.call(schema, "required"),
    false,
  );
};
