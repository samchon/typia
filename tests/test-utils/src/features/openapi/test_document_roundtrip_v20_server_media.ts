import { TestValidator } from "@nestia/e2e";
import { OpenApi, SwaggerV2 } from "@typia/interface";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies Swagger 2 server and media metadata survive representable
 * conversion.
 *
 * Swagger splits the endpoint across schemes, host, and basePath and applies
 * media types at document or operation scope. The emended representation uses
 * complete server URLs and per-content entries instead.
 *
 * 1. Upgrade document-level metadata and an operation override.
 * 2. Assert server URLs and request/response content maps follow override
 *    precedence.
 * 3. Downgrade the emended document and verify schemes, host, basePath, consumes,
 *    and produces remain semantically equivalent.
 */
export const test_document_roundtrip_v20_server_media = (): void => {
  const input: SwaggerV2.IDocument = {
    swagger: "2.0",
    info: { title: "Media API", version: "1.0.0" },
    schemes: ["https", "http"],
    host: "api.example.com:8443",
    basePath: "/v1/",
    consumes: ["application/json", "application/xml"],
    produces: ["application/json"],
    paths: {
      "/global": {
        post: {
          parameters: [
            {
              name: "body",
              in: "body",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            "200": { description: "ok", schema: { type: "string" } },
          },
        },
      },
      "/override": {
        post: {
          schemes: ["https"],
          consumes: ["text/plain"],
          produces: ["text/plain", "application/json"],
          parameters: [
            {
              name: "body",
              in: "body",
              schema: { type: "integer" },
            },
          ],
          responses: {
            "200": {
              description: "ok",
              schema: { type: "integer" },
              examples: {
                "text/plain": "1",
                "application/json": 1,
              },
            },
          },
        },
      },
    },
  };

  const upgraded: OpenApi.IDocument = OpenApiConverter.upgradeDocument(input);
  TestValidator.equals("servers", upgraded.servers, [
    { url: "https://api.example.com:8443/v1" },
    { url: "http://api.example.com:8443/v1" },
  ]);
  TestValidator.equals(
    "global consumes",
    Object.keys(upgraded.paths!["/global"]!.post!.requestBody!.content!),
    ["application/json", "application/xml"],
  );
  TestValidator.equals(
    "global produces",
    Object.keys(upgraded.paths!["/global"]!.post!.responses!["200"]!.content!),
    ["application/json"],
  );
  TestValidator.equals(
    "operation server override",
    upgraded.paths!["/override"]!.post!.servers,
    [{ url: "https://api.example.com:8443/v1" }],
  );
  TestValidator.equals(
    "operation consumes override",
    Object.keys(upgraded.paths!["/override"]!.post!.requestBody!.content!),
    ["text/plain"],
  );
  TestValidator.equals(
    "operation produces override",
    Object.keys(
      upgraded.paths!["/override"]!.post!.responses!["200"]!.content!,
    ),
    ["text/plain", "application/json"],
  );
  TestValidator.equals(
    "operation response examples",
    Object.fromEntries(
      Object.entries(
        upgraded.paths!["/override"]!.post!.responses!["200"]!.content!,
      ).map(([key, value]) => [key, value!.example]),
    ),
    { "text/plain": "1", "application/json": 1 },
  );

  const downgraded: SwaggerV2.IDocument = OpenApiConverter.downgradeDocument(
    upgraded,
    "2.0",
  );
  TestValidator.equals(
    "downgraded endpoint",
    {
      schemes: downgraded.schemes,
      host: downgraded.host,
      basePath: downgraded.basePath,
    },
    {
      schemes: ["https", "http"],
      host: "api.example.com:8443",
      basePath: "/v1",
    },
  );
  TestValidator.equals(
    "downgraded global operation media",
    {
      consumes: downgraded.paths!["/global"]!.post!.consumes,
      produces: downgraded.paths!["/global"]!.post!.produces,
    },
    {
      consumes: ["application/json", "application/xml"],
      produces: ["application/json"],
    },
  );
  TestValidator.equals(
    "downgraded override media",
    {
      schemes: downgraded.paths!["/override"]!.post!.schemes,
      consumes: downgraded.paths!["/override"]!.post!.consumes,
      produces: downgraded.paths!["/override"]!.post!.produces,
    },
    {
      schemes: ["https"],
      consumes: ["text/plain"],
      produces: ["text/plain", "application/json"],
    },
  );
  TestValidator.equals(
    "downgraded response examples",
    downgraded.paths!["/override"]!.post!.responses!["200"]!.examples,
    { "text/plain": "1", "application/json": 1 },
  );

  const reordered: SwaggerV2.IDocument = OpenApiConverter.downgradeDocument(
    {
      openapi: "3.2.0",
      components: {},
      paths: {
        "/reordered": {
          get: {
            responses: {
              "200": {
                content: {
                  "application/json": { schema: { type: "string" } },
                  "text/plain": { schema: { type: "string" } },
                },
              },
              "400": {
                content: {
                  "text/plain": { schema: { type: "string" } },
                  "application/json": { schema: { type: "string" } },
                },
              },
              "204": { content: {} },
            },
          },
        },
      },
      "x-typia-emended-v12": true,
    },
    "2.0",
  );
  TestValidator.equals(
    "response media order is not semantic",
    reordered.paths!["/reordered"]!.get!.produces,
    ["application/json", "text/plain"],
  );
  const reorderedRoundTrip: OpenApi.IDocument =
    OpenApiConverter.upgradeDocument(reordered);
  TestValidator.predicate(
    "empty response content remains payload-free",
    reorderedRoundTrip.paths!["/reordered"]!.get!.responses!["204"]!.content ===
      undefined,
  );

  const root: SwaggerV2.IDocument = OpenApiConverter.downgradeDocument(
    {
      openapi: "3.2.0",
      components: {},
      servers: [
        { url: "https://api.example.com" },
        { url: "http://api.example.com/" },
      ],
      paths: {
        "/root": {
          get: {
            servers: [{ url: "https://api.example.com/" }],
            responses: {},
          },
        },
      },
      "x-typia-emended-v12": true,
    },
    "2.0",
  );
  TestValidator.equals(
    "root server normalization",
    {
      schemes: root.schemes,
      host: root.host,
      basePath: root.basePath,
      operationSchemes: root.paths!["/root"]!.get!.schemes,
    },
    {
      schemes: ["https", "http"],
      host: "api.example.com",
      basePath: undefined,
      operationSchemes: ["https"],
    },
  );

  const hostCase: SwaggerV2.IDocument = OpenApiConverter.downgradeDocument(
    {
      openapi: "3.2.0",
      components: {},
      servers: [
        { url: "https://API.example.com/v1" },
        { url: "http://api.example.com/v1" },
      ],
      paths: {
        "/case": {
          get: {
            servers: [{ url: "https://Api.Example.Com/v1" }],
            responses: {},
          },
        },
      },
      "x-typia-emended-v12": true,
    },
    "2.0",
  );
  TestValidator.equals(
    "host authority casing",
    {
      schemes: hostCase.schemes,
      host: hostCase.host,
      operationSchemes: hostCase.paths!["/case"]!.get!.schemes,
    },
    {
      schemes: ["https", "http"],
      host: "API.example.com",
      operationSchemes: ["https"],
    },
  );
  const networkHostCase: SwaggerV2.IDocument =
    OpenApiConverter.downgradeDocument(
      {
        openapi: "3.2.0",
        components: {},
        servers: [
          { url: "//API.example.com/v1" },
          { url: "//api.example.com/v1" },
        ],
        paths: {},
        "x-typia-emended-v12": true,
      },
      "2.0",
    );
  TestValidator.equals(
    "scheme-relative host authority casing",
    {
      schemes: networkHostCase.schemes,
      host: networkHostCase.host,
      basePath: networkHostCase.basePath,
    },
    {
      schemes: undefined,
      host: "API.example.com",
      basePath: "/v1",
    },
  );

  assertThrows("empty consumes with body schema", () =>
    OpenApiConverter.upgradeDocument({
      ...input,
      paths: {
        "/invalid": {
          post: {
            consumes: [],
            parameters: [
              { name: "body", in: "body", schema: { type: "boolean" } },
            ],
            responses: {},
          },
        },
      },
    }),
  );
  assertThrows("empty produces with response schema", () =>
    OpenApiConverter.upgradeDocument({
      ...input,
      paths: {
        "/invalid": {
          get: {
            produces: [],
            responses: {
              "200": { description: "ok", schema: { type: "boolean" } },
            },
          },
        },
      },
    }),
  );
  for (const endpoint of [
    { host: "api.example.com?tenant=one" },
    { basePath: "/v1#section" },
  ])
    assertThrows("server query or fragment", () =>
      OpenApiConverter.upgradeDocument({
        ...input,
        ...endpoint,
        paths: {},
      }),
    );
};

const assertThrows = (title: string, task: () => unknown): void => {
  let thrown: boolean = false;
  try {
    task();
  } catch {
    thrown = true;
  }
  TestValidator.predicate(title, thrown);
};
