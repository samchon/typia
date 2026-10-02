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
 * @evidence contracts/testing.md#behavioral-verification OpenApiTypeChecker.covers is called directly on authored schema pairs and each boolean is compared; a swapped direction or an over-broad predicate changes a result.
 * @evidence contracts/testing.md#independent-expectations Set containment (any is a superset of every value set) gives the expected booleans, independent of the checker.
 * @evidence contracts/testing.md#distinguishing-cases Two positive directions and two negative twins differ only in operand order, so over-matching in either direction is caught; any covering any is not asserted.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. The predicate runs in process on authored schemas with no native build, installation or host.
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
