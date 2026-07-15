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
  for (const version of ["3.0", "3.1", "3.2"] as const) {
    const fixture: IFixture = createFixture();
    const before: string = JSON.stringify(fixture.components);
    const outputs: OpenApi.IJsonSchema[] =
      version === "3.0"
        ? upgradeV30(fixture)
        : version === "3.1"
          ? upgradeV31(fixture)
          : upgradeV32(fixture);

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

  const swaggerFixture: IFixture = createFixture();
  const swagger = OpenApiConverter.downgradeSchema({
    components: swaggerFixture.components,
    schema: swaggerFixture.choice,
    version: "2.0",
    downgraded: {},
  });
  TestValidator.predicate(
    "Swagger 2.0 does not misrepresent OpenAPI mapping metadata",
    !("discriminator" in swagger),
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

const upgradeV30 = (fixture: IFixture): OpenApi.IJsonSchema[] => {
  const components: OpenApiV3.IComponents = toV30Components(fixture.components);
  const schema: OpenApiV3.IJsonSchema = toV30Schema(fixture.choice);
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

const toV30Components = (input: OpenApi.IComponents): OpenApiV3.IComponents =>
  typia.assert<OpenApiV3.IComponents>(input);

const toV32Components = (input: OpenApi.IComponents): OpenApiV3_2.IComponents =>
  typia.assert<OpenApiV3_2.IComponents>(input);

const toV31Schema = (input: OpenApi.IJsonSchema): OpenApiV3_1.IJsonSchema =>
  typia.assert<OpenApiV3_1.IJsonSchema>(input);

const toV30Schema = (input: OpenApi.IJsonSchema): OpenApiV3.IJsonSchema =>
  typia.assert<OpenApiV3.IJsonSchema>(input);

const toV32Schema = (input: OpenApi.IJsonSchema): OpenApiV3_2.IJsonSchema =>
  typia.assert<OpenApiV3_2.IJsonSchema>(input);
