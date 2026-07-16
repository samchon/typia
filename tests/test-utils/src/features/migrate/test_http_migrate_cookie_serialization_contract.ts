import { TestValidator } from "@nestia/e2e";
import { OpenApiV3_2 } from "@typia/interface";
import { HttpLlm, HttpMigration, OpenApiConverter } from "@typia/utils";

/**
 * Verifies OpenAPI 3.2 cookie styles preserve their distinct encoding rules.
 *
 * OpenAPI 3.2 `style: cookie` passes pre-escaped data through unchanged, while
 * the legacy/default `style: form` applies RFC 3986 percent-encoding. The
 * migration serializer previously rejected the new style and emitted form
 * parameter names and exploded object keys without encoding.
 *
 * 1. Compose form and cookie styles in one required cookie group.
 * 2. Downgrade the serialization metadata without leaking unsupported fields.
 * 3. Require LLM validation to advertise and accept every flattened value.
 * 4. Execute the route and compare the exact merged Cookie header.
 */
export const test_http_migrate_cookie_serialization_contract =
  async (): Promise<void> => {
    const migration = HttpMigration.application(document);
    TestValidator.equals("composition errors", 0, migration.errors.length);
    const route = migration.routes[0]!;
    TestValidator.equals(
      "cookie styles",
      ["cookie", "form", "form"],
      route.cookies?.parameters?.map((parameter) => parameter.style),
    );
    TestValidator.equals(
      "cookie explode defaults",
      [true, true, true],
      route.cookies?.parameters?.map((parameter) => parameter.explode),
    );

    for (const [version, downgraded] of [
      ["3.0", OpenApiConverter.downgradeDocument(migration.document(), "3.0")],
      ["3.1", OpenApiConverter.downgradeDocument(migration.document(), "3.1")],
    ] as const)
      TestValidator.equals(
        `${version} cookie style downgrade`,
        "form",
        (
          downgraded.paths?.["/cookies"]?.get?.parameters?.[0] as
            | { style?: string }
            | undefined
        )?.style,
      );
    const swagger = OpenApiConverter.downgradeDocument(
      migration.document(),
      "2.0",
    );
    const swaggerParameter = swagger.paths?.["/cookies"]?.get?.parameters?.[0];
    TestValidator.equals(
      "Swagger parameter serialization fields omitted",
      false,
      swaggerParameter !== undefined &&
        ("style" in swaggerParameter || "explode" in swaggerParameter),
    );
    const swaggerResponse = swagger.paths?.["/cookies"]?.get?.responses?.[
      "204"
    ] as
      | { headers?: Record<string, Record<string, unknown> | undefined> }
      | undefined;
    const swaggerHeader = swaggerResponse?.headers?.["X-Trace"];
    TestValidator.equals(
      "Swagger response header serialization fields omitted",
      false,
      swaggerHeader !== undefined &&
        ("style" in swaggerHeader || "explode" in swaggerHeader),
    );

    const input = {
      raw: "Hello%2C%20world!",
      "session id": "a b!",
      "theme mode": "dark!",
    };
    const llm = HttpLlm.application({ document });
    TestValidator.equals("LLM errors", 0, llm.errors.length);
    TestValidator.equals(
      "LLM cookie validation",
      true,
      llm.functions[0]!.validate({ cookie: input }).success,
    );

    let captured: Headers | undefined;
    await HttpMigration.execute({
      connection: {
        host: "https://example.com",
        headers: {
          Cookie: "session%20id=old; inherited=yes",
        },
        fetch: (async (_input, init) => {
          captured = new Headers(init!.headers);
          return new Response(null, { status: 204 });
        }) as typeof fetch,
      },
      route,
      parameters: [],
      cookies: input,
    });
    TestValidator.equals(
      "cookie wire format",
      "inherited=yes; raw=Hello%2C%20world!; session%20id=a%20b%21; theme%20mode=dark%21",
      captured!.get("cookie"),
    );
  };

const document: OpenApiV3_2.IDocument = {
  openapi: "3.2.0",
  info: { title: "Cookie serialization", version: "1.0.0" },
  components: { schemas: {} },
  paths: {
    "/cookies": {
      get: {
        parameters: [
          {
            name: "raw",
            in: "cookie",
            required: true,
            style: "cookie",
            schema: { type: "string" },
          },
          {
            name: "session id",
            in: "cookie",
            required: true,
            style: "form",
            schema: { type: "string" },
          },
          {
            name: "preferences",
            in: "cookie",
            required: true,
            style: "form",
            schema: {
              type: "object",
              properties: { "theme mode": { type: "string" } },
              required: ["theme mode"],
            },
          },
        ],
        responses: {
          "204": {
            description: "No Content",
            headers: {
              "X-Trace": {
                style: "simple",
                explode: false,
                schema: { type: "array", items: { type: "string" } },
              },
            },
          },
        },
      },
    },
  },
};
