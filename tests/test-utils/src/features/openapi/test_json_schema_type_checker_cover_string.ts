import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies string coverage for enums, formats and every typia format pair.
 *
 * Covers must treat constants, formats and patterns by value-set containment,
 * and format pairs must be consistent with the declared format list.
 *
 * 1. Compare enum, format and pattern string schemas in both directions.
 * 2. Enumerate every tags.Format value natively and compare each pair.
 *
 * @evidence contracts/testing.md#behavioral-verification covers is called on authored string schemas and on every pair of the formats enumerated by typia.reflect.literals.
 * @evidence contracts/testing.md#independent-expectations Authored enum and format relations give the first verdicts; the format list is enumerated natively and so the pair sweep checks coverage of the actual list and not of a copy.
 * @evidence contracts/testing.md#distinguishing-cases Constants, formats and patterns have positive and negative rows and the sweep covers every ordered pair.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:integration command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this exported case. typia.reflect.literals is evaluated by the native transform; covers runs in process.
 */
export const test_json_schema_type_checker_cover_string = (): void => {
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

  // CHECK FORMAT CASE
  for (const x of typia.reflect.literals<tags.Format.Value>())
    for (const y of typia.reflect.literals<tags.Format.Value>())
      TestEquality.equals(
        `format ${x} covers ${y}`,
        x === y ||
          (x === "idn-email" && y === "email") ||
          (x === "idn-hostname" && y === "hostname") ||
          (["uri", "iri"].includes(x) && y === "url") ||
          (x === "iri" && y === "uri") ||
          (x === "iri-reference" && y === "uri-reference"),
        OpenApiTypeChecker.covers({
          components: {},
          x: { type: "string", format: x },
          y: { type: "string", format: y },
        }),
      );
};
