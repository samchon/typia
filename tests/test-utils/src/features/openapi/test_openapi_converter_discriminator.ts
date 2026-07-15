import { TestValidator } from "@nestia/e2e";
import { OpenApi, OpenApiV3, OpenApiV3_1, OpenApiV3_2 } from "@typia/interface";
import { OpenApiConverter } from "@typia/utils";
import typia, { IJsonSchemaCollection } from "typia";

/**
 * Verifies OpenAPI 3.x conversion preserves valid discriminators.
 *
 * The v3.1 schema upgrader normalizes composite schemas into a fresh `oneOf`. A
 * discriminator belongs to that topology only while a source `oneOf` still
 * produces a `oneOf`; synthetic or collapsed unions must not inherit it.
 *
 * 1. Upgrade and downgrade a generated tagged union through every 3.x path.
 * 2. Exercise mapping-less and nested discriminators plus input immutability.
 * 3. Assert synthetic, collapsed, and Swagger 2.0 controls stay untagged.
 */
export const test_openapi_converter_discriminator = (): void => {
  for (const version of ["3.1", "3.2"] as const) {
    const fixture: IFixture = createFixture();
    const before: string = JSON.stringify(fixture.components);
    const outputs: OpenApi.IJsonSchema[] =
      version === "3.1" ? upgradeV31(fixture) : upgradeV32(fixture);

    for (const [index, output] of outputs.entries())
      TestValidator.equals(
        `${version} public upgrade path ${index}`,
        clean(output),
        clean(fixture.choice),
      );
    TestValidator.equals(
      `${version} mapping order`,
      Object.entries(
        (outputs[0] as OpenApi.IJsonSchema.IOneOf).discriminator!.mapping!,
      ),
      [
        ["a", "#/components/schemas/IOptionA"],
        ["b", "#/components/schemas/IOptionB"],
      ],
    );
    TestValidator.equals(
      `${version} input immutability`,
      JSON.stringify(fixture.components),
      before,
    );
    TestValidator.predicate(
      `${version} discriminator is copied`,
      (outputs[0] as OpenApi.IJsonSchema.IOneOf).discriminator !==
        fixture.choice.discriminator,
    );
    TestValidator.predicate(
      `${version} mapping is copied`,
      (outputs[0] as OpenApi.IJsonSchema.IOneOf).discriminator!.mapping !==
        fixture.choice.discriminator!.mapping,
    );
  }
  {
    const fixture: IV30Fixture = createV30Fixture();
    const before: string = JSON.stringify(fixture.components);
    const outputs: OpenApi.IJsonSchema[] = upgradeV30(fixture);

    for (const [index, output] of outputs.entries())
      TestValidator.equals(
        `3.0 public upgrade path ${index}`,
        clean(output),
        clean(fixture.choice),
      );
    TestValidator.equals(
      "3.0 mapping order",
      Object.entries(
        (outputs[0] as OpenApi.IJsonSchema.IOneOf).discriminator!.mapping!,
      ),
      [
        ["a", "#/components/schemas/IOptionA"],
        ["b", "#/components/schemas/IOptionB"],
      ],
    );
    TestValidator.equals(
      "3.0 input immutability",
      JSON.stringify(fixture.components),
      before,
    );
    TestValidator.predicate(
      "3.0 discriminator is copied",
      (outputs[0] as OpenApi.IJsonSchema.IOneOf).discriminator !==
        fixture.choice.discriminator,
    );
  }
  for (const version of ["3.0", "3.1"] as const) {
    const fixture: IFixture = createFixture();
    const before: string = JSON.stringify(fixture.components);
    const outputs: Array<OpenApiV3.IJsonSchema | OpenApiV3_1.IJsonSchema> =
      version === "3.0" ? downgradeV30(fixture) : downgradeV31(fixture);

    for (const [index, output] of outputs.entries())
      TestValidator.equals(
        `${version} public downgrade path ${index}`,
        clean(output),
        clean(fixture.choice),
      );
    TestValidator.equals(
      `${version} downgrade input immutability`,
      JSON.stringify(fixture.components),
      before,
    );
    TestValidator.predicate(
      `${version} downgraded discriminator is copied`,
      (outputs[0] as OpenApiV3.IJsonSchema.IOneOf).discriminator !==
        fixture.choice.discriminator,
    );
  }

  const nestedFixture: IFixture = createFixture();
  const nestedInput: OpenApiV3_1.IJsonSchema.IObject = {
    type: "object",
    properties: {
      explicit: toV31Schema(nestedFixture.choice),
      implicit: {
        oneOf: nestedFixture.choice.oneOf.map(toV31Schema),
        discriminator: {
          propertyName: "category",
        },
      },
    },
    required: ["explicit", "implicit"],
  };
  const nested: OpenApi.IJsonSchema = OpenApiConverter.upgradeSchema({
    components: toV31Components(nestedFixture.components),
    schema: nestedInput,
  });
  TestValidator.equals("nested discriminators", clean(nested), {
    type: "object",
    properties: {
      explicit: clean(nestedFixture.choice),
      implicit: {
        oneOf: clean(nestedFixture.choice.oneOf),
        discriminator: {
          propertyName: "category",
        },
      },
    },
    required: ["explicit", "implicit"],
  });

  TestValidator.equals(
    "nullable atomic union",
    clean(
      OpenApiConverter.upgradeSchema({
        components: {},
        schema: { type: "string", nullable: true },
      }),
    ),
    {
      oneOf: [{ type: "string" }, { type: "null" }],
    },
  );
  TestValidator.equals(
    "ordinary anyOf union",
    clean(
      OpenApiConverter.upgradeSchema({
        components: {},
        schema: { anyOf: [{ type: "string" }, { type: "number" }] },
      }),
    ),
    {
      oneOf: [{ type: "string" }, { type: "number" }],
    },
  );
  TestValidator.equals(
    "enum-derived union",
    clean(
      OpenApiConverter.upgradeSchema({
        components: {},
        schema: { type: "string", enum: ["alpha", "beta"] },
      }),
    ),
    {
      oneOf: [{ const: "alpha" }, { const: "beta" }],
    },
  );

  const rewrittenFixture: IFixture = createFixture();
  const rewritten: OpenApi.IJsonSchema = OpenApiConverter.upgradeSchema({
    components: toV31Components(rewrittenFixture.components),
    schema: {
      oneOf: [
        { type: "string", enum: ["alpha", "beta"] },
        toV31Schema(rewrittenFixture.choice.oneOf[0]!),
      ],
      discriminator: rewrittenFixture.choice.discriminator,
    },
  });
  TestValidator.equals("rewritten oneOf branch count", clean(rewritten), {
    oneOf: [
      { const: "alpha" },
      { const: "beta" },
      clean(rewrittenFixture.choice.oneOf[0]!),
    ],
  });

  const nullableFixture: IFixture = createFixture();
  const nullable: OpenApi.IJsonSchema = OpenApiConverter.upgradeSchema({
    components: toV31Components(nullableFixture.components),
    schema: {
      oneOf: [
        { type: "string", nullable: true },
        toV31Schema(nullableFixture.choice.oneOf[0]!),
      ],
      discriminator: nullableFixture.choice.discriminator,
    },
  });
  TestValidator.predicate(
    "nullable oneOf rewrite drops discriminator",
    Object.hasOwn(clean(nullable), "discriminator") === false,
  );

  const v30RewriteFixture: IV30Fixture = createV30Fixture();
  TestValidator.equals(
    "v3.0 document enum rewrite drops discriminator",
    clean(
      upgradeV30DocumentSchema(v30RewriteFixture, {
        oneOf: [
          { type: "string", enum: ["alpha", "beta"] },
          v30RewriteFixture.choice.oneOf[0]!,
        ],
        discriminator: v30RewriteFixture.choice.discriminator,
      }),
    ),
    {
      oneOf: [
        { const: "alpha" },
        { const: "beta" },
        { $ref: "#/components/schemas/IOptionA" },
      ],
    },
  );
  TestValidator.equals(
    "v3.0 document nullable rewrite drops discriminator",
    clean(
      upgradeV30DocumentSchema(v30RewriteFixture, {
        oneOf: [
          { type: "string", nullable: true },
          v30RewriteFixture.choice.oneOf[0]!,
        ],
        discriminator: v30RewriteFixture.choice.discriminator,
      }),
    ),
    {
      oneOf: [
        { type: "string" },
        { $ref: "#/components/schemas/IOptionA" },
        { type: "null" },
      ],
    },
  );

  const downgradedRewriteFixture: IFixture = createFixture();
  const downgradedRewrite = OpenApiConverter.downgradeSchema({
    components: downgradedRewriteFixture.components,
    schema: {
      oneOf: [
        { const: "alpha" },
        { const: "beta" },
        downgradedRewriteFixture.choice.oneOf[0]!,
      ],
      discriminator: downgradedRewriteFixture.choice.discriminator,
    },
    version: "3.0",
    downgraded: {},
  });
  TestValidator.predicate(
    "v3.0 constant rewrite drops discriminator",
    Object.hasOwn(clean(downgradedRewrite), "discriminator") === false,
  );

  const collapsedFixture: IFixture = createFixture();
  const branch: OpenApi.IJsonSchema = collapsedFixture.choice.oneOf[0]!;
  TestValidator.equals(
    "collapsed oneOf",
    clean(
      OpenApiConverter.upgradeSchema({
        components: toV31Components(collapsedFixture.components),
        schema: {
          oneOf: [toV31Schema(branch)],
          discriminator: {
            propertyName: "kind",
            mapping: { a: "#/components/schemas/IOptionA" },
          },
        },
      }),
    ),
    clean(branch),
  );
  const v30CollapsedFixture: IV30Fixture = createV30Fixture();
  TestValidator.equals(
    "v3.0 document collapsed oneOf",
    clean(
      upgradeV30DocumentSchema(v30CollapsedFixture, {
        oneOf: [v30CollapsedFixture.choice.oneOf[0]!],
        discriminator: {
          propertyName: "kind",
          mapping: { a: "#/components/schemas/IOptionA" },
        },
      }),
    ),
    clean(branch),
  );
  for (const version of ["3.0", "3.1"] as const)
    TestValidator.equals(
      `${version} downgraded collapsed oneOf`,
      JSON.stringify(
        clean(
          version === "3.0"
            ? OpenApiConverter.downgradeSchema({
                components: collapsedFixture.components,
                schema: {
                  oneOf: [branch],
                  discriminator: {
                    propertyName: "kind",
                    mapping: { a: "#/components/schemas/IOptionA" },
                  },
                },
                version: "3.0",
                downgraded: {},
              })
            : OpenApiConverter.downgradeSchema({
                components: collapsedFixture.components,
                schema: {
                  oneOf: [branch],
                  discriminator: {
                    propertyName: "kind",
                    mapping: { a: "#/components/schemas/IOptionA" },
                  },
                },
                version: "3.1",
                downgraded: {},
              }),
        ),
      ),
      JSON.stringify(clean(branch)),
    );

  const swaggerFixture: IFixture = createFixture();
  const swagger = OpenApiConverter.downgradeSchema({
    components: swaggerFixture.components,
    schema: swaggerFixture.choice,
    version: "2.0",
    downgraded: {},
  });
  TestValidator.predicate(
    "Swagger 2.0 does not misrepresent OpenAPI mapping metadata",
    Object.hasOwn(clean(swagger), "discriminator") === false,
  );
};

