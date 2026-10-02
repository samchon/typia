import { TestEquality } from "@typia/template/oracle-equality";
import { OpenApiTypeChecker } from "@typia/utils";

/**
 * Verifies authored string containment without a native producer.
 *
 * The original enum, length and pattern inputs and their literal verdicts move
 * here from the native format-population sweep without changing either.
 *
 * @evidence contracts/testing.md#behavioral-verification OpenApiTypeChecker.covers runs every original authored enum, length and pattern pair and compares its boolean result.
 * @evidence contracts/testing.md#independent-expectations Literal enum subsets, length intervals and identical or disjoint patterns decide the expected verdicts independently of the coverage implementation.
 * @evidence contracts/testing.md#distinguishing-cases Both directions of enum inclusion, equal and unequal length bounds, and identical versus disjoint patterns retain all ten original positive and negative rows. Format population remains owned by the native test_json_schema_type_checker_cover_string peer.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json; authored schema comparisons run in process without a native host.
 */
export const test_json_schema_type_checker_cover_string_portable = (): void => {
  // SUCCESS SCENARIOS
  TestEquality.equals(
    "enum cover relationship",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: {
        oneOf: [
          {
            const: "a",
          },
          {
            const: "b",
          },
          {
            const: "c",
          },
        ],
      },
      y: {
        oneOf: [
          {
            const: "a",
          },
          {
            const: "b",
          },
        ],
      },
    }),
  );
  TestEquality.equals(
    "minLength covers when equal",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "string", minLength: 1 },
      y: { type: "string", minLength: 1 },
    }),
  );
  TestEquality.equals(
    "minLength covers when less",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "string", minLength: 1 },
      y: { type: "string", minLength: 2 },
    }),
  );
  TestEquality.equals(
    "maxLength covers when equal",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "string", maxLength: 2 },
      y: { type: "string", maxLength: 2 },
    }),
  );
  TestEquality.equals(
    "maxLength covers when greater",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "string", maxLength: 2 },
      y: { type: "string", maxLength: 1 },
    }),
  );
  TestEquality.equals(
    "pattern covers when equal",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "string", pattern: "^a.*" },
      y: { type: "string", pattern: "^a.*" },
    }),
  );

  // FAILURE SCENARIOS
  TestEquality.equals(
    "enum non cover (but covered) relationship",
    false,
    OpenApiTypeChecker.covers({
      components: {},
      x: {
        oneOf: [
          {
            const: "a",
          },
          {
            const: "b",
          },
        ],
      },
      y: {
        oneOf: [
          {
            const: "a",
          },
          {
            const: "b",
          },
          {
            const: "c",
          },
        ],
      },
    }),
  );
  TestEquality.equals(
    "minLength can't cover when greater",
    false,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "string", minLength: 2 },
      y: { type: "string", minLength: 1 },
    }),
  );
  TestEquality.equals(
    "maxLength can't cover when less",
    false,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "string", maxLength: 1 },
      y: { type: "string", maxLength: 2 },
    }),
  );
  TestEquality.equals(
    "pattern can't cover when different",
    false,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "string", pattern: "^a.*" },
      y: { type: "string", pattern: "^b.*" },
    }),
  );
};
