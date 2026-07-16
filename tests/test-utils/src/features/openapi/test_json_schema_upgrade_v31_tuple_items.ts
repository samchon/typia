import { TestValidator } from "@nestia/e2e";
import { OpenApi, OpenApiV3_1 } from "@typia/interface";
import { OpenApiConverter, OpenApiValidator } from "@typia/utils";

/**
 * Verifies OpenAPI 3.1 prefixItems keeps the standard items rest schema.
 *
 * JSON Schema 2020-12 assigns tuple rest behavior to `items`; the deprecated
 * `additionalItems` keyword has no effect beside `prefixItems`. The upgrader
 * previously dropped `items` and consulted the deprecated keyword, changing
 * valid tuple languages.
 *
 * 1. Upgrade schema, false, and omitted `items` rest forms beside prefixItems.
 * 2. Require the emended additionalItems form to preserve each meaning.
 * 3. Validate positive and negative boundary values after conversion.
 */
export const test_json_schema_upgrade_v31_tuple_items = (): void => {
  const schemaRest = upgrade({
    type: "array",
    prefixItems: [{ type: "string" }],
    items: { type: "number" },
    additionalItems: false,
    minItems: 1,
  } as OpenApiV3_1.IJsonSchema);
  assertTupleRest("schema rest", schemaRest, { type: "number" });
  expectValidation(
    "schema rest accepts numbers",
    schemaRest,
    ["x", 1, 2],
    true,
  );
  expectValidation(
    "schema rest rejects strings",
    schemaRest,
    ["x", "y"],
    false,
  );

  const falseRest = upgrade({
    type: "array",
    prefixItems: [{ type: "string" }],
    items: false,
  } as unknown as OpenApiV3_1.IJsonSchema);
  assertTupleRest("false rest", falseRest, false);
  expectValidation("false rest permits omitted prefix", falseRest, [], true);
  expectValidation("false rest accepts prefix", falseRest, ["x"], true);
  expectValidation("false rest rejects extra", falseRest, ["x", 1], false);

  const openRest = upgrade({
    type: "array",
    prefixItems: [{ type: "string" }],
  } as OpenApiV3_1.IJsonSchema);
  assertTupleRest("omitted items is open", openRest, true);
  expectValidation(
    "open rest accepts extra",
    openRest,
    ["x", { anything: true }],
    true,
  );
};

const upgrade = (schema: OpenApiV3_1.IJsonSchema): OpenApi.IJsonSchema =>
  OpenApiConverter.upgradeSchema({ components: {}, schema });

const assertTupleRest = (
  label: string,
  schema: OpenApi.IJsonSchema,
  expected: boolean | OpenApi.IJsonSchema,
): void => {
  if (!("prefixItems" in schema))
    throw new Error(`${label} did not produce a tuple.`);
  TestValidator.equals(label, schema.additionalItems, expected);
};

const expectValidation = (
  label: string,
  schema: OpenApi.IJsonSchema,
  value: unknown,
  success: boolean,
): void =>
  TestValidator.equals(
    label,
    OpenApiValidator.validate({ components: {}, schema, value, required: true })
      .success,
    success,
  );