interface IOptionA {
  kind: "a";
  value: string;
}

interface IOptionB {
  kind: "b";
  label: string;
}

interface IFixture {
  components: OpenApi.IComponents;
  choice: OpenApi.IJsonSchema.IOneOf;
}

interface IV30Fixture {
  components: OpenApiV3.IComponents;
  choice: OpenApiV3.IJsonSchema.IOneOf;
}

const createFixture = (): IFixture => {
  const collection: IJsonSchemaCollection =
    typia.json.schemas<[IOptionA | IOptionB]>();
  const generated: OpenApi.IJsonSchema = collection.schemas[0]!;
  if (!("oneOf" in generated))
    throw new Error("Failed to generate the IOptionA | IOptionB union schema.");

  const choice: OpenApi.IJsonSchema.IOneOf = {
    oneOf: generated.oneOf,
    discriminator: {
      propertyName: "kind",
      mapping: {
        a: "#/components/schemas/IOptionA",
        b: "#/components/schemas/IOptionB",
      },
    },
  };
  return {
    components: {
      ...collection.components,
      schemas: {
        ...collection.components.schemas,
        Choice: choice,
      },
    },
    choice,
  };
};

const createV30Fixture = (): IV30Fixture => {
  const collection = typia.json.schemas<[IOptionA | IOptionB], "3.0">();
  const generated: OpenApiV3.IJsonSchema = collection.schemas[0]!;
  if (!("oneOf" in generated))
    throw new Error("Failed to generate the IOptionA | IOptionB union schema.");

  const choice: OpenApiV3.IJsonSchema.IOneOf = {
    oneOf: generated.oneOf,
    discriminator: {
      propertyName: "kind",
      mapping: {
        a: "#/components/schemas/IOptionA",
        b: "#/components/schemas/IOptionB",
      },
    },
  };
  return {
    components: {
      ...collection.components,
      schemas: {
        ...collection.components.schemas,
        Choice: choice,
      },
    },
    choice,
  };
};

