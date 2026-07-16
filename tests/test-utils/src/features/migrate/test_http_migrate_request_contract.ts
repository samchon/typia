import { TestValidator } from "@nestia/e2e";
import {
  IHttpLlmFunction,
  IHttpMigrateRoute,
  OpenApiV3_1,
} from "@typia/interface";
import { HttpLlm, HttpMigration } from "@typia/utils";

/**
 * Verifies migrated requests preserve location, optionality, and serialization.
 *
 * The route model previously dropped headers and cookies, required every query
 * and body group, and serialized every query array as repeated keys.
 *
 * 1. Compose required and optional header, cookie, query, and body inputs.
 * 2. Ignore reserved OpenAPI headers and check the LLM validation boundary.
 * 3. Capture request headers, cookies, body, and style/explode query output.
 */
export const test_http_migrate_request_contract = async (): Promise<void> => {
  const migration = HttpMigration.application(document);
  TestValidator.equals("composition errors", 0, migration.errors.length);
  const route: IHttpMigrateRoute = migration.routes[0]!;
  TestValidator.equals(
    "route groups",
    {
      headers: true,
      cookies: true,
      query: true,
      body: true,
    },
    {
      headers: route.headers !== null,
      cookies: route.cookies !== null,
      query: route.query !== null,
      body: route.body !== null,
    },
  );
  TestValidator.equals(
    "group requiredness",
    {
      headers: true,
      cookies: true,
      query: false,
      body: false,
    },
    {
      headers: route.headers!.required!,
      cookies: route.cookies!.required!,
      query: route.query!.required!,
      body: route.body!.required!,
    },
  );

  const application = HttpLlm.application({ document });
  TestValidator.equals("LLM errors", 0, application.errors.length);
  const func: IHttpLlmFunction = application.functions[0]!;
  TestValidator.equals(
    "LLM properties",
    ["userId", "header", "cookie", "query", "body"],
    Object.keys(func.parameters.properties ?? {}),
  );
  TestValidator.equals(
    "LLM required groups",
    ["userId", "header", "cookie"],
    func.parameters.required,
  );
  TestValidator.equals(
    "optional query and body validate",
    true,
    func.validate({
      userId: "samchon",
      header: { "X-Token": "request", trace: "abc" },
      cookie: { session: "token" },
    }).success,
  );

  let captured: { url: URL; init: RequestInit } | undefined;
  const connection = {
    host: "https://example.com/api/",
    headers: {
      "X-Token": "connection",
      Authorization: "Bearer connection",
      Cookie: "session=old; inherited=yes",
    },
    fetch: (async (input: string | URL | Request, init?: RequestInit) => {
      captured = { url: new URL(String(input)), init: init! };
      return new Response('{"ok":true}', {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }) as typeof fetch,
  };
  await HttpMigration.execute({
    connection,
    route,
    parameters: { userId: "samchon" },
    headers: { "X-Token": "request", trace: "abc" },
    cookies: { session: "new", theme: "dark" },
  });
  let sent = captured!;
  let headers = new Headers(sent.init.headers);
  TestValidator.equals("path", "/api/users/samchon", sent.url.pathname);
  TestValidator.equals("header override", "request", headers.get("x-token"));
  TestValidator.equals(
    "ignored parameter keeps connection authorization",
    "Bearer connection",
    headers.get("authorization"),
  );
  TestValidator.equals("object header", "trace,abc", headers.get("x-meta"));
  TestValidator.equals(
    "cookie merge and override",
    "inherited=yes; session=new; theme=dark",
    headers.get("cookie"),
  );
  TestValidator.equals("optional query omitted", "", sent.url.search);
  TestValidator.equals("optional body omitted", true, sent.init.body == null);
  TestValidator.equals(
    "optional body content type omitted",
    true,
    headers.get("content-type") === null,
  );

  await HttpMigration.execute({
    connection,
    route,
    parameters: { userId: "samchon" },
    headers: { "X-Token": "request", trace: "abc" },
    cookies: { session: "new", theme: "dark" },
    query: {
      ids: [1, 2],
      tags: ["a!", "b*"],
      points: [1, 2],
      colors: ["red~", "blue!"],
      "role!": "admin!",
      active: true,
    },
    body: { title: "hello" },
  });
  sent = captured!;
  headers = new Headers(sent.init.headers);
  TestValidator.equals(
    "form explode false",
    "1,2",
    sent.url.searchParams.get("ids"),
  );
  TestValidator.equals(
    "pipe delimited",
    "a!|b*",
    sent.url.searchParams.get("tags"),
  );
  TestValidator.equals(
    "space delimited",
    "1 2",
    sent.url.searchParams.get("points"),
  );
  TestValidator.equals(
    "form explode true",
    ["red~", "blue!"],
    sent.url.searchParams.getAll("colors"),
  );
  TestValidator.equals(
    "deep object role",
    "admin!",
    sent.url.searchParams.get("filter[role!]"),
  );
  TestValidator.equals(
    "deep object active",
    "true",
    sent.url.searchParams.get("filter[active]"),
  );
  TestValidator.equals(
    "exact query wire format",
    "?ids=1,2&tags=a%21%7Cb%2A&colors=red~&colors=blue%21&points=1%202&filter%5Brole%21%5D=admin%21&filter%5Bactive%5D=true",
    sent.url.search,
  );
  TestValidator.equals(
    "content type wins",
    "application/json",
    headers.get("content-type"),
  );
  TestValidator.equals(
    "JSON body",
    '{"title":"hello"}',
    String(sent.init.body),
  );

  let requiredError = false;
  try {
    await HttpMigration.execute({
      connection,
      route,
      parameters: { userId: "samchon" },
    });
  } catch {
    requiredError = true;
  }
  TestValidator.equals("required groups rejected", true, requiredError);

  const matrix = migration.routes.find(
    (candidate) => candidate.path === "/matrix/{coords}",
  )!;
  await HttpMigration.execute({
    connection,
    route: matrix,
    parameters: [["a!", "b*"]],
  });
  TestValidator.equals(
    "matrix path",
    "/api/matrix/;coords=a%21;coords=b%2A",
    captured!.url.pathname,
  );
  const label = migration.routes.find(
    (candidate) => candidate.path === "/label/{coords}",
  )!;
  await HttpMigration.execute({
    connection,
    route: label,
    parameters: [{ "x!": "a!", "y*": "b*" }],
  });
  TestValidator.equals(
    "label path",
    "/api/label/.x%21=a%21.y%2A=b%2A",
    captured!.url.pathname,
  );
};

const document: OpenApiV3_1.IDocument = {
  openapi: "3.1.0",
  info: { title: "HTTP request contract", version: "1.0.0" },
  components: { schemas: {} },
  paths: {
    "/users/{userId}": {
      post: {
        parameters: [
          {
            name: "userId",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "ACCEPT",
            in: "header",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "content-type",
            in: "header",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "authorization",
            in: "header",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "X-Token",
            in: "header",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "X-Meta",
            in: "header",
            style: "simple",
            explode: false,
            schema: {
              type: "object",
              properties: { trace: { type: "string" } },
              required: ["trace"],
            },
          },
          {
            name: "session",
            in: "cookie",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "preferences",
            in: "cookie",
            style: "form",
            explode: true,
            schema: {
              type: "object",
              properties: { theme: { type: "string" } },
            },
          },
          {
            name: "ids",
            in: "query",
            style: "form",
            explode: false,
            schema: { type: "array", items: { type: "integer" } },
          },
          {
            name: "tags",
            in: "query",
            style: "pipeDelimited",
            explode: false,
            schema: { type: "array", items: { type: "string" } },
          },
          {
            name: "colors",
            in: "query",
            style: "form",
            explode: true,
            schema: { type: "array", items: { type: "string" } },
          },
          {
            name: "points",
            in: "query",
            style: "spaceDelimited",
            explode: false,
            schema: { type: "array", items: { type: "integer" } },
          },
          {
            name: "filter",
            in: "query",
            style: "deepObject",
            explode: true,
            schema: {
              type: "object",
              properties: {
                "role!": { type: "string" },
                active: { type: "boolean" },
              },
            },
          },
        ],
        requestBody: {
          required: false,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: { title: { type: "string" } },
                required: ["title"],
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
                  properties: { ok: { type: "boolean" } },
                  required: ["ok"],
                },
              },
            },
          },
        },
      },
    },
    "/matrix/{coords}": {
      get: {
        parameters: [
          {
            name: "coords",
            in: "path",
            required: true,
            style: "matrix",
            explode: true,
            schema: { type: "array", items: { type: "string" } },
          },
        ],
        responses: { "200": { description: "OK" } },
      },
    },
    "/label/{coords}": {
      get: {
        parameters: [
          {
            name: "coords",
            in: "path",
            required: true,
            style: "label",
            explode: true,
            schema: {
              type: "object",
              properties: {
                "x!": { type: "string" },
                "y*": { type: "string" },
              },
              required: ["x!", "y*"],
            },
          },
        ],
        responses: { "200": { description: "OK" } },
      },
    },
  },
};
