import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { OpenApiValidator } from "@typia/utils";

/**
 * Verifies the expected type of an array names uniqueness only when it is on.
 *
 * `uniqueItems: false` is the JSON Schema default and imposes no constraint,
 * and the array validator accepts duplicates under it. The naming rule used to
 * append `tags.UniqueItems` whenever the keyword was present, so a mismatch
 * report asked for a constraint that the schema did not have.
 *
 * 1. Validate a non-array against array schemas with each `uniqueItems` value.
 * 2. Read the expected type of the reported error.
 * 3. Require the uniqueness tag only for `true`, and duplicates accepted for
 *    `false`.
 *
 * @evidence contracts/testing.md#behavioral-verification OpenApiValidator.validate runs on a non-array value and on duplicate elements, and the reported expected type and acceptance are compared, so naming a disabled constraint or enforcing it changes a result.
 * @evidence contracts/testing.md#independent-expectations JSON Schema defines `uniqueItems: false` as no constraint, so the expected names and the acceptance of duplicates follow from that definition and not from the validator's own output.
 * @evidence contracts/testing.md#distinguishing-cases The `true` case names the tag and rejects duplicates, the `false` case names none and accepts duplicates, and an absent keyword is the adjacent case that also names none.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json; validation runs in process on authored schemas with no native build, installation or host.
 */
export const test_openapi_validator_unique_items_name = (): void => {
  const schema = (uniqueItems?: boolean): OpenApi.IJsonSchema => ({
    type: "array",
    items: { type: "string" },
    ...(uniqueItems !== undefined ? { uniqueItems } : {}),
  });
  const expected = (schema: OpenApi.IJsonSchema): string | undefined => {
    const result = OpenApiValidator.validate({
      components: {},
      schema,
      value: 1,
      required: true,
    });
    return result.success ? undefined : result.errors[0]?.expected;
  };

  TestEquality.equals(
    "unique items on",
    expected(schema(true)),
    "Array<string> & tags.UniqueItems",
  );
  TestEquality.equals(
    "unique items off",
    expected(schema(false)),
    "Array<string>",
  );
  TestEquality.equals(
    "unique items absent",
    expected(schema()),
    "Array<string>",
  );

  TestEquality.equals(
    "duplicates are rejected when on",
    OpenApiValidator.validate({
      components: {},
      schema: schema(true),
      value: ["a", "a"],
      required: true,
    }).success,
    false,
  );
  TestEquality.equals(
    "duplicates are accepted when off",
    OpenApiValidator.validate({
      components: {},
      schema: schema(false),
      value: ["a", "a"],
      required: true,
    }).success,
    true,
  );
};
