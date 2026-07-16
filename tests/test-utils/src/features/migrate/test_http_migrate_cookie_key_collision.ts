import { TestValidator } from "@nestia/e2e";
import { OpenApiV3_1 } from "@typia/interface";
import { HttpLlm, HttpMigration } from "@typia/utils";

/**
 * Verifies cookie groups cannot overwrite another request argument key.
 *
 * Cookie descriptors were omitted from route accessor collision resolution, so
 * a path parameter named `cookie` replaced its own LLM property with the cookie
 * group schema and made execution read the same argument twice.
 *
 * 1. Compose a route with colliding path and cookie group names.
 * 2. Check that the LLM schema advertises two distinct required properties.
 * 3. Execute both arguments and require the correct path and Cookie header.
 */
export const test_http_migrate_cookie_key_collision =
  async (): Promise<void> => {
    const migration = HttpMigration.application(document);
    TestValidator.equals("composition errors", 0, migration.errors.length);
    const route = migration.routes[0]!;
    TestValidator.equals(
      "distinct route keys",
      true,
      route.parameters[0]!.key !== route.cookies!.key,
    );

    const llm = HttpLlm.application({ document });
    TestValidator.equals("LLM errors", 0, llm.errors.length);
    const properties = Object.keys(llm.functions[0]!.parameters.properties!);
    TestValidator.equals(
      "distinct LLM properties",
      [route.parameters[0]!.key, route.cookies!.key],
      properties,
    );
    TestValidator.equals(
      "distinct LLM requirements",
      properties,
      llm.functions[0]!.parameters.required,
    );

    let captured: { url: URL; headers: Headers } | undefined;
    await HttpMigration.execute({
      connection: {
        host: "https://example.com",
        fetch: (async (input: string | URL | Request, init?: RequestInit) => {
          captured = {
            url: new URL(String(input)),
            headers: new Headers(init!.headers),
          };
          return new Response(null, { status: 204 });
        }) as typeof fetch,
      },
      route,
      parameters: { [route.parameters[0]!.key]: "samchon" },
      cookies: { sid: "token" },
    });
    TestValidator.equals(
      "path argument",
      "/users/samchon",
      captured!.url.pathname,
    );
    TestValidator.equals(
      "cookie argument",
      "sid=token",
      captured!.headers.get("cookie"),
    );
  };

const document: OpenApiV3_1.IDocument = {
  openapi: "3.1.0",
  info: { title: "Cookie key collision", version: "1.0.0" },
  components: { schemas: {} },
  paths: {
    "/users/{cookie}": {
      get: {
        parameters: [
          {
            name: "cookie",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "sid",
            in: "cookie",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: { "204": { description: "No Content" } },
      },
    },
  },
};
