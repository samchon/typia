import { TestValidator } from "@nestia/e2e";
import { OpenApi, OpenApiV3_2 } from "@typia/interface";
import { HttpLlm, HttpMigration, OpenApiConverter } from "@typia/utils";

/**
 * Verifies OpenAPI 3.2 whole-query parameters retain their content contract.
 *
 * A querystring parameter uses one Media Type Object for the entire URL query
 * string. It is not a named query parameter, cannot be repeated, and cannot be
 * combined with ordinary query parameters.
 *
 * 1. Compose and advertise one form-urlencoded querystring parameter.
 * 2. Execute it with media-type encoding and compare the exact query text.
 * 3. Reject invalid declarations and retain canonical schema compatibility.
 */
export const test_http_migrate_querystring_contract =
  async (): Promise<void> => {
    const migration = HttpMigration.application(validDocument);
    TestValidator.equals("composition errors", 0, migration.errors.length);
    const route = migration.routes[0]!;
    TestValidator.equals(
      "querystring media type",
      "application/x-www-form-urlencoded",
      route.query?.querystring?.type,
    );

    const llm = HttpLlm.application({ document: validDocument });
    TestValidator.equals("LLM errors", 0, llm.errors.length);
    TestValidator.equals(
      "LLM whole-query input",
      true,
      llm.functions[0]!.validate({
        query: { foo: "a + b", bar: true },
      }).success,
    );

    let captured: URL | undefined;
    await HttpMigration.execute({
      connection: {
        host: "https://example.com",
        fetch: (async (input: string | URL | Request) => {
          captured = new URL(String(input));
          return new Response(null, { status: 204 });
        }) as typeof fetch,
      },
      route,
      parameters: [],
      query: { foo: "a + b", bar: true },
    });
    TestValidator.equals(
      "form querystring wire",
      "?foo=a+%2B+b&bar=true",
      captured!.search,
    );

    TestValidator.equals(
      "JSON querystring wire",
      "?%7B%22foo%22%3A%22a%20%2B%20b%22%7D",
      await executeQuerystring(jsonDocument, { foo: "a + b" }),
    );
    const textLlm = HttpLlm.application({ document: textDocument });
    TestValidator.equals(
      "scalar querystring LLM input",
      true,
      textLlm.functions[0]!.validate({ query: "a + b" }).success,
    );
    TestValidator.equals(
      "text querystring wire",
      "?a%20%2B%20b",
      await executeQuerystring(textDocument, "a + b"),
    );

    const canonical = OpenApiConverter.upgradeDocument(validDocument);
    TestValidator.equals(
      "canonical querystring content",
      ["application/x-www-form-urlencoded"],
      Object.keys(
        canonical.paths!["/search"]!.get!.parameters![0]!.content ?? {},
      ),
    );
    const downgraded: [string, unknown][] = [
      [
        "3.1",
        OpenApiConverter.downgradeDocument(canonical, "3.1").paths!["/search"]!
          .get!.parameters![0]!,
      ],
      [
        "3.0",
        OpenApiConverter.downgradeDocument(canonical, "3.0").paths!["/search"]!
          .get!.parameters![0]!,
      ],
      [
        "2.0",
        OpenApiConverter.downgradeDocument(canonical, "2.0").paths!["/search"]!
          .get!.parameters![0]!,
      ],
    ];
    for (const [version, value] of downgraded) {
      const parameter = value as Record<string, unknown>;
      TestValidator.equals(
        `${version} query location`,
        "query",
        parameter.in as string | undefined,
      );
      TestValidator.equals(
        `${version} content removed`,
        false,
        "content" in parameter,
      );
    }

    const mixed = HttpMigration.application(mixedDocument);
    TestValidator.equals("mixed route omitted", 0, mixed.routes.length);
    TestValidator.equals(
      "mixed diagnostic",
      ["querystring parameter cannot coexist with query parameters"],
      mixed.errors[0]?.messages,
    );

    const duplicate = HttpMigration.application(duplicateDocument);
    TestValidator.equals("duplicate route omitted", 0, duplicate.routes.length);
    TestValidator.equals(
      "duplicate diagnostic",
      ["querystring parameter must appear at most once"],
      duplicate.errors[0]?.messages,
    );

    expectCompositionError(
      "empty content",
      emptyContentDocument,
      "querystring parameter must define exactly one content media type",
    );
    expectCompositionError(
      "multiple content",
      multipleContentDocument,
      "querystring parameter must define exactly one content media type",
    );
    expectCompositionError(
      "form scalar",
      formScalarDocument,
      "application/x-www-form-urlencoded querystring parameter requires an object schema",
    );
    expectCompositionError(
      "text object",
      textObjectDocument,
      'querystring media type "text/plain" requires a scalar schema or JSON representation',
    );

    const legacy = HttpMigration.application(legacyDocument);
    TestValidator.equals("legacy composition errors", 0, legacy.errors.length);
    TestValidator.equals(
      "legacy schema serialization",
      "?search=a%20b",
      await executeRoute(legacy.routes[0]!, { search: "a b" }),
    );
    TestValidator.equals(
      "legacy whole-query metadata absent",
      false,
      legacy.routes[0]!.query?.querystring !== undefined,
    );
  };

