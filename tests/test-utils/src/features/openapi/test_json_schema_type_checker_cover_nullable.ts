import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";

export const test_json_schema_type_checker_cover_nullable = (): void => {
  TestEquality.equals(
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
  TestEquality.equals(
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
