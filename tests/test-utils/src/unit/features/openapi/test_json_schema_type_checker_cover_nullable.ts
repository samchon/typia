import { TestEquality } from "@typia/oracle/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification OpenApiTypeChecker.covers is called directly on authored schema pairs and both booleans are compared.
 * @evidence contracts/testing.md#independent-expectations Set containment of the value sets gives the expected booleans, independent of the checker.
 * @evidence contracts/testing.md#distinguishing-cases The positive case and its reversed negative twin cover the direction decision; non-string types are not covered here.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. The predicate runs in process on authored schemas with no native build, installation or host.
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
