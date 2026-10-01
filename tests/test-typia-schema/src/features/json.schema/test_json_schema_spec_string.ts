import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies json schema spec string against the native typia.json.schema output.
 *
 * The case builds its input in this file and asserts string, format, pattern,
 * length, content media type, default.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schema is evaluated by the native host on the types declared in this case and the result is checked by 7 assertions (string; format; pattern; length; content media type; default).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (string; format; pattern; length; content media type; default) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schema_spec_string is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_json_schema_spec_string = (): void => {
  TestEquality.equals("string", clean(typia.json.schema<string>().schema), {
    type: "string",
  });
  TestEquality.equals(
    "format",
    clean(typia.json.schema<string & tags.Format<"email">>().schema),
    {
      type: "string",
      format: "email",
    },
  );
  TestEquality.equals(
    "pattern",
    clean(typia.json.schema<string & tags.Pattern<"^[a-z]+$">>().schema),
    {
      type: "string",
      pattern: "^[a-z]+$",
    },
  );
  TestEquality.equals(
    "length",
    clean(
      typia.json.schema<string & tags.MinLength<2> & tags.MaxLength<8>>()
        .schema,
    ),
    {
      type: "string",
      minLength: 2,
      maxLength: 8,
    },
  );
  TestEquality.equals(
    "content media type",
    clean(
      typia.json.schema<string & tags.ContentMediaType<"image/png">>().schema,
    ),
    {
      type: "string",
      contentMediaType: "image/png",
    },
  );
  TestEquality.equals(
    "default",
    clean(typia.json.schema<string & tags.Default<"guest">>().schema),
    {
      type: "string",
      default: "guest",
    },
  );
  TestEquality.equals(
    "string literal union",
    normalizeOneOf(
      clean(typia.json.schema<"alpha" | "beta" | "gamma">().schema),
    ),
    {
      oneOf: [
        {
          const: "alpha",
        },
        {
          const: "beta",
        },
        {
          const: "gamma",
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
