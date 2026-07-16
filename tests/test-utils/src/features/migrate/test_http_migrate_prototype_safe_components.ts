import { TestValidator } from "@nestia/e2e";
import {
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  OpenApi,
} from "@typia/interface";
import { HttpMigration } from "@typia/utils";

/**
 * Verifies HTTP migration resolves only own component schemas.
 *
 * Component maps can arrive from programmatic callers rather than JSON, so an
 * inherited schema name must never be treated as a route parameter object.
 * Reserved own names remain valid schema data.
 *
 * 1. Resolve an own `toString` query-object component.
 * 2. Ignore an inherited-only component with the same object shape.
 * 3. Require route composition to preserve own component membership.
 */
export const test_http_migrate_prototype_safe_components = (): void => {
  const schemas = Object.assign(
    Object.create({
      inherited: {
        type: "object",
        properties: { polluted: { type: "string" } },
      },
    }),
    Object.fromEntries([
      [
        "toString",
        {
          type: "object",
          properties: { keyword: { type: "string" } },
        },
      ],
    ]),
  ) as Record<string, OpenApi.IJsonSchema>;
  const document: OpenApi.IDocument = {
    openapi: "3.2.0",
    "x-typia-emended-v12": true,
    components: { schemas },
    paths: {
      "/own": {
        get: {
          parameters: [
            {
              name: "query",
              in: "query",
              schema: { $ref: "#/components/schemas/toString" },
            },
          ],
        },
      },
      "/inherited": {
        get: {
          parameters: [
            {
              name: "query",
              in: "query",
              schema: { $ref: "#/components/schemas/inherited" },
            },
          ],
        },
      },
    },
  };
  const app: IHttpMigrateApplication = HttpMigration.application(document);
  const own: IHttpMigrateRoute = app.routes.find(
    (route) => route.path === "/own",
  )!;
  const inherited: IHttpMigrateRoute = app.routes.find(
    (route) => route.path === "/inherited",
  )!;

  TestValidator.equals(
    "own reserved component resolves",
    (own.query!.schema as OpenApi.IJsonSchema.IReference).$ref,
    "#/components/schemas/toString",
  );
  TestValidator.predicate(
    "inherited component is not resolved",
    () =>
      (inherited.query!.schema as OpenApi.IJsonSchema.IReference).$ref !==
      "#/components/schemas/inherited",
  );
  TestValidator.predicate("reserved component remains own", () =>
    Object.hasOwn(app.document().components.schemas!, "toString"),
  );
  TestValidator.equals(
    "inherited component remains absent",
    Object.hasOwn(app.document().components.schemas!, "inherited"),
    false,
  );
};
