import { TestValidator } from "@nestia/e2e";
import {
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  OpenApi,
} from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification HttpMigration.application runs on a component map with an own toString schema and on one with an inherited-only schema; the resolved query object and own-membership predicates fail if inherited names are consulted.
 * @evidence contracts/testing.md#independent-expectations JavaScript own-property semantics decide the expectation: an inherited member is not part of the data, while an own reserved name is. The authored component maps are not derived from the migrator.
 * @evidence contracts/testing.md#distinguishing-cases The own reserved name is the positive case and the inherited same-shape component is the negative twin; other reserved names such as constructor and __proto__ are not covered.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. Migration runs in process on authored component maps with no native build, installation or host.
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

  TestEquality.equals(
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
  TestEquality.equals(
    "inherited component remains absent",
    Object.hasOwn(app.document().components.schemas!, "inherited"),
    false,
  );
};
