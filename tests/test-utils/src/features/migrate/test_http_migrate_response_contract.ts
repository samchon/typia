import { TestValidator } from "@nestia/e2e";
import { IHttpMigrateRoute, IHttpResponse, OpenApi } from "@typia/interface";
import { HttpError, HttpMigration } from "@typia/utils";

/**
 * Verifies migrated HTTP responses preserve the complete status and metadata
 * contract.
 *
 * The migration fetcher previously treated only 200 and 201 as successful,
 * widened structured failures into strings, split cookie attributes, and joined
 * base URLs with a duplicate slash.
 *
 * 1. Exercise success statuses, no-content responses, and all supported failure
 *    bodies.
 * 2. Read repeated Set-Cookie fields and structured HttpError JSON.
 * 3. Check every host/path slash boundary without rewriting the base path.
 */
export const test_http_migrate_response_contract = async (): Promise<void> => {
  const application = HttpMigration.application(document);
  const route: IHttpMigrateRoute = application.routes[0]!;
  TestValidator.equals("representative success", "202", route.success?.status);
  TestValidator.equals(
    "2xx excluded from exceptions",
    false,
    "204" in route.exceptions,
  );
  TestValidator.equals(
    "declared error retained",
    true,
    "400" in route.exceptions,
  );
  const requests: string[] = [];
  let response: Response = jsonResponse(202, { accepted: true });
  const connection = {
    host: "https://example.com/api/",
    fetch: (async (input: string | URL | Request) => {
      requests.push(String(input));
      return response.clone();
    }) as typeof fetch,
  };
  const call = (target: IHttpMigrateRoute = route): Promise<IHttpResponse> =>
    HttpMigration.propagate({
      connection,
      route: target,
      parameters: [],
    });

  TestValidator.equals(
    "202 body",
    { accepted: true },
    (await call()).body as { accepted: boolean },
  );
  TestValidator.equals(
    "base path boundary",
    "https://example.com/api/items",
    requests.at(-1),
  );

  for (const status of [200, 201, 206] as const) {
    response = jsonResponse(status, { status });
    TestValidator.equals(
      `${status} execute`,
      { status } as { status: number },
      (await HttpMigration.execute({
        connection,
        route,
        parameters: [],
      })) as { status: number },
    );
  }

  response = new Response('{"problem":true}', {
    status: 206,
    headers: { "Content-Type": "application/problem+json" },
  });
  TestValidator.equals(
    "runtime success media type",
    { problem: true },
    (await HttpMigration.execute({
      connection,
      route: { ...route, success: null },
      parameters: [],
    })) as { problem: boolean },
  );

  response = jsonResponse(299, { edge: true });
  TestValidator.equals(
    "299 execute",
    { edge: true },
    (await HttpMigration.execute({
      connection,
      route,
      parameters: [],
    })) as { edge: boolean },
  );

  response = new Response(null, { status: 204 });
  TestValidator.equals("204 body", true, (await call()).body === undefined);
  response = new Response(null, { status: 205 });
  TestValidator.equals("205 body", true, (await call()).body === undefined);

  response = new Response("redirect", { status: 300 });
  let redirectError: HttpError | undefined;
  try {
    await HttpMigration.execute({ connection, route, parameters: [] });
  } catch (exp) {
    if (exp instanceof HttpError) redirectError = exp;
  }
  TestValidator.equals("300 is not success", 300, redirectError?.status);

  const cookieHeaders = new Headers({ "Content-Type": "application/json" });
  cookieHeaders.append("Set-Cookie", "sid=abc; Path=/; HttpOnly");
  cookieHeaders.append(
    "Set-Cookie",
    "theme=dark; Expires=Wed, 21 Oct 2026 07:28:00 GMT",
  );
  response = new Response('{"code":"BAD"}', {
    status: 400,
    headers: cookieHeaders,
  });
  const propagated = await call();
  TestValidator.equals(
    "failure JSON",
    { code: "BAD" },
    propagated.body as { code: string },
  );
  TestValidator.equals(
    "set-cookie fields",
    [
      "sid=abc; Path=/; HttpOnly",
      "theme=dark; Expires=Wed, 21 Oct 2026 07:28:00 GMT",
    ],
    propagated.headers["set-cookie"] as string[],
  );
  let error: HttpError | undefined;
  try {
    await HttpMigration.execute({ connection, route, parameters: [] });
  } catch (exp) {
    if (exp instanceof HttpError) error = exp;
  }
  TestValidator.equals("HttpError status", 400, error?.status);
  TestValidator.equals(
    "HttpError structured body",
    { code: "BAD" },
    error?.toJSON<{ code: string }>().message,
  );
  TestValidator.equals(
    "legacy HttpError JSON string",
    { legacy: true },
    new HttpError("GET", "/items", 400, {}, '{"legacy":true}').toJSON<{
      legacy: boolean;
    }>().message,
  );

  response = new Response('{"looks":"json"}', {
    status: 400,
    headers: { "Content-Type": "text/plain" },
  });
  let textError: HttpError | undefined;
  try {
    await HttpMigration.execute({ connection, route, parameters: [] });
  } catch (exp) {
    if (exp instanceof HttpError) textError = exp;
  }
  TestValidator.equals(
    "classified text remains text",
    '{"looks":"json"}',
    textError?.toJSON<string>().message,
  );

  for (const value of [["BAD"], 7, null] as const) {
    response = jsonResponse(400, value);
    const body = (await call()).body;
    TestValidator.equals(
      `JSON ${JSON.stringify(value)}`,
      JSON.stringify(value),
      JSON.stringify(body),
    );
  }

  const multipart = new FormData();
  multipart.set("code", "BAD");

  const failureCases: Array<[string, Response, (body: unknown) => boolean]> = [
    [
      "text",
      new Response("failure", { status: 400 }),
      (body) => body === "failure",
    ],
    [
      "form",
      new Response("code=BAD", {
        status: 400,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }),
      (body) => body instanceof URLSearchParams && body.get("code") === "BAD",
    ],
    [
      "multipart",
      new Response(multipart, { status: 400 }),
      (body) => body instanceof FormData && body.get("code") === "BAD",
    ],
    [
      "binary",
      new Response(new Uint8Array([1, 2, 3]), {
        status: 400,
        headers: { "Content-Type": "application/octet-stream" },
      }),
      (body) => body instanceof Blob && body.size === 3,
    ],
    [
      "empty JSON",
      new Response(null, {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }),
      (body) => body === undefined,
    ],
  ];
  for (const [name, value, predicate] of failureCases) {
    response = value;
    TestValidator.equals(name, true, predicate((await call()).body));
  }

  response = jsonResponse(200, { ok: true });
  for (const [host, path, expected] of [
    ["https://example.com/api", "/items", "https://example.com/api/items"],
    ["https://example.com/api/", "/items", "https://example.com/api/items"],
    ["https://example.com/api", "items", "https://example.com/api/items"],
    ["https://example.com/api/", "items", "https://example.com/api/items"],
  ] as const) {
    connection.host = host;
    await call({ ...route, emendedPath: path });
    TestValidator.equals(
      `URL ${host} ${path}`,
      expected as string,
      requests.at(-1),
    );
  }
};

const jsonResponse = (status: number, body: unknown): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const document: OpenApi.IDocument = {
  openapi: "3.2.0",
  "x-typia-emended-v12": true,
  info: { title: "HTTP response contract", version: "1.0.0" },
  components: { schemas: {} },
  paths: {
    "/items": {
      get: {
        responses: {
          "202": {
            description: "Accepted",
            content: {
              "application/problem+json": {
                schema: {
                  type: "object",
                  properties: { accepted: { type: "boolean" } },
                  required: ["accepted"],
                },
              },
            },
          },
          "204": { description: "No Content" },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: { code: { type: "string" } },
                  required: ["code"],
                },
              },
            },
          },
        },
      },
    },
  },
};
