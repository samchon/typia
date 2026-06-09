import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

/**
 * Verifies object and record schemas follow OpenAPI required semantics.
 *
 * Locks the object/record fixture used by the JSON schema spec tests. Named
 * required object properties must still populate `required`, but record-only
 * objects have no named required properties and therefore must omit it.
 *
 * 1. Generate schema for an object with required, optional, and nullable fields.
 * 2. Assert its named required properties are retained.
 * 3. Generate a record schema and assert it has no empty `required` array.
 */
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
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
