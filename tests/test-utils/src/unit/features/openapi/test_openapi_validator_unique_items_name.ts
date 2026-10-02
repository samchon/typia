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
