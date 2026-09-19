import { OpenApi, OpenApiV3, SwaggerV2 } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import {
  HttpLlm,
  HttpMigration,
  LlmSchemaConverter,
  OpenApiConverter,
  OpenApiTypeChecker,
  OpenApiValidator,
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
 *    and assert they answer alike; a key with a space resolves as written, and
 *    a malformed `~` escape names no component.
 * 6. Assert the type checker, the validator, and the LLM converter answer every
 *    spelling alike, including a percent-encoded separator and a literal `%`.
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

  // a key holding a space, as Swagger 2.0 allows and the repository's own
  // Semantic Scholar fixture carries, resolves as written under RFC 6901
  const spaced = OpenApiTypeChecker.escape({
    components: {
      schemas: { "Title Match": { type: "object", description: "Spaced." } },
    },
    schema: { $ref: "#/components/schemas/Title Match" },
    recursive: false,
  });
  TestEquality.equals<unknown>(
    "space in key",
    {
      success: true,
      description:
        "Description of the current {@link Title Match} type:\n\n> Spaced.",
    },
    {
      success: spaced.success,
      description: spaced.success ? spaced.value.description : null,
    },
  );

  // only a `~` escape that is neither `~0` nor `~1` is malformed and names
  // no component
  const malformed = OpenApiTypeChecker.escape({
    components: {
      schemas: { "A~1B": { type: "object", description: "Literal." } },
    },
    schema: { $ref: "#/components/schemas/A~2B" },
    recursive: false,
  });
  TestEquality.equals<unknown>(
    "malformed token resolves nothing",
    {
      success: false,
      message: 'unable to find reference type "#/components/schemas/A~2B".',
    },
    {
      success: malformed.success,
      message: malformed.success ? null : malformed.error.reasons[0]?.message,
    },
  );

  // every reader of a document answers each spelling alike: the type checker,
  // the validator, and the LLM converter resolve the same references and
  // reject the same ones (#2416)
  TestEquality.equals<unknown>(
    "readers agree",
    {
      "#/components/schemas/Plain": true,
      "#/components/schemas/A~1B": true,
      "#/components/schemas/A%20B": true,
      "#/components/schemas/A B": true,
      "#/components/schemas/100%": true,
      "#/components/schemas/A%2FB": false,
      "#/components/schemas/A/B": false,
      "#/components/schemas/A~2B": false,
      "#/components/schemas/Missing": false,
    },
    Object.fromEntries(
      Object.entries(readers()).map(([reference, answers]) => [
        reference,
        answers.every((answer) => answer === true)
          ? true
          : answers.every((answer) => answer === false)
            ? false
            : answers,
      ]),
    ),
  );

  // the same walks over an escaped and a plain key must answer alike
  TestEquality.equals("walkers", walk("QP", "QP"), walk("Q/P", "Q~1P"));
};

/** Whether the type checker, the validator, and the LLM converter resolve. */
const readers = (): Record<string, boolean[]> => {
  const components: OpenApi.IComponents = {
    schemas: Object.fromEntries(
      ["Plain", "A/B", "A B", "100%"].map((key) => [
        key,
        { type: "number" } satisfies OpenApi.IJsonSchema,
      ]),
    ),
  };
  return Object.fromEntries(
    [
      "#/components/schemas/Plain",
      "#/components/schemas/A~1B",
      "#/components/schemas/A%20B",
      "#/components/schemas/A B",
      "#/components/schemas/100%",
      "#/components/schemas/A%2FB",
      "#/components/schemas/A/B",
      "#/components/schemas/A~2B",
      "#/components/schemas/Missing",
    ].map((reference) => {
      const schema: OpenApi.IJsonSchema = { $ref: reference };
      return [
        reference,
        [
          OpenApiTypeChecker.escape({ components, schema, recursive: false })
            .success,
          OpenApiValidator.validate({
            components,
            schema,
            value: 1,
            required: true,
          }).success,
          LlmSchemaConverter.schema({ components, schema, $defs: {} }).success,
        ],
      ];
    }),
  );
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
