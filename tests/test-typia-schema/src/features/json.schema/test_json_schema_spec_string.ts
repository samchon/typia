import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

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
