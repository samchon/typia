import { TestValidator } from "@nestia/e2e";
import { IHttpMigrateRoute, OpenApiV3_1 } from "@typia/interface";
import { HttpMigration } from "@typia/utils";

/**
 * Verifies migrated bodies preserve JSON values and declared media types.
 *
 * Body validation previously required every payload to be an object, inherited
 * content types leaked into multipart requests, and JSON-suffix media types
 * were rejected during composition even though the fetcher could parse them.
 *
 * 1. Compose text, scalar/array/null JSON, multipart, and JSON-suffix routes.
 * 2. Capture the outgoing body and content type for each request.
 * 3. Require primitive preservation, multipart boundary delegation, and schemas.
 */
export const test_http_migrate_body_media_contract =
  async (): Promise<void> => {
    const application = HttpMigration.application(document);
    TestValidator.equals("composition errors", 0, application.errors.length);

    let captured: { url: URL; init: RequestInit } | undefined;
    const connection = {
      host: "https://example.com",
      headers: { "Content-Type": "application/json" },
      fetch: (async (input: string | URL | Request, init?: RequestInit) => {
        captured = { url: new URL(String(input)), init: init! };
        return new Response('{"ok":true}', {
          status: 200,
          headers: { "Content-Type": "application/problem+json" },
        });
      }) as typeof fetch,
    };
    const execute = async (path: string, body: unknown): Promise<void> => {
      await HttpMigration.execute({
        connection,
        route: findRoute(application.routes, path),
        parameters: [],
        body,
      });
    };

    await execute("/text", "hello");
    TestValidator.equals(
      "text content type",
      "text/plain",
      contentType(captured),
    );
    TestValidator.equals("text body", "hello", String(captured!.init.body));

    await execute("/array", ["a", "b"]);
    TestValidator.equals(
      "array JSON",
      '["a","b"]',
      String(captured!.init.body),
    );

    await execute("/null", null);
    TestValidator.equals("null JSON", "null", String(captured!.init.body));

    await execute("/multipart", { name: "typia" });
    TestValidator.equals(
      "multipart content type delegated",
      true,
      contentType(captured) === null,
    );
    TestValidator.equals(
      "multipart body",
      true,
      captured!.init.body instanceof FormData,
    );

    await execute("/suffix", { value: "patched" });
    TestValidator.equals(
      "JSON suffix content type",
      "application/merge-patch+json",
      contentType(captured),
    );
    TestValidator.equals(
      "JSON suffix body",
      '{"value":"patched"}',
      String(captured!.init.body),
    );
    const suffix = findRoute(application.routes, "/suffix");
    TestValidator.equals(
      "JSON suffix success type",
      "application/problem+json",
      suffix.success?.type,
    );
    TestValidator.equals(
      "JSON suffix exception schema",
      true,
      "properties" in suffix.exceptions["400"]!.schema &&
        suffix.exceptions["400"]!.schema.properties?.error !== undefined,
    );
  };

const contentType = (
  captured: { url: URL; init: RequestInit } | undefined,
): string | null => new Headers(captured!.init.headers).get("content-type");

const findRoute = (
  routes: IHttpMigrateRoute[],
  path: string,
): IHttpMigrateRoute => routes.find((route) => route.path === path)!;

const document: OpenApiV3_1.IDocument = {
  openapi: "3.1.0",
  info: { title: "HTTP body media contract", version: "1.0.0" },
  components: { schemas: {} },
  paths: {
    "/text": operation("text/plain", { type: "string" }),
    "/array": operation("application/json", {
      type: "array",
      items: { type: "string" },
    }),
    "/null": operation("application/json", { type: "null" }),
    "/multipart": operation("multipart/form-data", {
      type: "object",
      properties: { name: { type: "string" } },
    }),
    "/suffix": {
      post: {
        requestBody: {
          required: true,
          content: {
            "application/merge-patch+json": {
              schema: {
                type: "object",
                properties: { value: { type: "string" } },
                required: ["value"],
              },
            },
          },
        },
        responses: {
          "200": {
            description: "OK",
            content: {
              "application/problem+json": {
                schema: {
                  type: "object",
                  properties: { ok: { type: "boolean" } },
                  required: ["ok"],
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/problem+json": {
                schema: {
                  type: "object",
                  properties: { error: { type: "string" } },
                  required: ["error"],
                },
              },
            },
          },
        },
      },
    },
  },
};

function operation(
  type: string,
  schema: OpenApiV3_1.IJsonSchema,
): OpenApiV3_1.IPath {
  return {
    post: {
      requestBody: {
        required: true,
        content: { [type]: { schema } },
      },
      responses: { "200": { description: "OK" } },
    },
  };
}
