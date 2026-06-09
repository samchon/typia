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
            nested: {
              type: "object",
              properties: {
                label: {
                  type: "string",
                },
              },
              required: [],
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
            nested: {
              type: "object",
              properties: {
                label: {
                  type: "string",
                },
              },
              required: [],
            },
          },
          required: [],
        },
        ReferencedBody: {
          type: "object",
          properties: {
            title: {
              type: "string",
            },
            nested: {
              type: "object",
              properties: {
                label: {
                  type: "string",
                },
              },
              required: [],
            },
            variants: {
              oneOf: [
                {
                  type: "object",
                  properties: {
                    kind: {
                      type: "string",
                    },
                  },
                  required: [],
                },
                {
                  type: "string",
                },
              ],
              required: [],
            } as OpenApi.IJsonSchema,
            list: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  item: {
                    type: "string",
                  },
                },
                required: [],
              },
            },
            map: {
              type: "object",
              additionalProperties: {
                type: "object",
                properties: {
                  value: {
                    type: "string",
                  },
                },
                required: [],
              },
              required: [],
            },
            nestedRef: {
              $ref: "#/components/schemas/NestedBodyReference",
            },
          },
          required: [],
        },
        ReferencedResponse: {
          type: "object",
          properties: {
            value: {
              type: "string",
            },
            nested: {
              type: "object",
              properties: {
                label: {
                  type: "string",
                },
              },
              required: [],
            },
            variants: {
              oneOf: [
                {
                  type: "object",
                  properties: {
                    kind: {
                      type: "string",
                    },
                  },
                  required: [],
                },
                {
                  type: "string",
                },
              ],
              required: [],
            } as OpenApi.IJsonSchema,
            list: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  item: {
                    type: "string",
                  },
                },
                required: [],
              },
            },
            map: {
              type: "object",
              additionalProperties: {
                type: "object",
                properties: {
                  value: {
                    type: "string",
                  },
                },
                required: [],
              },
              required: [],
            },
            nestedRef: {
              $ref: "#/components/schemas/NestedResponseReference",
            },
          },
          required: [],
        },
        ReferencedException: {
          type: "object",
          properties: {
            error: {
              type: "string",
            },
            nestedRef: {
              $ref: "#/components/schemas/NestedExceptionReference",
            },
          },
          required: [],
        },
        NestedBodyReference: {
          type: "object",
          properties: {
            note: {
              type: "string",
            },
          },
          required: [],
        },
        NestedResponseReference: {
          type: "object",
          properties: {
            note: {
              type: "string",
            },
          },
          required: [],
        },
        NestedExceptionReference: {
          type: "object",
          properties: {
            note: {
              type: "string",
            },
          },
          required: [],
        },
        RequiredBody: {
          type: "object",
          properties: {
            title: {
              type: "string",
            },
          },
          required: ["title"],
        },
        RequiredResponse: {
          type: "object",
          properties: {
            value: {
              type: "string",
            },
          },
          required: ["value"],
        },
        RequiredException: {
          type: "object",
          properties: {
            error: {
              type: "string",
            },
          },
          required: ["error"],
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
      "/querystring": {
        get: {
          parameters: [
            {
              name: "query",
              in: "querystring",
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
      "/required-query": {
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
                required: ["search"],
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
      "/required-headers": {
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
                required: ["token"],
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
      "/ref-body-response": {
        post: {
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ReferencedBody",
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
                    $ref: "#/components/schemas/ReferencedResponse",
                  },
                },
              },
            },
          },
        },
      },
      "/required-body-response": {
        post: {
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/RequiredBody",
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
                    $ref: "#/components/schemas/RequiredResponse",
                  },
                },
              },
            },
          },
        },
      },
      "/form-urlencoded": {
        post: {
          requestBody: {
            content: {
              "application/x-www-form-urlencoded": {
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
            },
          },
        },
      },
      "/multipart": {
        post: {
          requestBody: {
            content: {
              "multipart/form-data": {
                schema: {
                  type: "object",
                  properties: {
                    file: {
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
            },
          },
        },
      },
      "/exception-inline": {
        get: {
          responses: {
            "200": {
              description: "OK",
            },
            "400": {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      error: {
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
      "/exception-ref": {
        get: {
          responses: {
            "200": {
              description: "OK",
            },
            "400": {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/ReferencedException",
                  },
                },
              },
            },
          },
        },
      },
      "/exception-required": {
        get: {
          responses: {
            "200": {
              description: "OK",
            },
            "400": {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/RequiredException",
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
  assertObjectNoRequired(
    "querystring",
    resolveSchema(app, findRoute(app, "/querystring").query!.schema),
    "search",
  );
  assertObjectRequired(
    "required query",
    resolveSchema(app, findRoute(app, "/required-query").query!.schema),
    "search",
  );
  assertObjectRequired(
    "required headers",
    resolveSchema(app, findRoute(app, "/required-headers").headers!.schema),
    "token",
  );
  assertObjectNoRequired(
    "referenced body",
    resolveSchema(app, findRoute(app, "/ref-body-response").body!.schema),
    "title",
  );
  assertObjectNoRequired(
    "referenced response",
    resolveSchema(app, findRoute(app, "/ref-body-response").success!.schema),
    "value",
  );
  assertObjectRequired(
    "required body",
    resolveSchema(app, findRoute(app, "/required-body-response").body!.schema),
    "title",
  );
  assertObjectRequired(
    "required response",
    resolveSchema(
      app,
      findRoute(app, "/required-body-response").success!.schema,
    ),
    "value",
  );
  assertObjectNoRequired(
    "form-urlencoded body",
    resolveSchema(app, findRoute(app, "/form-urlencoded").body!.schema),
    "title",
  );
  assertObjectNoRequired(
    "multipart body",
    resolveSchema(app, findRoute(app, "/multipart").body!.schema),
    "file",
  );
  assertObjectNoRequired(
    "inline exception",
    resolveSchema(
      app,
      findRoute(app, "/exception-inline").exceptions["400"]!.schema,
    ),
    "error",
  );
  const referencedException = resolveSchema(
    app,
    findRoute(app, "/exception-ref").exceptions["400"]!.schema,
  );
  assertObjectNoRequired("referenced exception", referencedException, "error");
  assertObjectNoRequired(
    "nested referenced body",
    resolveSchema(
      app,
      resolveSchema(app, findRoute(app, "/ref-body-response").body!.schema)
        .properties!.nestedRef!,
    ),
    "note",
  );
  assertObjectNoRequired(
    "nested referenced response",
    resolveSchema(
      app,
      resolveSchema(app, findRoute(app, "/ref-body-response").success!.schema)
        .properties!.nestedRef!,
    ),
    "note",
  );
  assertObjectNoRequired(
    "nested referenced exception",
    resolveSchema(app, referencedException.properties!.nestedRef!),
    "note",
  );
  assertObjectRequired(
    "required exception",
    resolveSchema(
      app,
      findRoute(app, "/exception-required").exceptions["400"]!.schema,
    ),
    "error",
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
  TestValidator.equals(`${name} object type`, schema.type, "object");
  TestValidator.equals(
    `${name} property preserved`,
    Object.prototype.hasOwnProperty.call(schema.properties ?? {}, property),
    true,
  );
  TestValidator.equals(
    `${name} required omitted`,
    Object.prototype.hasOwnProperty.call(schema, "required"),
    false,
  );
  const nested: OpenApi.IJsonSchema.IObject | undefined = schema.properties?.[
    "nested"
  ] as OpenApi.IJsonSchema.IObject | undefined;
  if (nested !== undefined)
    TestValidator.equals(
      `${name} nested required omitted`,
      Object.prototype.hasOwnProperty.call(nested, "required"),
      false,
    );
  assertNoEmptyRequired(name, schema);
};

const assertObjectRequired = (
  name: string,
  schema: OpenApi.IJsonSchema.IObject,
  property: string,
): void => {
  TestValidator.equals(`${name} object type`, schema.type, "object");
  TestValidator.equals(
    `${name} property preserved`,
    Object.prototype.hasOwnProperty.call(schema.properties ?? {}, property),
    true,
  );
  TestValidator.equals(`${name} required preserved`, schema.required, [
    property,
  ]);
};

const assertNoEmptyRequired = (
  name: string,
  schema: OpenApi.IJsonSchema,
): void => {
  if ("required" in schema)
    TestValidator.equals(
      `${name} empty required omitted`,
      schema.required?.length === 0,
      false,
    );
  if ("properties" in schema && schema.properties !== undefined)
    Object.entries(schema.properties).forEach(([key, value]) =>
      assertNoEmptyRequired(`${name}.${key}`, value),
    );
  if ("items" in schema) assertNoEmptyRequired(`${name}.items`, schema.items);
  if ("prefixItems" in schema)
    schema.prefixItems.forEach((value, index) =>
      assertNoEmptyRequired(`${name}.prefixItems.${index}`, value),
    );
  if ("oneOf" in schema)
    schema.oneOf.forEach((value, index) =>
      assertNoEmptyRequired(`${name}.oneOf.${index}`, value),
    );
  if (
    "additionalProperties" in schema &&
    typeof schema.additionalProperties === "object" &&
    schema.additionalProperties !== null
  )
    assertNoEmptyRequired(
      `${name}.additionalProperties`,
      schema.additionalProperties,
    );
};