const upgradeV31 = (fixture: IFixture): OpenApi.IJsonSchema[] => {
  const components: OpenApiV3_1.IComponents = toV31Components(
    fixture.components,
  );
  const schema: OpenApiV3_1.IJsonSchema = toV31Schema(fixture.choice);
  return [
    OpenApiConverter.upgradeSchema({ components, schema }),
    OpenApiConverter.upgradeComponents(components).schemas!.Choice!,
    OpenApiConverter.upgradeDocument({
      openapi: "3.1.1",
      components,
      paths: {},
    }).components.schemas!.Choice!,
  ];
};

const upgradeV30 = (fixture: IV30Fixture): OpenApi.IJsonSchema[] => {
  const components: OpenApiV3.IComponents = fixture.components;
  const schema: OpenApiV3.IJsonSchema = fixture.choice;
  return [
    OpenApiConverter.upgradeSchema({ components, schema }),
    OpenApiConverter.upgradeComponents(components).schemas!.Choice!,
    OpenApiConverter.upgradeDocument({
      openapi: "3.0.4",
      components,
      paths: {},
    }).components.schemas!.Choice!,
  ];
};

const upgradeV30DocumentSchema = (
  fixture: IV30Fixture,
  schema: OpenApiV3.IJsonSchema,
): OpenApi.IJsonSchema =>
  OpenApiConverter.upgradeDocument({
    openapi: "3.0.4",
    components: {
      ...fixture.components,
      schemas: {
        ...fixture.components.schemas,
        Boundary: schema,
      },
    },
    paths: {},
  }).components.schemas!.Boundary!;

