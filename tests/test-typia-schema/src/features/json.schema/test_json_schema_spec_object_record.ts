import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

export const test_json_schema_spec_object_record = (): void => {
  interface IObjectSpec {
    required: string;
    optional?: number;
    nullable: boolean | null;
  }

  TestValidator.equals(
    "object",
    clean(typia.json.schema<IObjectSpec>().schema),
    {
      type: "object",
      properties: {
        nullable: {
          oneOf: [
            {
              type: "null",
            },
            {
              type: "boolean",
            },
          ],
        },
        optional: {
          type: "number",
        },
        required: {
          type: "string",
        },
      },
      required: ["required", "nullable"],
      additionalProperties: false,
    },
  );

  TestValidator.equals(
    "record",
    clean(
      typia.json.schema<Record<string, string & tags.MinLength<1>>>().schema,
    ),
    {
      type: "object",
      properties: {},
      additionalProperties: {
        type: "string",
        minLength: 1,
      },
      required: [],
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
