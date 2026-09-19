import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";

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
