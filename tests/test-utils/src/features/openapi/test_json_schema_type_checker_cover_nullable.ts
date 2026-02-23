import { TestValidator } from "@nestia/e2e";
import { OpenApiTypeChecker } from "@typia/utils";

export const test_json_schema_type_checker_cover_nullable = (): void => {
  TestValidator.equals(
    "(string | null) covers string",
    true,
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
        type: "string",
      },
    }),
  );
  TestValidator.equals(
    "string can't cover (string | null)",
    false,
    OpenApiTypeChecker.covers({
      components: {},
      x: {
        type: "string",
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
};