const querystring: OpenApiV3_2.IOperation.IParameter = {
  name: "wholeQuery",
  in: "querystring",
  required: true,
  content: {
    "application/x-www-form-urlencoded": {
      schema: {
        type: "object",
        properties: {
          foo: { type: "string" },
          bar: { type: "boolean" },
        },
        required: ["foo", "bar"],
      },
    },
  },
};

const operation = (
  parameters: OpenApiV3_2.IOperation.IParameter[],
): OpenApiV3_2.IPath => ({
  get: {
    parameters,
    responses: { "204": { description: "No Content" } },
  },
});

const validDocument: OpenApiV3_2.IDocument = {
  openapi: "3.2.0",
  info: { title: "Querystring contract", version: "1.0.0" },
  components: { schemas: {} },
  paths: { "/search": operation([querystring]) },
};

const mixedDocument: OpenApiV3_2.IDocument = {
  ...validDocument,
  paths: {
    "/search": operation([
      querystring,
      {
        name: "page",
        in: "query",
        schema: { type: "integer" },
      },
    ]),
  },
};

const duplicateDocument: OpenApiV3_2.IDocument = {
  ...validDocument,
  paths: {
    "/search": operation([
      querystring,
      { ...querystring, name: "otherWholeQuery" },
    ]),
  },
};

const emptyContentDocument: OpenApiV3_2.IDocument = {
  ...validDocument,
  paths: {
    "/search": operation([{ ...querystring, content: {} }]),
  },
};

const multipleContentDocument: OpenApiV3_2.IDocument = {
  ...validDocument,
  paths: {
    "/search": operation([
      {
        ...querystring,
        content: {
          ...querystring.content,
          "application/json": { schema: { type: "object" } },
        },
      },
    ]),
  },
};

const formScalarDocument: OpenApiV3_2.IDocument = {
  ...validDocument,
  paths: {
    "/search": operation([
      {
        ...querystring,
        content: {
          "application/x-www-form-urlencoded": {
            schema: { type: "string" },
          },
        },
      },
    ]),
  },
};

const textObjectDocument: OpenApiV3_2.IDocument = {
  ...validDocument,
  paths: {
    "/search": operation([
      {
        ...querystring,
        content: {
          "text/plain": { schema: { type: "object" } },
        },
      },
    ]),
  },
};

const jsonDocument: OpenApiV3_2.IDocument = {
  ...validDocument,
  paths: {
    "/search": operation([
      {
        name: "wholeQuery",
        in: "querystring",
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: { foo: { type: "string" } },
              required: ["foo"],
            },
          },
        },
      },
    ]),
  },
};

const textDocument: OpenApiV3_2.IDocument = {
  ...validDocument,
  paths: {
    "/search": operation([
      {
        name: "wholeQuery",
        in: "querystring",
        required: true,
        content: {
          "text/plain": {
            schema: { type: "string" },
          },
        },
      },
    ]),
  },
};

const legacyDocument: OpenApi.IDocument = {
  openapi: "3.2.0",
  "x-typia-emended-v12": true,
  info: { title: "Legacy querystring contract", version: "1.0.0" },
  components: { schemas: {} },
  paths: {
    "/search": {
      get: {
        parameters: [
          {
            name: "wholeQuery",
            in: "querystring",
            schema: {
              type: "object",
              properties: { search: { type: "string" } },
              required: ["search"],
            },
          },
        ],
        responses: { "204": { description: "No Content" } },
      },
    },
  },
};

const expectCompositionError = (
  name: string,
  document: OpenApiV3_2.IDocument,
  message: string,
): void => {
  const migration = HttpMigration.application(document);
  TestValidator.equals(`${name} route omitted`, 0, migration.routes.length);
  TestValidator.equals(
    `${name} diagnostic`,
    [message],
    migration.errors[0]?.messages,
  );
};

const executeQuerystring = async (
  document: OpenApiV3_2.IDocument,
  query: unknown,
): Promise<string> => {
  const migration = HttpMigration.application(document);
  return executeRoute(migration.routes[0]!, query);
};

const executeRoute = async (
  route: ReturnType<typeof HttpMigration.application>["routes"][number],
  query: unknown,
): Promise<string> => {
  let captured: URL | undefined;
  await HttpMigration.execute({
    connection: {
      host: "https://example.com",
      fetch: (async (input: string | URL | Request) => {
        captured = new URL(String(input));
        return new Response(null, { status: 204 });
      }) as typeof fetch,
    },
    route,
    parameters: [],
    query,
  });
  return captured!.search;
};
