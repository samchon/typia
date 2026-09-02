import { TestValidator } from "@nestia/e2e";
import { OpenApi, OpenApiV3, OpenApiV3_1, OpenApiV3_2 } from "@typia/interface";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies the version boundary for base64-encoded string schemas.
 *
 * Typia's emended schema keeps the legacy `format: "byte"` spelling as its
 * canonical metadata, while raw OpenAPI 3.1 and 3.2 use JSON Schema's
 * `contentEncoding: "base64"`. Exact equivalents normalize in either direction;
 * custom formats, encodings, media types, and conflicts survive.
 *
 * 1. Upgrade raw 3.0, 3.1, and 3.2 schemas through direct, component, and document
 *    paths.
 * 2. Downgrade canonical byte, custom, and conflicting annotations to each raw
 *    dialect.
 * 3. Round-trip registered 3.0 extensions and annotated string-enum constants
 *    without data loss.
 */
export const test_json_schema_byte_content_encoding = (): void => {
  const components: OpenApiV3_1.IComponents = {
    schemas: {
      Binary: {
        type: "string",
        contentEncoding: "base64",
        contentMediaType: "application/octet-stream",
      },
    },
  };
  const raw: OpenApiV3_1.IJsonSchema = {
    type: "object",
    properties: {
      direct: {
        type: "string",
        contentEncoding: "base64",
        contentMediaType: "image/png",
      },
      nested: {
        type: "array",
        items: { type: "string", contentEncoding: "base64" },
      },
      alternatives: {
        oneOf: [
          { type: "string", contentEncoding: "base64" },
          { $ref: "#/components/schemas/Binary" },
        ],
      },
      custom: {
        type: "string",
        format: "uuid",
        contentEncoding: "base64",
      },
      unrelated: {
        type: "string",
        contentEncoding: "quoted-printable",
      },
      conflict: {
        type: "string",
        format: "byte",
        contentEncoding: "gzip",
      },
    },
  };
  const canonical: OpenApi.IJsonSchema = clean(
    OpenApiConverter.upgradeSchema({ components, schema: raw }),
  );
  TestValidator.equals("upgrade 3.1", canonical, {
    type: "object",
    properties: {
      direct: {
        type: "string",
        format: "byte",
        contentMediaType: "image/png",
      },
      nested: {
        type: "array",
        items: { type: "string", format: "byte" },
      },
      alternatives: {
        oneOf: [
          { type: "string", format: "byte" },
          { $ref: "#/components/schemas/Binary" },
        ],
      },
      custom: {
        type: "string",
        format: "uuid",
        contentEncoding: "base64",
      },
      unrelated: {
        type: "string",
        contentEncoding: "quoted-printable",
      },
      conflict: {
        type: "string",
        format: "byte",
        contentEncoding: "gzip",
      },
    },
  });
  TestValidator.equals(
    "upgrade 3.1 components",
    clean(OpenApiConverter.upgradeComponents(components)),
    {
      schemas: {
        Binary: {
          type: "string",
          format: "byte",
          contentMediaType: "application/octet-stream",
        },
      },
    },
  );

  const document: OpenApiV3_1.IDocument = {
    openapi: "3.1.0",
    info: { title: "byte boundary", version: "1.0.0" },
    paths: {
      "/binary": {
        post: {
          requestBody: {
            content: {
              "application/octet-stream": {
                schema: { type: "string", contentEncoding: "base64" },
              },
            },
          },
          responses: {
            "200": {
              description: "success",
              content: {
                "application/json": {
                  schema: { type: "string", contentEncoding: "base64" },
                },
              },
            },
          },
        },
      },
    },
    components,
  };
  const canonicalDocument: OpenApi.IDocument =
    OpenApiConverter.upgradeDocument(document);
  TestValidator.equals(
    "upgrade 3.1 document request",
    clean(
      canonicalDocument.paths?.["/binary"]?.post?.requestBody?.content?.[
        "application/octet-stream"
      ]?.schema,
    ),
    { type: "string", format: "byte" },
  );
  const downgradedDocument: OpenApiV3_1.IDocument =
    OpenApiConverter.downgradeDocument(canonicalDocument, "3.1");
  const response = downgradedDocument.paths?.["/binary"]?.post?.responses?.[
    "200"
  ] as OpenApiV3_1.IOperation.IResponse;
  TestValidator.equals(
    "downgrade 3.1 document response",
    clean(response.content?.["application/json"]?.schema),
    { type: "string", contentEncoding: "base64" },
  );

  const raw31: OpenApiV3_1.IJsonSchema = clean(
    OpenApiConverter.downgradeSchema({
      components: {},
      downgraded: {},
      schema: canonical,
      version: "3.1",
    }),
  );
  TestValidator.equals("downgrade 3.1", raw31, raw);

  const canonical30: OpenApi.IJsonSchema = {
    type: "object",
    properties: {
      direct: {
        type: "string",
        format: "byte",
        contentMediaType: "image/png",
      },
      nested: {
        type: "array",
        items: { type: "string", format: "byte" },
      },
      customEncoding: {
        type: "string",
        contentEncoding: "quoted-printable",
        contentMediaType: "text/plain",
      },
      formatConflict: {
        type: "string",
        format: "uuid",
        contentEncoding: "base64",
      },
      encodingConflict: {
        type: "string",
        format: "byte",
        contentEncoding: "gzip",
      },
    },
  };
  const raw30: OpenApiV3.IJsonSchema = clean(
    OpenApiConverter.downgradeSchema({
      components: {},
      downgraded: {},
      schema: canonical30,
      version: "3.0",
    }),
  );
  TestValidator.equals("downgrade 3.0", raw30, {
    type: "object",
    properties: {
      direct: {
        type: "string",
        format: "byte",
        "x-jsonschema-contentMediaType": "image/png",
      },
      nested: {
        type: "array",
        items: { type: "string", format: "byte" },
      },
      customEncoding: {
        type: "string",
        "x-jsonschema-contentEncoding": "quoted-printable",
        "x-jsonschema-contentMediaType": "text/plain",
      },
      formatConflict: {
        type: "string",
        format: "uuid",
        "x-jsonschema-contentEncoding": "base64",
      },
      encodingConflict: {
        type: "string",
        format: "byte",
        "x-jsonschema-contentEncoding": "gzip",
      },
    },
  });
  TestValidator.equals(
    "round-trip 3.0 registered extensions",
    clean(OpenApiConverter.upgradeSchema({ components: {}, schema: raw30 })),
    canonical30,
  );
  TestValidator.equals(
    "preserve non-string registered extension",
    clean(
      OpenApiConverter.upgradeSchema({
        components: {},
        schema: {
          type: "object",
          "x-jsonschema-contentEncoding": "opaque-metadata",
        } as OpenApiV3.IJsonSchema,
      }),
    ) as unknown as Record<string, unknown>,
    {
      type: "object",
      "x-jsonschema-contentEncoding": "opaque-metadata",
    },
  );

  const raw30Document: OpenApiV3.IDocument = {
    openapi: "3.0.4",
    info: { title: "registered content extensions", version: "1.0.0" },
    paths: {},
    components: {
      schemas: {
        Encoded: {
          type: "string",
          enum: ["QQ==", "Qg=="],
          format: "uuid",
          "x-jsonschema-contentEncoding": "base64",
          "x-jsonschema-contentMediaType": "image/png",
        },
      },
    },
  };
  TestValidator.equals(
    "upgrade 3.0 document registered extensions",
    clean(
      OpenApiConverter.upgradeDocument(raw30Document).components.schemas
        ?.Encoded,
    ),
    {
      oneOf: [
        {
          const: "QQ==",
          format: "uuid",
          contentEncoding: "base64",
          contentMediaType: "image/png",
        },
        {
          const: "Qg==",
          format: "uuid",
          contentEncoding: "base64",
          contentMediaType: "image/png",
        },
      ],
    },
  );

  const enum31: OpenApiV3_1.IJsonSchema = {
    type: "string",
    enum: ["QQ==", "Qg=="],
    contentEncoding: "base64",
    contentMediaType: "image/png",
  };
  const canonicalEnum: OpenApi.IJsonSchema = clean(
    OpenApiConverter.upgradeSchema({ components: {}, schema: enum31 }),
  );
  TestValidator.equals("upgrade 3.1 annotated enum", canonicalEnum, {
    oneOf: [
      { const: "QQ==", format: "byte", contentMediaType: "image/png" },
      { const: "Qg==", format: "byte", contentMediaType: "image/png" },
    ],
  });
  TestValidator.equals(
    "downgrade 3.1 annotated enum",
    clean(
      OpenApiConverter.downgradeSchema({
        components: {},
        downgraded: {},
        schema: canonicalEnum,
        version: "3.1",
      }),
    ),
    {
      oneOf: [
        {
          const: "QQ==",
          contentEncoding: "base64",
          contentMediaType: "image/png",
        },
        {
          const: "Qg==",
          contentEncoding: "base64",
          contentMediaType: "image/png",
        },
      ],
    },
  );
  TestValidator.equals(
    "downgrade 3.0 annotated enum",
    clean(
      OpenApiConverter.downgradeSchema({
        components: {},
        downgraded: {},
        schema: canonicalEnum,
        version: "3.0",
      }),
    ),
    {
      type: "string",
      enum: ["QQ==", "Qg=="],
      format: "byte",
      "x-jsonschema-contentMediaType": "image/png",
    },
  );

  const raw32: OpenApiV3_2.IJsonSchema = {
    type: "string",
    contentEncoding: "base64",
  };
  TestValidator.equals(
    "upgrade 3.2",
    clean(OpenApiConverter.upgradeSchema({ components: {}, schema: raw32 })),
    { type: "string", format: "byte" },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
