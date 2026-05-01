import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

export const test_json_schema_spec_number = (): void => {
  TestValidator.equals("number", clean(typia.json.schema<number>().schema), {
    type: "number",
  });
  TestValidator.equals(
    "int32",
    clean(typia.json.schema<number & tags.Type<"int32">>().schema),
    {
      type: "integer",
    },
  );
  TestValidator.equals(
    "uint32",
    clean(typia.json.schema<number & tags.Type<"uint32">>().schema),
    {
      type: "integer",
      minimum: 0,
    },
  );
  TestValidator.equals(
    "inclusive range",
    clean(
      typia.json.schema<number & tags.Minimum<1> & tags.Maximum<10>>().schema,
    ),
    {
      type: "number",
      minimum: 1,
      maximum: 10,
    },
  );
  TestValidator.equals(
    "exclusive range",
    clean(
      typia.json.schema<
        number & tags.ExclusiveMinimum<1> & tags.ExclusiveMaximum<10>
      >().schema,
    ),
    {
      type: "number",
      exclusiveMinimum: 1,
      exclusiveMaximum: 10,
    },
  );
  TestValidator.equals(
    "multipleOf",
    clean(typia.json.schema<number & tags.MultipleOf<5>>().schema),
    {
      type: "number",
      multipleOf: 5,
    },
  );
  TestValidator.equals(
    "number literal union",
    normalizeOneOf(clean(typia.json.schema<1 | 2 | 3>().schema)),
    {
      oneOf: [
        {
          const: 1,
        },
        {
          const: 2,
        },
        {
          const: 3,
        },
      ],
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));

const normalizeOneOf = (schema: any): any => ({
  ...schema,
  oneOf: [...schema.oneOf].sort((a, b) =>
    JSON.stringify(a).localeCompare(JSON.stringify(b)),
  ),
});
