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
 * object schemas, while inline body schemas are stored as referenced
 * components. Optional-only schemas must not reintroduce `required: []` into
 * the migrated OpenAPI document.
 *
 * 1. Compose a route with optional query, request body, and response body objects.
 * 2. Resolve the synthesized query and body component schemas.
 * 3. Assert every component keeps its object shape and omits empty `required`.
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
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    title: {
                      type: "string",
                    },
                  },
                  required: [],
                },
              },
            },
          },
          responses: {
            "200": {
              description: "OK",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      value: {
                        type: "string",
                      },
                    },
                    required: [],
                  },
                },
              },
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
  assertObjectNoRequired(
    "request body",
    resolve(app, route.body!.schema),
    "title",
  );
  assertObjectNoRequired(
    "response body",
    resolve(app, route.success!.schema),
    "value",
  );
};

const resolve = (
  app: IHttpMigrateApplication,
  schema: OpenApi.IJsonSchema,
): OpenApi.IJsonSchema.IObject => {
  const ref = schema as OpenApi.IJsonSchema.IReference;
  const key = ref.$ref.split("/").at(-1)!;
  return app.document().components.schemas![key] as OpenApi.IJsonSchema.IObject;
};

const assertObjectNoRequired = (
  name: string,
  schema: OpenApi.IJsonSchema.IObject,
  property: string,
): void => {
  TestValidator.equals(
    `${name} object`,
    {
      type: schema.type,
      properties: Object.keys(schema.properties ?? {}),
    },
    {
      type: "object",
      properties: [property],
    },
  );
  TestValidator.equals(
    `${name} required omitted`,
    Object.prototype.hasOwnProperty.call(schema, "required"),
    false,
  );
};
