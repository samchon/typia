import { TestValidator } from "@nestia/e2e";
import { OpenApi, SwaggerV2 } from "@typia/interface";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies Swagger 2 downgrade groups constants into typed enums.
 *
 * Swagger 2 has no `const`, so scalar and constant-only union schemas must be
 * represented as deterministic, deduplicated enums without erasing ordinary
 * union branches.
 *
 * 1. Downgrade scalar string, number, and boolean constants.
 * 2. Group duplicate same-type constants and preserve mixed-type branches.
 * 3. Assert top-level attributes and nullable union behavior remain intact.
 */
export const test_json_schema_downgrade_v20_enum = (): void => {
  const convert = (schema: OpenApi.IJsonSchema): SwaggerV2.IJsonSchema =>
    OpenApiConverter.downgradeSchema({
      components: {},
      schema,
      version: "2.0",
      downgraded: {},
    });

  TestValidator.equals("scalar string", convert({ const: "alpha" }), {
    type: "string",
    enum: ["alpha"],
  });
  TestValidator.equals("scalar number", convert({ const: 3 }), {
    type: "number",
    enum: [3],
  });
  TestValidator.equals("scalar boolean", convert({ const: false }), {
    type: "boolean",
    enum: [false],
  });
  TestValidator.equals(
    "same-type union",
    convert({
      oneOf: [{ const: "a" }, { const: "b" }, { const: "a" }, { const: "c" }],
      title: "something",
      description: "nothing",
    }),
    {
      type: "string",
      title: "something",
      description: "nothing",
      enum: ["a", "b", "c"],
    },
  );
  TestValidator.equals(
    "mixed union",
    convert({
      oneOf: [{ const: "a" }, { const: 1 }, { const: true }],
    }),
    {
      "x-oneOf": [
        { type: "string", enum: ["a"] },
        { type: "number", enum: [1] },
        { type: "boolean", enum: [true] },
      ],
    },
  );
  TestValidator.equals(
    "ordinary and constant branches",
    convert({
      oneOf: [{ const: "fixed" }, { type: "number", minimum: 0 }],
    }),
    {
      "x-oneOf": [
        { type: "string", enum: ["fixed"] },
        { type: "number", minimum: 0 },
      ],
    },
  );
  TestValidator.equals(
    "attributed constant branches",
    convert({
      oneOf: [
        { const: "a", description: "First" },
        { const: "b", description: "Second" },
      ],
    }),
    {
      "x-oneOf": [
        { type: "string", enum: ["a"], description: "First" },
        { type: "string", enum: ["b"], description: "Second" },
      ],
    },
  );
  TestValidator.equals(
    "attributed constant branch round trip",
    OpenApiConverter.upgradeSchema({
      definitions: {},
      schema: convert({
        oneOf: [
          { const: "a", description: "First" },
          { const: "b", description: "Second" },
        ],
      }),
    }),
    {
      oneOf: [
        { const: "a", description: "First" },
        { const: "b", description: "Second" },
      ],
    },
  );
  TestValidator.equals(
    "nullable constant",
    convert({ oneOf: [{ const: "fixed" }, { type: "null" }] }),
    { type: "string", enum: ["fixed"], "x-nullable": true },
  );
  TestValidator.equals("null only", convert({ type: "null" }), {
    type: "null",
  });

  const downgraded: Record<string, SwaggerV2.IJsonSchema> = {};
  TestValidator.equals(
    "constant reference",
    OpenApiConverter.downgradeSchema({
      components: {
        schemas: { Fixed: { const: "referenced" } },
      },
      downgraded,
      schema: {
        oneOf: [{ $ref: "#/components/schemas/Fixed" }, { type: "null" }],
      },
      version: "2.0",
    }),
    { $ref: "#/definitions/Fixed.Nullable" },
  );
  TestValidator.equals(
    "referenced constant definition",
    downgraded["Fixed.Nullable"],
    {
      type: "string",
      enum: ["referenced"],
      "x-nullable": true,
    },
  );
  TestValidator.equals(
    "component definitions",
    OpenApiConverter.downgradeComponents(
      { schemas: { Component: { const: "component" } } },
      "2.0",
    ),
    { Component: { type: "string", enum: ["component"] } },
  );
};
