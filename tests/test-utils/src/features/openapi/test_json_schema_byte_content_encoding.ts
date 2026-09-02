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

  const raw30: OpenApiV3.IJsonSchema = clean(
    OpenApiConverter.downgradeSchema({
      components: {},
      downgraded: {},
      schema: {
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
        },
      },
      version: "3.0",
    }),
  );
  TestValidator.equals("downgrade 3.0", raw30, {
    type: "object",
    properties: {
      direct: {
        type: "string",
        format: "byte",
      },
      nested: {
        type: "array",
        items: { type: "string", format: "byte" },
      },
    },
  });

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