const upgradeV32 = (fixture: IFixture): OpenApi.IJsonSchema[] => {
  const components: OpenApiV3_2.IComponents = toV32Components(
    fixture.components,
  );
  const schema: OpenApiV3_2.IJsonSchema = toV32Schema(fixture.choice);
  return [
    OpenApiConverter.upgradeSchema({ components, schema }),
    OpenApiConverter.upgradeComponents(components).schemas!.Choice!,
    OpenApiConverter.upgradeDocument({
      openapi: "3.2.0",
      components,
      paths: {},
    }).components.schemas!.Choice!,
  ];
};

const downgradeV30 = (fixture: IFixture): OpenApiV3.IJsonSchema[] => [
  OpenApiConverter.downgradeSchema({
    components: fixture.components,
    schema: fixture.choice,
    version: "3.0",
    downgraded: {},
  }),
  OpenApiConverter.downgradeComponents(fixture.components, "3.0").schemas!
    .Choice!,
  OpenApiConverter.downgradeDocument(createDocument(fixture), "3.0").components!
    .schemas!.Choice!,
];

const downgradeV31 = (fixture: IFixture): OpenApiV3_1.IJsonSchema[] => [
  OpenApiConverter.downgradeSchema({
    components: fixture.components,
    schema: fixture.choice,
    version: "3.1",
    downgraded: {},
  }),
  OpenApiConverter.downgradeComponents(fixture.components, "3.1").schemas!
    .Choice!,
  OpenApiConverter.downgradeDocument(createDocument(fixture), "3.1").components!
    .schemas!.Choice!,
];

const createDocument = (fixture: IFixture): OpenApi.IDocument => ({
  openapi: "3.2.0",
  "x-typia-emended-v12": true,
  components: fixture.components,
  paths: {},
});

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));

const toV31Components = (input: OpenApi.IComponents): OpenApiV3_1.IComponents =>
  typia.assert<OpenApiV3_1.IComponents>(input);

const toV32Components = (input: OpenApi.IComponents): OpenApiV3_2.IComponents =>
  typia.assert<OpenApiV3_2.IComponents>(input);

const toV31Schema = (input: OpenApi.IJsonSchema): OpenApiV3_1.IJsonSchema =>
  typia.assert<OpenApiV3_1.IJsonSchema>(input);

const toV32Schema = (input: OpenApi.IJsonSchema): OpenApiV3_2.IJsonSchema =>
  typia.assert<OpenApiV3_2.IJsonSchema>(input);
