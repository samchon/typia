import { OpenApi, OpenApiV3, SwaggerV2 } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import {
  HttpLlm,
  HttpMigration,
  OpenApiConverter,
  OpenApiTypeChecker,
} from "@typia/utils";

/**
 * Verifies the converters resolve a reference whose key needs escaping.
 *
 * A component keyed `A/B` is referenced as `#/components/schemas/A~1B`, one
 * JSON Pointer token. The converters took the raw last token as the key, so the
 * upgrades dropped every parameter, request body, and response reached through
 * such a reference, the 2.0 downgrade keyed the definition `B`, and the 3.0
 * downgrade lost the reference's nullability (#2408).
 *
 * 1. Upgrade a 3.0 and a 2.0 document whose parameter, request body, and response
 *    keys need escaping, and assert each operation keeps them.
 * 2. Downgrade the emended document to 2.0 and assert the definition key.
 * 3. Downgrade a nullable escaped reference to 3.0 and assert its nullable twin.
 * 4. Upgrade 3.1 and 3.2 documents whose header parameter and webhook path item
 *    keys need escaping, and assert both resolve.
 * 5. Run the schema walkers and HTTP composers over an escaped and a plain key,
 *    and assert they answer alike; a literal key that only looks escaped still
 *    resolves with its description.
 */
export const test_openapi_reference_key_escaped = (): void => {
  const reference = { $ref: "#/components/schemas/A~1B" };
  const v30: OpenApiV3.IDocument = {
    openapi: "3.0.3",
    info: { title: "escaped", version: "1.0.0" },
    components: {
      schemas: {
        "A/B": {
          type: "object",
          properties: { x: { type: "number" } },
          required: ["x"],
        },
      },
      requestBodies: {
        "Body/1": { content: { "application/json": { schema: reference } } },
      },
      parameters: {
        "P/1": { name: "p", in: "query", schema: { type: "string" } },
      },
      responses: {
        "R~1": {
          description: "ok",
          content: { "application/json": { schema: reference } },
        },
      },
    },
    paths: {
      "/x": {
        post: {
          parameters: [{ $ref: "#/components/parameters/P~11" }],
          requestBody: { $ref: "#/components/requestBodies/Body~11" },
          responses: { 200: { $ref: "#/components/responses/R~01" } },
        },
      },
    },
  } as unknown as OpenApiV3.IDocument;
  const upgraded: OpenApi.IDocument = OpenApiConverter.upgradeDocument(v30);
  const operation = upgraded.paths?.["/x"]?.post;
  TestEquality.equals(
    "3.0 upgrade",
    {
      parameters: [{ name: "p", in: "query", schema: { type: "string" } }],
      requestBody: { content: { "application/json": { schema: reference } } },
      responses: {
        200: {
          description: "ok",
          content: { "application/json": { schema: reference } },
        },
      },
    } as unknown,
    {
      parameters: operation?.parameters,
      requestBody: operation?.requestBody,
      responses: operation?.responses,
    },
  );

  const v20: SwaggerV2.IDocument = {
    swagger: "2.0",
    info: { title: "escaped", version: "1.0.0" },
    definitions: {
      "A/B": {
        type: "object",
        properties: { x: { type: "number" } },
        required: ["x"],
      },
    },
    parameters: { "P/1": { name: "p", in: "query", type: "string" } },
    responses: {
      "R/1": { description: "ok", schema: { $ref: "#/definitions/A~1B" } },
    },
    paths: {
      "/x": {
        get: {
          parameters: [{ $ref: "#/parameters/P~11" }],
          responses: { 200: { $ref: "#/responses/R~11" } },
        },
      },
    },
  } as unknown as SwaggerV2.IDocument;
  const fromV20 = OpenApiConverter.upgradeDocument(v20).paths?.["/x"]?.get;
  TestEquality.equals(
    "2.0 upgrade",
    {
      parameters: [{ name: "p", in: "query", schema: { type: "string" } }],
      responses: {
        200: {
          description: "ok",
          content: { "application/json": { schema: reference } },
        },
      },
    } as unknown,
    { parameters: fromV20?.parameters, responses: fromV20?.responses },
  );

  const downgraded: SwaggerV2.IDocument = OpenApiConverter.downgradeDocument(
    upgraded,
    "2.0",
  );
  TestEquality.equals(
    "2.0 definition keys",
    ["A/B"],
    Object.keys(downgraded.definitions ?? {}),
  );

  const components: OpenApiV3.IComponents = {};
  const nullable = OpenApiConverter.downgradeSchema({
    version: "3.0",
    components: upgraded.components,
    downgraded: components,
    schema: { oneOf: [reference, { type: "null" }] },
  });
  TestEquality.equals(
    "3.0 nullable reference",
    {
      schema: { $ref: "#/components/schemas/A~1B.Nullable" },
      keys: ["A/B.Nullable"],
    } as unknown,
    { schema: nullable, keys: Object.keys(components.schemas ?? {}) },
  );

  for (const version of ["3.1.0", "3.2.0"])
    TestEquality.equals(
      `${version} upgrade`,
      {
        parameters: [{ name: "H/1", in: "header", schema: { type: "string" } }],
        webhook: { content: { "application/json": { schema: reference } } },
      } as unknown,
      (() => {
        const document = OpenApiConverter.upgradeDocument(next(version) as any);
        return {
          parameters: document.paths?.["/x"]?.post?.parameters,
          webhook: document.webhooks?.w?.post?.requestBody,
        };
      })(),
    );

  // a literal key that only looks escaped resolves by the raw fallback, and
  // keeps its description under the key it was found by
  const literal = OpenApiTypeChecker.escape({
    components: {
      schemas: { "A~1B": { type: "object", description: "Literal." } },
    },
    schema: { $ref: "#/components/schemas/A~1B" },
    recursive: false,
  });
  TestEquality.equals(
    "literal key description",
    "Description of the current {@link A~1B} type:\n\n> Literal.",
    literal.success ? literal.value.description : null,
  );

  // the same walks over an escaped and a plain key must answer alike
  TestEquality.equals("walkers", walk("QP", "QP"), walk("Q/P", "Q~1P"));
};

