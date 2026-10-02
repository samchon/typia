import { TestEquality } from "@typia/template/oracle-equality";
import { OpenApiTypeChecker } from "@typia/utils";

/**
 * Verifies OpenApiTypeChecker.covers numeric containment for ranges, multiples
 * and enumerations.
 *
 * Number coverage decides union discrimination for numeric branches. Each
 * bound, exclusive bound, divisor and constant set needs both a covering and a
 * non-covering adjacent case, or the predicate can over- or under-match
 * silently.
 *
 * 1. Assert covering pairs: number over integer, multiples, constant subsets and
 *    minimum, maximum and exclusive-bound relations.
 * 2. Assert the reversed or tighter non-covering twin of each relation.
 */
export const test_json_schema_type_checker_cover_number = (): void => {
  //----
  // SUCCESS SCENARIOS
  //----
  // COMMON
  TestEquality.equals(
    "number covers integer",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number" },
      y: { type: "integer" },
    }),
  );
  TestEquality.equals(
    "multipleOf covers multiplied",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number", multipleOf: 3 },
      y: { type: "number", multipleOf: 9 },
    }),
  );
  TestEquality.equals(
    "enum cover relationship",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: {
        oneOf: [{ const: 1 }, { const: 2 }, { const: 3 }],
      },
      y: {
        oneOf: [{ const: 1 }, { const: 2 }],
      },
    }),
  );

  // MINIMUM
  TestEquality.equals(
    "minimum covers when equal",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number", minimum: 1 },
      y: { type: "number", minimum: 1 },
    }),
  );
  TestEquality.equals(
    "minimum covers when less",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number", minimum: 1 },
      y: { type: "number", minimum: 2 },
    }),
  );
  TestEquality.equals(
    "exclusiveMinimum covers minimum only when less",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number", exclusiveMinimum: 1 },
      y: { type: "number", minimum: 2 },
    }),
  );

  // MAXIMUM
  TestEquality.equals(
    "maximum covers when equal",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number", maximum: 2 },
      y: { type: "number", maximum: 2 },
    }),
  );
  TestEquality.equals(
    "maximum covers when greater",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number", maximum: 2 },
      y: { type: "number", maximum: 1 },
    }),
  );
  TestEquality.equals(
    "exclusiveMaximum covers minimum only when greater",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number", exclusiveMaximum: 2 },
      y: { type: "number", maximum: 1 },
    }),
  );

  //----
  // FAILURE SCENARIOS
  //----
  // COMMON
  TestEquality.equals(
    "integer can't cover number",
    false,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "integer" },
      y: { type: "number" },
    }),
  );
  TestEquality.equals(
    "multipleOf can't cover none multiplied",
    false,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number", multipleOf: 3 },
      y: { type: "number", multipleOf: 4 },
    }),
  );
  TestEquality.equals(
    "enum non cover (but covered) relationship",
    false,
    OpenApiTypeChecker.covers({
      components: {},
      x: {
        oneOf: [{ const: 1 }, { const: 2 }],
      },
      y: {
        oneOf: [{ const: 1 }, { const: 2 }, { const: 3 }],
      },
    }),
  );

  // MINIMUM
  TestEquality.equals(
    "minimum can't cover when greater",
    false,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number", minimum: 2 },
      y: { type: "number", minimum: 1 },
    }),
  );
  TestEquality.equals(
    "exclusiveMinimum can't cover equal inclusive boundary",
    false,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number", exclusiveMinimum: 1 },
      y: { type: "number", minimum: 1 },
    }),
  );

  // MAXIMUM
  TestEquality.equals(
    "maximum can't cover when less",
    false,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number", maximum: 1 },
      y: { type: "number", maximum: 2 },
    }),
  );
  TestEquality.equals(
    "exclusiveMaximum can't cover equal inclusive boundary",
    false,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number", exclusiveMaximum: 2 },
      y: { type: "number", maximum: 2 },
    }),
  );
};
