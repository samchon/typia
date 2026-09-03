import { TestValidator } from "@nestia/e2e";
import { OpenApi, OpenApiV3, OpenApiV3_1, OpenApiV3_2 } from "@typia/interface";
import {
  OpenApiConverter,
  OpenApiTypeChecker,
  OpenApiV3_1TypeChecker,
} from "@typia/utils";

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
 * 4. Preserve compatible constants and reject contradictory sibling constraints on
 *    both ordinary and mixed declarations without widening their values.
 * 5. Resolve escaped, cyclic, deep, and shared constant references without raw
 *    keyword leakage, stack overflow, or repeated graph expansion.
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
    "public string constant annotations",
    readStringConstantAnnotations(
      (canonicalEnum as OpenApi.IJsonSchema.IOneOf).oneOf[0]!,
    ),
    { format: "byte", contentMediaType: "image/png" },
  );
  const rawEnum31: OpenApiV3_1.IJsonSchema = clean(
    OpenApiConverter.downgradeSchema({
      components: {},
      downgraded: {},
      schema: canonicalEnum,
      version: "3.1",
    }),
  );
  TestValidator.equals("downgrade 3.1 annotated enum", rawEnum31, {
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
  });
  TestValidator.equals(
    "round-trip 3.1 annotated constants",
    clean(
      OpenApiConverter.upgradeSchema({
        components: {},
        schema: rawEnum31,
      }),
    ),
    canonicalEnum,
  );
  const rawEnum32: OpenApiV3_2.IJsonSchema = {
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
  };
  TestValidator.equals(
    "upgrade 3.2 annotated constants",
    clean(
      OpenApiConverter.upgradeSchema({
        components: {},
        schema: rawEnum32,
      }),
    ),
    canonicalEnum,
  );
  for (const [version, schema] of [
    [
      "3.1",
      {
        type: "string",
        const: "QQ==",
        contentEncoding: "base64",
        contentMediaType: "image/png",
      } satisfies OpenApiV3_1.IJsonSchema.IConstant,
    ],
    [
      "3.2",
      {
        type: "string",
        const: "QQ==",
        contentEncoding: "base64",
        contentMediaType: "image/png",
      } satisfies OpenApiV3_2.IJsonSchema.IConstant,
    ],
  ] as const)
    TestValidator.equals(
      `upgrade ${version} typed annotated constant`,
      clean(OpenApiConverter.upgradeSchema({ components: {}, schema })),
      { const: "QQ==", format: "byte", contentMediaType: "image/png" },
    );
  const mixedConstant31 = {
    type: ["string", "null"],
    const: "QQ==",
    contentEncoding: "base64",
  } as OpenApiV3_1.IJsonSchema.IMixed;
  const mixedConstant32 = {
    type: ["string", "null"],
    const: "QQ==",
    contentEncoding: "base64",
  } as OpenApiV3_2.IJsonSchema.IMixed;
  TestValidator.equals(
    "public mixed constant type guard contract",
    exactConstantGuard(mixedConstant31) &&
      widenedConstantGuard(mixedConstant31),
    true,
  );
  for (const [version, schema] of [
    ["3.1", mixedConstant31],
    ["3.2", mixedConstant32],
  ] as const)
    TestValidator.equals(
      `upgrade ${version} mixed annotated constant once`,
      clean(OpenApiConverter.upgradeSchema({ components: {}, schema })),
      { const: "QQ==", format: "byte" },
    );
  for (const [version, schema] of [
    [
      "3.1",
      {
        type: ["string", "null"],
        const: "x",
        enum: ["x", null],
      } as OpenApiV3_1.IJsonSchema.IMixed,
    ],
    [
      "3.2",
      {
        type: ["string", "null"],
        const: "x",
        enum: ["x", null],
      } as OpenApiV3_2.IJsonSchema.IMixed,
    ],
  ] as const)
    TestValidator.equals(
      `upgrade ${version} mixed constant intersects nullable enum`,
      clean(OpenApiConverter.upgradeSchema({ components: {}, schema })),
      { const: "x" },
    );
  for (const [label, schema] of [
    [
      "ordinary incompatible type",
      {
        type: "string",
        const: 1,
      } as OpenApiV3_1.IJsonSchema.IConstant,
    ],
    [
      "ordinary incompatible string constraint",
      {
        type: "string",
        const: "x",
        minLength: 2,
      } as OpenApiV3_1.IJsonSchema.IConstant,
    ],
    [
      "incompatible type",
      {
        type: ["string", "null"],
        const: 1,
      } as OpenApiV3_1.IJsonSchema.IMixed,
    ],
    [
      "incompatible enum",
      {
        type: ["string", "null"],
        const: "x",
        enum: ["y", null],
      } as OpenApiV3_1.IJsonSchema.IMixed,
    ],
    [
      "incompatible oneOf",
      {
        type: ["string", "null"],
        const: "x",
        oneOf: [{ const: "y" }],
      } as OpenApiV3_1.IJsonSchema.IMixed,
    ],
    [
      "incompatible anyOf",
      {
        type: ["string", "null"],
        const: "x",
        anyOf: [{ const: "y" }, { const: "z" }],
      } as OpenApiV3_1.IJsonSchema.IMixed,
    ],
    [
      "incompatible allOf",
      {
        type: ["string", "null"],
        const: "x",
        allOf: [{ minLength: 2 } as OpenApiV3_1.IJsonSchema.IString],
      } as OpenApiV3_1.IJsonSchema.IMixed,
    ],
    [
      "incompatible string constraint",
      {
        type: ["string", "null"],
        const: "x",
        minLength: 2,
      } as OpenApiV3_1.IJsonSchema.IMixed,
    ],
  ] as const)
    TestValidator.equals(
      `upgrade 3.1 constant rejects ${label}`,
      clean(OpenApiConverter.upgradeSchema({ components: {}, schema })),
      { oneOf: [] },
    );
  TestValidator.equals(
    "upgrade 3.1 ordinary constant preserves compatible constraint",
    clean(
      OpenApiConverter.upgradeSchema({
        components: {},
        schema: {
          type: "string",
          const: "x",
          minLength: 1,
        } as OpenApiV3_1.IJsonSchema.IConstant,
      }),
    ),
    { const: "x", minLength: 1 },
  );
  for (const [label, schema, expected] of [
    [
      "numeric keywords",
      {
        type: ["number", "null"],
        const: 1,
        minimum: 0,
      } as OpenApiV3_1.IJsonSchema.IMixed,
      { const: 1 },
    ],
    [
      "composition metadata",
      {
        type: ["string", "null"],
        const: "x",
        oneOf: [{ const: "x" }],
        discriminator: { propertyName: "kind" },
      } as OpenApiV3_1.IJsonSchema.IMixed,
      { const: "x" },
    ],
    [
      "object keywords",
      {
        type: ["string", "object"],
        const: "x",
        properties: { value: { type: "string" } },
        required: ["value"],
      } as unknown as OpenApiV3_1.IJsonSchema.IMixed,
      { const: "x" },
    ],
  ] as const)
    TestValidator.equals(
      `upgrade 3.1 constant consumes raw ${label}`,
      clean(OpenApiConverter.upgradeSchema({ components: {}, schema })),
      expected as OpenApi.IJsonSchema,
    );
  TestValidator.equals(
    "upgrade 3.1 mixed constant accepts compatible oneOf",
    clean(
      OpenApiConverter.upgradeSchema({
        components: {},
        schema: {
          type: ["string", "null"],
          const: "x",
          oneOf: [{ const: "x" }],
        } as OpenApiV3_1.IJsonSchema.IMixed,
      }),
    ),
    { const: "x" },
  );
  for (const [label, target, expected] of [
    ["compatible", { const: "x" }, { const: "x" }],
    ["incompatible", { const: "y" }, { oneOf: [] }],
  ] as const)
    TestValidator.equals(
      `upgrade 3.1 mixed constant ${label} reference`,
      clean(
        OpenApiConverter.upgradeSchema({
          components: { schemas: { Target: target } },
          schema: {
            type: ["string", "null"],
            const: "x",
            $ref: "#/components/schemas/Target",
          } as OpenApiV3_1.IJsonSchema.IMixed,
        }),
      ),
      expected as unknown as OpenApi.IJsonSchema,
    );
  TestValidator.equals(
    "upgrade 3.1 mixed constant rejects unresolved reference",
    clean(
      OpenApiConverter.upgradeSchema({
        components: {},
        schema: {
          type: ["string", "null"],
          const: "x",
          $ref: "#/components/schemas/Missing",
        } as OpenApiV3_1.IJsonSchema.IMixed,
      }),
    ),
    { oneOf: [] },
  );
  for (const [key, reference] of [
    ["A/B", "#/components/schemas/A~1B"],
    ["A~B", "#/components/schemas/A~0B"],
    ["A B", "#/components/schemas/A%20B"],
  ] as const)
    TestValidator.equals(
      `upgrade 3.1 mixed constant resolves escaped reference ${key}`,
      clean(
        OpenApiConverter.upgradeSchema({
          components: { schemas: { [key]: { const: "x" } } },
          schema: {
            type: ["string", "null"],
            const: "x",
            $ref: reference,
          } as OpenApiV3_1.IJsonSchema.IMixed,
        }),
      ),
      { const: "x" },
    );
  TestValidator.equals(
    "upgrade 3.1 mixed constant consumes recursive reference",
    clean(
      OpenApiConverter.upgradeSchema({
        components: { schemas: { Target: { const: "x" } } },
        schema: {
          type: ["string", "null"],
          const: "x",
          $recursiveRef: "#/components/schemas/Target",
        } as unknown as OpenApiV3_1.IJsonSchema.IMixed,
      }),
    ),
    { const: "x" },
  );
  TestValidator.equals(
    "upgrade 3.1 mixed constant checks constraints across a reference cycle",
    clean(
      OpenApiConverter.upgradeSchema({
        components: {
          schemas: {
            A: { $ref: "#/components/schemas/B" },
            B: {
              allOf: [
                { $ref: "#/components/schemas/A" },
                {
                  type: "string",
                  minLength: 2,
                } as OpenApiV3_1.IJsonSchema.IString,
              ],
            },
          },
        },
        schema: {
          type: ["string", "null"],
          const: "x",
          $ref: "#/components/schemas/A",
        } as OpenApiV3_1.IJsonSchema.IMixed,
      }),
    ),
    { oneOf: [] },
  );
  for (const allOf of [
    [{ $ref: "#/components/schemas/B" }, { const: "y" }],
    [{ const: "y" }, { $ref: "#/components/schemas/B" }],
  ] satisfies OpenApiV3_1.IJsonSchema[][])
    TestValidator.equals(
      "upgrade 3.1 mixed constant keeps cyclic allOf order invariant",
      clean(
        OpenApiConverter.upgradeSchema({
          components: {
            schemas: {
              A: { allOf },
              B: { $ref: "#/components/schemas/A" },
            },
          },
          schema: {
            type: ["string", "null"],
            const: "x",
            anyOf: [
              { $ref: "#/components/schemas/A" },
              { $ref: "#/components/schemas/B" },
            ],
          } as OpenApiV3_1.IJsonSchema.IMixed,
        }),
      ),
      { oneOf: [] },
    );
  for (const anyOf of [
    [{ $ref: "#/components/schemas/Cycle" }, { const: "x" }],
    [{ const: "x" }, { $ref: "#/components/schemas/Cycle" }],
  ] satisfies OpenApiV3_1.IJsonSchema[][])
    TestValidator.equals(
      "upgrade 3.1 mixed constant rejects recursive alternatives in any order",
      clean(
        OpenApiConverter.upgradeSchema({
          components: {
            schemas: {
              Cycle: { $ref: "#/components/schemas/Cycle" },
            },
          },
          schema: {
            type: ["string", "null"],
            const: "x",
            anyOf,
          } as OpenApiV3_1.IJsonSchema.IMixed,
        }),
      ),
      { oneOf: [] },
    );
  for (const allOf of [
    [{ const: "y" }, { $ref: "#/components/schemas/Cycle" }],
    [{ $ref: "#/components/schemas/Cycle" }, { const: "y" }],
  ] satisfies OpenApiV3_1.IJsonSchema[][])
    TestValidator.equals(
      "upgrade 3.1 mixed constant finds recursion behind false conjunctions",
      clean(
        OpenApiConverter.upgradeSchema({
          components: {
            schemas: {
              Cycle: { $ref: "#/components/schemas/Cycle" },
            },
          },
          schema: {
            type: ["string", "null"],
            const: "x",
            anyOf: [{ allOf }, { const: "x" }],
          } as OpenApiV3_1.IJsonSchema.IMixed,
        }),
      ),
      { oneOf: [] },
    );
  for (const branch of [
    {
      const: "y",
      $ref: "#/components/schemas/Cycle",
    },
    {
      allOf: [{ const: "y" }, { $ref: "#/components/schemas/Cycle" }],
    },
  ] as OpenApiV3_1.IJsonSchema[])
    TestValidator.equals(
      "upgrade 3.1 mixed constant rejects equivalent recursive spellings",
      clean(
        OpenApiConverter.upgradeSchema({
          components: {
            schemas: {
              Cycle: { $ref: "#/components/schemas/Cycle" },
            },
          },
          schema: {
            type: ["string", "null"],
            const: "x",
            anyOf: [branch, { const: "x" }],
          } as OpenApiV3_1.IJsonSchema.IMixed,
        }),
      ),
      { oneOf: [] },
    );

  const cyclicDagComponents: OpenApiV3_1.IComponents = {
    schemas: {
      Cycle: { $ref: "#/components/schemas/Cycle" },
      Dag64: { $ref: "#/components/schemas/Cycle" },
    },
  };
  for (let i: number = 63; i >= 0; --i)
    cyclicDagComponents.schemas![`Dag${i}`] = {
      allOf: [
        { $ref: `#/components/schemas/Dag${i + 1}` },
        { $ref: `#/components/schemas/Dag${i + 1}` },
      ],
    };
  TestValidator.equals(
    "upgrade 3.1 mixed constant bounds cyclic shared reference graphs",
    clean(
      OpenApiConverter.upgradeSchema({
        components: cyclicDagComponents,
        schema: {
          type: ["string", "null"],
          const: "x",
          $ref: "#/components/schemas/Dag0",
        } as OpenApiV3_1.IJsonSchema.IMixed,
      }),
    ),
    { oneOf: [] },
  );

  const deepComponents: OpenApiV3_1.IComponents = { schemas: {} };
  for (let i: number = 4_999; i >= 0; --i)
    deepComponents.schemas![`Deep${i}`] =
      i === 4_999
        ? { const: "x" }
        : { $ref: `#/components/schemas/Deep${i + 1}` };
  TestValidator.equals(
    "upgrade 3.1 mixed constant follows deep reference chains iteratively",
    clean(
      OpenApiConverter.upgradeSchema({
        components: deepComponents,
        schema: {
          type: ["string", "null"],
          const: "x",
          $ref: "#/components/schemas/Deep0",
        } as OpenApiV3_1.IJsonSchema.IMixed,
      }),
    ),
    { const: "x" },
  );

  const dagComponents: OpenApiV3_1.IComponents = {
    schemas: { Dag64: { const: "x" } },
  };
  for (let i: number = 63; i >= 0; --i)
    dagComponents.schemas![`Dag${i}`] = {
      allOf: [
        { $ref: `#/components/schemas/Dag${i + 1}` },
        { $ref: `#/components/schemas/Dag${i + 1}` },
      ],
    };
  TestValidator.equals(
    "upgrade 3.1 mixed constant memoizes shared reference graphs",
    clean(
      OpenApiConverter.upgradeSchema({
        components: dagComponents,
        schema: {
          type: ["string", "null"],
          const: "x",
          $ref: "#/components/schemas/Dag0",
        } as OpenApiV3_1.IJsonSchema.IMixed,
      }),
    ),
    { const: "x" },
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

type ConstantGuard = (
  schema: OpenApiV3_1.IJsonSchema,
) => schema is
  | OpenApiV3_1.IJsonSchema.IConstant
  | OpenApiV3_1.IJsonSchema.IMixed;

const exactConstantGuard: typeof OpenApiV3_1TypeChecker.isConstant = (
  schema,
): schema is
  | OpenApiV3_1.IJsonSchema.IConstant
  | OpenApiV3_1.IJsonSchema.IMixed => OpenApiV3_1TypeChecker.isConstant(schema);
const widenedConstantGuard: ConstantGuard = OpenApiV3_1TypeChecker.isConstant;

const readStringConstantAnnotations = (
  schema: OpenApi.IJsonSchema,
):
  | Pick<
      OpenApi.IJsonSchema.IConstant,
      | "format"
      | "pattern"
      | "contentMediaType"
      | "contentEncoding"
      | "minLength"
      | "maxLength"
    >
  | undefined => {
  if (
    OpenApiTypeChecker.isConstant(schema) === false ||
    typeof schema.const !== "string"
  )
    return undefined;
  return clean({
    format: schema.format,
    pattern: schema.pattern,
    contentMediaType: schema.contentMediaType,
    contentEncoding: schema.contentEncoding,
    minLength: schema.minLength,
    maxLength: schema.maxLength,
  });
};
