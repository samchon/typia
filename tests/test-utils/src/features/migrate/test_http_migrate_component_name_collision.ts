import { IHttpMigrateApplication, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { HttpMigration } from "@typia/utils";

/**
 * Verifies emplaced route schemas never overwrite one another.
 *
 * Inline object bodies, responses, queries, and headers are stored as
 * components named from the route's path and method, and the name folds
 * `{param}` segments, separators, and letter case. `GET /users` and `GET
 * /users/{id}` both derived `IApiUsers.GetResponse`, and the second write
 * replaced the first, so the list route declared the detail route's schema; a
 * component the document already owned was replaced the same way (#2451). The
 * oracle is the input document: each route must keep its own schema.
 *
 * 1. Migrate colliding response, query, and body pairs, and a route whose name an
 *    input component already owns.
 * 2. Assert every route resolves to its own schema and the input component is
 *    unchanged.
 * 3. Assert the allocation is deterministic and a collision-free route keeps
 *    today's name.
 */
export const test_http_migrate_component_name_collision = (): void => {
  const object = (key: string): OpenApi.IJsonSchema.IObject => ({
    type: "object",
    properties: { [key]: { type: "string" } },
    required: [key],
  });
  const json = (schema: OpenApi.IJsonSchema) => ({
    content: { "application/json": { schema } },
  });
  const id: OpenApi.IOperation.IParameter = {
    name: "id",
    in: "path",
    required: true,
    schema: { type: "string" },
  };
  const document: OpenApi.IDocument = {
    openapi: "3.2.0",
    "x-typia-emended-v12": true,
    components: {
      schemas: { "IApiOrders.PostBody": object("mine") },
    },
    paths: {
      "/users": {
        get: {
          parameters: [
            { name: "page", in: "query", schema: { type: "integer" } },
          ],
          responses: { 200: { description: "ok", ...json(object("page")) } },
        },
      },
      "/users/{id}": {
        get: {
          parameters: [
            id,
            { name: "fields", in: "query", schema: { type: "string" } },
          ],
          responses: { 200: { description: "ok", ...json(object("name")) } },
        },
      },
      "/a.b": { post: { requestBody: json(object("dot")) } },
      "/a-b": { post: { requestBody: json(object("dash")) } },
      "/orders": { post: { requestBody: json(object("item")) } },
      "/mine": {
        post: {
          requestBody: json({
            $ref: "#/components/schemas/IApiOrders.PostBody",
          }),
        },
      },
    },
  };

  const resolve = (
    app: IHttpMigrateApplication,
    schema: OpenApi.IJsonSchema | undefined,
  ): OpenApi.IJsonSchema | undefined =>
    schema !== undefined && "$ref" in schema
      ? app.document().components.schemas?.[schema.$ref.split("/").pop()!]
      : schema;
  const own = (app: IHttpMigrateApplication) =>
    Object.fromEntries(
      app.routes.map((route) => [
        `${route.method} ${route.path}`,
        {
          success: Object.keys(
            (resolve(app, route.success?.schema) as any)?.properties ?? {},
          ),
          query: Object.keys(
            (resolve(app, route.query?.schema) as any)?.properties ?? {},
          ),
          body: Object.keys(
            (resolve(app, route.body?.schema) as any)?.properties ?? {},
          ),
        },
      ]),
    );

  const app: IHttpMigrateApplication = HttpMigration.application(document);
  TestEquality.equals("each route keeps its own schema", own(app), {
    "get /users": { success: ["page"], query: ["page"], body: [] },
    "get /users/{id}": { success: ["name"], query: ["fields"], body: [] },
    "post /a.b": { success: [], query: [], body: ["dot"] },
    "post /a-b": { success: [], query: [], body: ["dash"] },
    "post /orders": { success: [], query: [], body: ["item"] },
    "post /mine": { success: [], query: [], body: ["mine"] },
  });
  TestEquality.equals(
    "input component unchanged",
    app.document().components.schemas?.["IApiOrders.PostBody"],
    object("mine"),
  );

  // deterministic, and the first route keeps the plain name
  const again: IHttpMigrateApplication = HttpMigration.application(document);
  TestEquality.equals(
    "deterministic",
    Object.keys(again.document().components.schemas ?? {}),
    Object.keys(app.document().components.schemas ?? {}),
  );
  TestEquality.equals(
    "list keeps the plain name",
    app.routes.find((r) => r.path === "/users")?.success?.schema,
    { $ref: "#/components/schemas/IApiUsers.GetResponse" },
  );
};