const next = (openapi: string): object => ({
  openapi,
  info: { title: "escaped", version: "1.0.0" },
  components: {
    schemas: {
      "A/B": {
        type: "object",
        properties: { x: { type: "number" } },
        required: ["x"],
      },
    },
    headers: { "H/1": { schema: { type: "string" } } },
    pathItems: {
      "W/1": {
        post: {
          requestBody: {
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/A~1B" },
              },
            },
          },
          responses: {},
        },
      },
    },
  },
  paths: {
    "/x": {
      post: {
        parameters: [{ $ref: "#/components/headers/H~11" }],
        responses: {},
      },
    },
  },
  webhooks: { w: { $ref: "#/components/pathItems/W~11" } },
});

/** Every walker's answer over one key, with the key spelled neutrally. */
const walk = (key: string, token: string): string => {
  const reference: OpenApi.IJsonSchema = {
    $ref: `#/components/schemas/${token}`,
  };
  const document: OpenApi.IDocument = OpenApiConverter.upgradeDocument({
    openapi: "3.0.3",
    info: { title: "walk", version: "1.0.0" },
    components: {
      schemas: {
        [key]: {
          type: "object",
          properties: { a: { type: "string" } },
          required: ["a"],
        },
      },
    },
    paths: {
      "/x": {
        get: {
          parameters: [{ name: "q", in: "query", schema: reference }],
          responses: { 200: { description: "ok" } },
        },
      },
    },
  } as unknown as OpenApiV3.IDocument);
  const components: OpenApi.IComponents = document.components;
  let visited: number = 0;
  OpenApiTypeChecker.visit({
    components,
    schema: reference,
    closure: () => ++visited,
  });
  const route = HttpMigration.application(document).routes[0];
  const answers = {
    escape: OpenApiTypeChecker.escape({
      components,
      schema: reference,
      recursive: false,
    }),
    unreference: OpenApiTypeChecker.unreference({
      components,
      schema: reference,
    }),
    visited,
    covers: OpenApiTypeChecker.covers({
      components,
      x: reference,
      y: { type: "number" },
    }),
    query: route?.query,
    functions: HttpLlm.application({ document }).functions.map(
      (func) => func.parameters,
    ),
  };
  return JSON.stringify(answers)
    .split(token)
    .join("KEY")
    .split(JSON.stringify(key).slice(1, -1))
    .join("KEY");
};
