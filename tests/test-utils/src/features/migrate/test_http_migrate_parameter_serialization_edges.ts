import { TestValidator } from "@nestia/e2e";
import {
  IHttpLlmFunction,
  IHttpMigrateRoute,
  OpenApiV3_1,
} from "@typia/interface";
import { HttpLlm, HttpMigration, LlmJson } from "@typia/utils";

/**
 * Verifies parameter schemas and style metadata survive edge-case migration.
 *
 * Referenced arrays disappeared from LLM schemas, delimited object styles were
 * rejected, open object entries were dropped, and optional object members were
 * promoted to unconditional group requirements.
 *
 * 1. Compose referenced arrays, delimited/open objects, and optional objects.
 * 2. Exercise direct serialization and the corresponding LLM validators.
 * 3. Reject undefined explode combinations with deterministic diagnostics.
 */
export const test_http_migrate_parameter_serialization_edges =
  async (): Promise<void> => {
    const migration = HttpMigration.application(document);
    TestValidator.equals("valid routes", 5, migration.routes.length);
    TestValidator.equals("invalid style routes", 2, migration.errors.length);
    TestValidator.equals(
      "invalid style diagnostics",
      [
        'query parameter "bad" requires explode: false for spaceDelimited style',
        'query parameter "bad" requires explode: true for deepObject style',
      ],
      migration.errors.flatMap((error) => error.messages),
    );

    let captured: URL | undefined;
    const connection = {
      host: "https://example.com",
      fetch: (async (input: string | URL | Request) => {
        captured = new URL(String(input));
        return new Response(null, { status: 204 });
      }) as typeof fetch,
    };
    await HttpMigration.execute({
      connection,
      route: findRoute(migration.routes, "/delimited"),
      parameters: [],
      query: { a: "x", b: "y", tags: ["red", "green"] },
    });
    TestValidator.equals(
      "space-delimited object",
      "a x b y",
      captured!.searchParams.get("space"),
    );
    TestValidator.equals(
      "referenced pipe-delimited array",
      "red|green",
      captured!.searchParams.get("tags"),
    );

    await HttpMigration.execute({
      connection,
      route: findRoute(migration.routes, "/open"),
      parameters: [],
      query: { arbitrary: "preserved", count: 2 },
    });
    TestValidator.equals(
      "open object property",
      "preserved",
      captured!.searchParams.get("arbitrary"),
    );
    TestValidator.equals(
      "primitive beside open object",
      "2",
      captured!.searchParams.get("count"),
    );

    await HttpMigration.execute({
      connection,
      route: findRoute(migration.routes, "/required-empty"),
      parameters: [],
      query: {},
    });
    TestValidator.equals("required empty object", "", captured!.search);
    let requiredMemberError = false;
    try {
      await HttpMigration.execute({
        connection,
        route: findRoute(migration.routes, "/required-member"),
        parameters: [],
        query: {},
      });
    } catch {
      requiredMemberError = true;
    }
    TestValidator.equals(
      "required object member remains required",
      true,
      requiredMemberError,
    );

    const llm = HttpLlm.application({ document });
    TestValidator.equals("LLM errors", 2, llm.errors.length);
    const delimited = findFunction(llm.functions, "/delimited");
    TestValidator.equals(
      "referenced array advertised",
      true,
      delimited.validate({ query: { tags: ["red"] } }).success,
    );
    const optional = findFunction(llm.functions, "/optional");
    TestValidator.equals(
      "optional object omitted",
      true,
      optional.validate({ query: { limit: 1 } }).success,
    );
    TestValidator.equals(
      "optional object partial input rejected",
      false,
      optional.validate({ query: { limit: 1, other: "x" } }).success,
    );
    TestValidator.equals(
      "adapter-style optional object partial input rejected",
      false,
      LlmJson.validateArguments(optional, {
        query: { limit: "1", other: "x" },
      }).success,
    );
    TestValidator.equals(
      "optional object complete input accepted",
      true,
      optional.validate({
        query: { limit: 1, nested: "x", other: "y" },
      }).success,
    );
  };

const findRoute = (
  routes: IHttpMigrateRoute[],
  path: string,
): IHttpMigrateRoute => routes.find((route) => route.path === path)!;

const findFunction = (
  functions: IHttpLlmFunction[],
  path: string,
): IHttpLlmFunction => functions.find((func) => func.path === path)!;

const document: OpenApiV3_1.IDocument = {
  openapi: "3.1.0",
  info: { title: "HTTP parameter edges", version: "1.0.0" },
  components: {
    schemas: {
      Tags: { type: "array", items: { type: "string" } },
    },
  },
  paths: {
    "/delimited": {
      get: {
        parameters: [
          {
            name: "space",
            in: "query",
            style: "spaceDelimited",
            explode: false,
            schema: {
              type: "object",
              properties: { a: { type: "string" }, b: { type: "string" } },
            },
          },
          {
            name: "tags",
            in: "query",
            style: "pipeDelimited",
            explode: false,
            schema: { $ref: "#/components/schemas/Tags" },
          },
        ],
        responses: { "204": { description: "No Content" } },
      },
    },
    "/open": {
      get: {
        parameters: [
          {
            name: "filter",
            in: "query",
            style: "form",
            explode: true,
            schema: {
              type: "object",
              additionalProperties: { type: "string" },
            },
          },
          {
            name: "count",
            in: "query",
            schema: { type: "integer" },
          },
        ],
        responses: { "204": { description: "No Content" } },
      },
    },
    "/optional": {
      get: {
        parameters: [
          {
            name: "dto",
            in: "query",
            required: false,
            schema: {
              type: "object",
              properties: {
                nested: { type: "string" },
                other: { type: "string" },
              },
              required: ["nested"],
            },
          },
          {
            name: "limit",
            in: "query",
            required: true,
            schema: { type: "integer" },
          },
        ],
        responses: { "204": { description: "No Content" } },
      },
    },
    "/required-empty": {
      get: {
        parameters: [
          {
            name: "filter",
            in: "query",
            required: true,
            style: "deepObject",
            explode: true,
            schema: {
              type: "object",
              properties: { term: { type: "string" } },
            },
          },
        ],
        responses: { "204": { description: "No Content" } },
      },
    },
    "/required-member": {
      get: {
        parameters: [
          {
            name: "filter",
            in: "query",
            required: true,
            style: "deepObject",
            explode: true,
            schema: {
              type: "object",
              properties: { term: { type: "string" } },
              required: ["term"],
            },
          },
        ],
        responses: { "204": { description: "No Content" } },
      },
    },
    "/invalid-space": {
      get: {
        parameters: [
          {
            name: "bad",
            in: "query",
            style: "spaceDelimited",
            explode: true,
            schema: { type: "array", items: { type: "string" } },
          },
        ],
        responses: { "204": { description: "No Content" } },
      },
    },
    "/invalid-deep": {
      get: {
        parameters: [
          {
            name: "bad",
            in: "query",
            style: "deepObject",
            schema: {
              type: "object",
              properties: { value: { type: "string" } },
            },
          },
        ],
        responses: { "204": { description: "No Content" } },
      },
    },
  },
};
