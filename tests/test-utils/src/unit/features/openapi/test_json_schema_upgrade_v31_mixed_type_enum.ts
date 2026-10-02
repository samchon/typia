import { OpenApi, OpenApiV3_1, OpenApiV3_2 } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { OpenApiConverter, OpenApiValidator } from "@typia/utils";

/**
 * Verifies a 3.1 type array with an enum keeps only the types the enum has.
 *
 * JSON Schema applies `type` and `enum` together, so a value must have one of
 * the listed types and equal one of the enum values. The upgrader used to keep
 * a member for every listed type, so `type: ["string", "number"]` with `enum:
 * [1, 2]` accepted any string.
 *
 * 1. Upgrade type arrays whose enum has values for only some listed types.
 * 2. Require the emended union to hold only those enum values.
 * 3. Validate a value that the enum excludes and one that it admits.
 */
export const test_json_schema_upgrade_v31_mixed_type_enum = (): void => {
  const numbers = upgrade({
    type: ["string", "number"],
    enum: [1, 2],
  } as unknown as OpenApiV3_1.IJsonSchema);
  TestEquality.equals("number enum members", numbers, {
    oneOf: [{ const: 1 }, { const: 2 }],
  });
  expectValidation("number enum accepts a listed number", numbers, 2, true);
  expectValidation("number enum rejects a string", numbers, "x", false);

  const mixed = upgrade({
    type: ["integer", "string"],
    enum: [3, "x", 2.5],
  } as unknown as OpenApiV3_1.IJsonSchema);
  TestEquality.equals("integer and string enum members", mixed, {
    oneOf: [{ const: 3 }, { const: "x" }],
  });
  expectValidation("integer enum keeps the integer", mixed, 3, true);
  expectValidation("integer enum drops the fraction", mixed, 2.5, false);
  expectValidation(
    "integer enum rejects an unlisted string",
    mixed,
    "y",
    false,
  );

  const nullable = upgrade({
    type: ["number", "null"],
    enum: [1, null],
  } as unknown as OpenApiV3_1.IJsonSchema);
  TestEquality.equals("nullable enum members", nullable, {
    oneOf: [{ const: 1 }, { type: "null" }],
  });
  expectValidation("nullable enum accepts null", nullable, null, true);
  expectValidation(
    "nullable enum rejects an unlisted number",
    nullable,
    2,
    false,
  );

  const nullOnly = upgrade({
    type: ["number", "null"],
    enum: [null],
  } as unknown as OpenApiV3_1.IJsonSchema);
  TestEquality.equals("null-only enum member", nullOnly, { type: "null" });
  expectValidation("null-only enum rejects a number", nullOnly, 1, false);

  const open = upgrade({
    type: ["string", "number"],
  } as unknown as OpenApiV3_1.IJsonSchema);
  TestEquality.equals("type array without enum", open, {
    oneOf: [{ type: "string" }, { type: "number" }],
  });
  expectValidation("open type array accepts a string", open, "x", true);

  const rows: Array<{
    label: string;
    schema: Pick<OpenApiV3_1.IJsonSchema.IMixed, "type" | "enum">;
    allowed: unknown[];
  }> = [
    {
      label: "disjoint boolean",
      schema: { type: ["string", "number"], enum: [true] },
      allowed: [],
    },
    {
      label: "reversed types",
      schema: { type: ["number", "string"], enum: [true] },
      allowed: [],
    },
    {
      label: "disjoint object",
      schema: { type: ["string", "number"], enum: [{ id: 1 }] },
      allowed: [],
    },
    {
      label: "null absent",
      schema: { type: ["number", "string"], enum: [null] },
      allowed: [],
    },
    {
      label: "null beside string",
      schema: { type: ["number", "string"], enum: [null, "x"] },
      allowed: ["x"],
    },
    {
      label: "null beside number",
      schema: { type: ["number", "string"], enum: [null, 1] },
      allowed: [1],
    },
    {
      label: "null explicitly allowed",
      schema: { type: ["string", "null"], enum: [null] },
      allowed: [null],
    },
    {
      label: "null excluded by enum",
      schema: { type: ["string", "null"], enum: ["x"] },
      allowed: ["x"],
    },
    {
      label: "null types disjoint",
      schema: { type: ["string", "null"], enum: [true] },
      allowed: [],
    },
    {
      label: "compatible values",
      schema: { type: ["string", "number"], enum: ["x", 1, true] },
      allowed: ["x", 1],
    },
    {
      label: "empty enum",
      schema: { type: ["string", "number"], enum: [] },
      allowed: [],
    },
    {
      label: "integer fraction",
      schema: { type: ["integer", "string"], enum: [1.5] },
      allowed: [],
    },
    {
      label: "integer compatible",
      schema: { type: ["integer", "string"], enum: [1, 1.5, "x"] },
      allowed: [1, "x"],
    },
    {
      label: "overlapping numeric types",
      schema: { type: ["integer", "number"], enum: [1, 1.5] },
      allowed: [1, 1.5],
    },
    {
      label: "compatible boolean",
      schema: { type: ["boolean", "number"], enum: [true, 1, "x"] },
      allowed: [true, 1],
    },
  ];
  const values: unknown[] = [
    null,
    true,
    false,
    "x",
    "other",
    "",
    0,
    1,
    -1,
    1.5,
    [],
    [1],
    {},
    { id: 1 },
  ];
  for (const row of rows) {
    const schema = {
      ...row.schema,
      title: row.label,
      description: "intersection",
      "x-contract": "preserved",
    };
    const converted = upgrade(schema as unknown as OpenApiV3_1.IJsonSchema);
    TestEquality.subset<unknown>(
      `${row.label} annotations`,
      {
        title: row.label,
        description: "intersection",
        "x-contract": "preserved",
      },
      converted,
    );
    const variants: OpenApi.IJsonSchema[] = [converted];
    for (const version of ["3.1.0", "3.2.0"] as const) {
      const document = OpenApiConverter.upgradeDocument({
        openapi: version,
        info: { title: "intersection", version: "1" },
        paths: {},
        components: {
          schemas: { Mixed: schema as unknown as OpenApiV3_1.IJsonSchema },
        },
      } as OpenApiV3_1.IDocument | OpenApiV3_2.IDocument);
      variants.push(document.components.schemas!.Mixed!);
    }
    for (const version of ["2.0", "3.0", "3.1"] as const) {
      const props = { components: {}, schema: converted, downgraded: {} };
      const downgraded =
        version === "2.0"
          ? OpenApiConverter.downgradeSchema({ ...props, version: "2.0" })
          : version === "3.0"
            ? OpenApiConverter.downgradeSchema({ ...props, version: "3.0" })
            : OpenApiConverter.downgradeSchema({ ...props, version: "3.1" });
      variants.push(
        version === "2.0"
          ? OpenApiConverter.upgradeSchema({
              definitions: {},
              schema:
                downgraded as import("@typia/interface").SwaggerV2.IJsonSchema,
            })
          : OpenApiConverter.upgradeSchema({
              components: {},
              schema: downgraded as OpenApiV3_1.IJsonSchema,
            }),
      );
    }
    for (const [index, variant] of variants.entries())
      for (const value of values)
        expectValidation(
          `${row.label} variant ${index} value ${JSON.stringify(value)}`,
          variant,
          value,
          row.allowed.some((allowed) => allowed === value),
        );
  }
};

const upgrade = (schema: OpenApiV3_1.IJsonSchema): OpenApi.IJsonSchema =>
  OpenApiConverter.upgradeSchema({ components: {}, schema });

const expectValidation = (
  label: string,
  schema: OpenApi.IJsonSchema,
  value: unknown,
  success: boolean,
): void =>
  TestEquality.equals(
    label,
    OpenApiValidator.validate({ components: {}, schema, value, required: true })
      .success,
    success,
  );
