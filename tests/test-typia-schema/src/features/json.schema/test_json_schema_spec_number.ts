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

  equalsSchema("number", clean(typia.json.schema<number>().schema), {
    type: "number",
  });
  equalsSchema(
    "int32",
    clean(typia.json.schema<number & tags.Type<"int32">>().schema),
    {
      type: "integer",
    },
  );
  equalsSchema(
    "int8",
    clean(typia.json.schema<number & tags.Type<"int8">>().schema),
    {
      type: "integer",
    },
  );
  equalsSchema(
    "int16",
    clean(typia.json.schema<number & tags.Type<"int16">>().schema),
    {
      type: "integer",
    },
  );
  equalsSchema(
    "uint32",
    clean(typia.json.schema<number & tags.Type<"uint32">>().schema),
    {
      type: "integer",
      minimum: 0,
    },
  );
  equalsSchema(
    "uint8",
    clean(typia.json.schema<number & tags.Type<"uint8">>().schema),
    {
      type: "integer",
      minimum: 0,
    },
  );
  equalsSchema(
    "uint16",
    clean(typia.json.schema<number & tags.Type<"uint16">>().schema),
    {
      type: "integer",
      minimum: 0,
    },
  );
  equalsSchema(
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
  equalsSchema(
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
  equalsSchema(
    "multipleOf",
    clean(typia.json.schema<number & tags.MultipleOf<5>>().schema),
    {
      type: "number",
      multipleOf: 5,
    },
  );
  equalsSchema(
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
  equalsSchema(
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

const equalsSchema = (
  title: string,
  actual: unknown,
  expected: unknown,
): void => {
  TestValidator.equals(`${title}.actual`, actual, expected);
  TestValidator.equals(`${title}.expected`, expected, actual);
};

const normalizeOneOf = (schema: any): any => ({
  ...schema,
  oneOf: [...schema.oneOf].sort((a, b) =>
    JSON.stringify(a).localeCompare(JSON.stringify(b)),
  ),
});
