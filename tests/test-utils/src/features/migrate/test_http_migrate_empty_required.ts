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
 * Query and header parameters are gathered into route schemas, while inline
 * body schemas are stored as referenced components. Optional-only schemas must
 * not reintroduce `required: []` into the migrated OpenAPI document, including
 * the single object-parameter fast path.
 *
 * 1. Compose routes with primitive query parameters, inline/ref object
 *    query/header parameters, request bodies, and response bodies.
 * 2. Resolve synthesized and referenced route schemas.
 * 3. Assert every object keeps its shape and omits empty `required`.
 */
export const test_http_migrate_empty_required = (): void => {
  const document: OpenApi.IDocument = {
    openapi: "3.2.0",
    "x-typia-emended-v12": true,
    info: { title: "test", version: "1.0.0" },
    components: {
      schemas: {
        ReferencedHeaders: {
          type: "object",
          properties: {
            token: {
              type: "string",
            },
          },
          required: [],
        },
        ReferencedQuery: {
          type: "object",
          properties: {
            search: {
              type: "string",
            },
          },
          required: [],
        },
      },
    },
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
      "/inline-query": {
        get: {
          parameters: [
            {
              name: "query",
              in: "query",
              schema: {
                type: "object",
                properties: {
                  search: {
                    type: "string",
                  },
                },
                required: [],
              },
            },
          ],
          responses: {
            "200": {
              description: "OK",
            },
          },
        },
      },
      "/ref-query": {
        get: {
          parameters: [
            {
              name: "query",
              in: "query",
              schema: {
                $ref: "#/components/schemas/ReferencedQuery",
              },
            },
          ],
          responses: {
            "200": {
              description: "OK",
            },
          },
        },
      },
      "/inline-headers": {
        get: {
          parameters: [
            {
              name: "headers",
              in: "header",
              schema: {
                type: "object",
                properties: {
                  token: {
                    type: "string",
                  },
                },
                required: [],
              },
            },
          ],
          responses: {
            "200": {
              description: "OK",
            },
          },
        },
      },
      "/ref-headers": {
        get: {
          parameters: [
            {
              name: "headers",
              in: "header",
              schema: {
                $ref: "#/components/schemas/ReferencedHeaders",
              },
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
  const route: IHttpMigrateRoute = findRoute(app, "/items");
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
  assertObjectNoRequired(
    "inline query",
    resolveSchema(app, findRoute(app, "/inline-query").query!.schema),
    "search",
  );
  assertObjectNoRequired(
    "referenced query",
    resolveSchema(app, findRoute(app, "/ref-query").query!.schema),
    "search",
  );
  assertObjectNoRequired(
    "inline headers",
    resolveSchema(app, findRoute(app, "/inline-headers").headers!.schema),
    "token",
  );
  assertObjectNoRequired(
    "referenced headers",
    resolveSchema(app, findRoute(app, "/ref-headers").headers!.schema),
    "token",
  );
};

const findRoute = (
  app: IHttpMigrateApplication,
  path: string,
): IHttpMigrateRoute => app.routes.find((route) => route.path === path)!;

const resolve = (
  app: IHttpMigrateApplication,
  schema: OpenApi.IJsonSchema,
): OpenApi.IJsonSchema.IObject => {
  const ref = schema as OpenApi.IJsonSchema.IReference;
  const key = ref.$ref.split("/").at(-1)!;
  return app.document().components.schemas![key] as OpenApi.IJsonSchema.IObject;
};

const resolveSchema = (
  app: IHttpMigrateApplication,
  schema: OpenApi.IJsonSchema,
): OpenApi.IJsonSchema.IObject =>
  "$ref" in schema
    ? resolve(app, schema)
    : (schema as OpenApi.IJsonSchema.IObject);

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
