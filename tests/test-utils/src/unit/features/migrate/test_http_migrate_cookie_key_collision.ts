import { OpenApiV3_1 } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification HttpMigration, HttpLlm.application and HttpMigration.execute run on an authored document with a path parameter named cookie plus a cookie group; distinct route keys, distinct required LLM properties, the request path and the Cookie header are compared, so a colliding key or a cookie argument read twice fails.
 * @evidence contracts/testing.md#independent-expectations The document is authored and the expectations are literals (/users/samchon, sid=token) plus the invariant that two argument keys differ; the key names are read from the route record because the migrator chooses the replacement name.
 * @evidence contracts/testing.md#distinguishing-cases The colliding path and cookie names are the positive case. A document without a collision is not asserted here, so the test does not prove keys stay unchanged when no collision exists.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. A fetch double captures the request; no socket, native build, installation or host is involved.
 */
export const test_http_migrate_cookie_key_collision =
  async (): Promise<void> => {
    const migration = HttpMigration.application(document);
    TestEquality.equals("composition errors", 0, migration.errors.length);
    const route = migration.routes[0]!;
    TestEquality.equals(
      "distinct route keys",
      true,
      route.parameters[0]!.key !== route.cookies!.key,
    );

    const llm = HttpLlm.application({ document });
    TestEquality.equals("LLM errors", 0, llm.errors.length);
    const properties = Object.keys(llm.functions[0]!.parameters.properties!);
    TestEquality.equals(
      "distinct LLM properties",
      [route.parameters[0]!.key, route.cookies!.key],
      properties,
    );
    TestEquality.equals(
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
    TestEquality.equals(
      "path argument",
      "/users/samchon",
      captured!.url.pathname,
    );
    TestEquality.equals(
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
