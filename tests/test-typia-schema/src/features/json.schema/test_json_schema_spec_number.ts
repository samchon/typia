import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

export const test_json_schema_spec_number = (): void => {
  interface ICommentTypeNumbers {
    /** @type int8 */
    int8: number;

    /** @type uint8 */
    uint8: number;

    /** @type int16 */
    int16: number;

    /** @type uint16 */
    uint16: number;
  }

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
    "int8",
    clean(typia.json.schema<number & tags.Type<"int8">>().schema),
    {
      type: "integer",
    },
  );
  TestValidator.equals(
    "int16",
    clean(typia.json.schema<number & tags.Type<"int16">>().schema),
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
    "uint8",
    clean(typia.json.schema<number & tags.Type<"uint8">>().schema),
    {
      type: "integer",
      minimum: 0,
    },
  );
  TestValidator.equals(
    "uint16",
    clean(typia.json.schema<number & tags.Type<"uint16">>().schema),
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
    "comment type smaller integers",
    clean(typia.json.schema<ICommentTypeNumbers>().schema),
    {
      type: "object",
      properties: {
        int8: {
          type: "integer",
        },
        int16: {
          type: "integer",
        },
        uint8: {
          type: "integer",
          minimum: 0,
        },
        uint16: {
          type: "integer",
          minimum: 0,
        },
      },
      required: ["int8", "uint8", "int16", "uint16"],
      additionalProperties: false,
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
