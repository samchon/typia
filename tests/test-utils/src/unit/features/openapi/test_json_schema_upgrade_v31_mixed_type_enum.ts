import { OpenApi, OpenApiV3_1 } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification OpenApiConverter.upgradeSchema runs on mixed type arrays with enums and OpenApiValidator checks values against each result, so a retained member for a type without an enum value changes acceptance of strings, booleans and null.
 * @evidence contracts/testing.md#independent-expectations JSON Schema defines type and enum as simultaneous constraints, so a value is valid only when both hold; the accepted and rejected values and the const members are derived from that rule.
 * @evidence contracts/testing.md#distinguishing-cases Each schema has a positive value from the enum and a negative value of another listed type, and the case with a null enum value and the case without an enum keep the null and open type members that must remain.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. Conversion and validation run in process on authored schemas with no native build, installation or host.
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
