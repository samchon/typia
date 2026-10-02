import { TestEquality } from "@typia/template/oracle-equality";
import { OpenApiTypeChecker } from "@typia/utils";

/**
 * Verifies OpenApiTypeChecker.covers handles nullable unions in the right
 * direction.
 *
 * A nullable string accepts more values than a string, so only the nullable
 * union may cover the plain type. A swapped direction would let discrimination
 * treat a nullable member as a subset.
 *
 * 1. Check that string-or-null covers string.
 * 2. Check that string does not cover string-or-null.
 */
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
