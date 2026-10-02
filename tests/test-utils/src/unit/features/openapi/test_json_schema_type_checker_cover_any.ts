import { TestEquality } from "@typia/template/oracle-equality";
import { OpenApiTypeChecker } from "@typia/utils";

/**
 * Verifies OpenApiTypeChecker.covers treats an untyped schema as covering any
 * other schema.
 *
 * Coverage decides union discrimination, so an untyped (any) schema must cover
 * every union and no narrower union may be claimed to cover any.
 *
 * 1. Check that any covers a nullable string and a string or number union.
 * 2. Check that those unions do not cover any.
 *
 */
export const test_json_schema_type_checker_cover_any = (): void => {
  TestEquality.equals(
    "any covers (string | null)",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: {
        type: undefined,
      },
      y: {
        oneOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
      },
    }),
  );
  TestEquality.equals(
    "any covers union type",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: {
        type: undefined,
      },
      y: {
        oneOf: [
          {
            type: "string",
          },
          {
            type: "number",
          },
        ],
      },
    }),
  );

  TestEquality.equals(
    "(string | null) can't cover any",
    false,
    OpenApiTypeChecker.covers({
      components: {},
      x: {
        oneOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
      },
      y: {
        type: undefined,
      },
    }),
  );
  TestEquality.equals(
    "union can't cover any",
    false,
    OpenApiTypeChecker.covers({
      components: {},
      x: {
        oneOf: [
          {
            type: "string",
          },
          {
            type: "number",
          },
        ],
      },
      y: {
        type: undefined,
      },
    }),
  );
};
