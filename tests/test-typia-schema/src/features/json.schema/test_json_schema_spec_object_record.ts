import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies object and record schemas follow OpenAPI required semantics.
 *
 * Locks the object/record fixture used by the JSON schema spec tests. Named
 * object properties must still populate `properties` and `required`, but
 * record-only objects have no named keys and therefore omit both keywords.
 *
 * 1. Generate schema for an object with required, optional, and nullable fields.
 * 2. Assert its named required properties are retained.
 * 3. Generate a record schema and assert it has no named-object keywords.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schema is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (object; record). The case documents its purpose as: Verifies object and record schemas follow OpenAPI required semantics.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Locks the object/record fixture used by the JSON schema spec tests. Named object properties must still populate `properties` and `required`, but record-only objects have no named keys and therefore omit both keywords. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (object; record) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schema_spec_object_record is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_json_schema_spec_object_record = (): void => {
  interface IObjectSpec {
    required: string;
    optional?: number;
    nullable: boolean | null;
  }

  TestEquality.equals(
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

  TestEquality.equals(
    "record",
    clean(
      typia.json.schema<Record<string, string & tags.MinLength<1>>>().schema,
    ),
    {
      type: "object",
      additionalProperties: {
        type: "string",
        minLength: 1,
      },
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
