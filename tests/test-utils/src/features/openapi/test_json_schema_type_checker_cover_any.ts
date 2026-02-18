import { TestValidator } from "@nestia/e2e";
import { OpenApiTypeChecker } from "@typia/utils";

export const test_json_schema_type_checker_cover_any = (): void => {
  TestValidator.equals(
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
  TestValidator.equals(
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

  TestValidator.equals(
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
  TestValidator.equals(
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
