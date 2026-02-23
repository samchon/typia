import { TestValidator } from "@nestia/e2e";
import { OpenApiTypeChecker } from "@typia/utils";

export const test_json_schema_type_checker_cover_number = (): void => {
  //----
  // SUCCESS SCENARIOS
  //----
  // COMMON
  TestValidator.equals(
    "number covers integer",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number" },
      y: { type: "integer" },
    }),
  );
  TestValidator.equals(
    "multipleOf covers multiplied",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number", multipleOf: 3 },
      y: { type: "number", multipleOf: 9 },
    }),
  );
  TestValidator.equals(
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
  TestValidator.equals(
    "minimum covers when equal",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number", minimum: 1 },
      y: { type: "number", minimum: 1 },
    }),
  );
  TestValidator.equals(
    "minimum covers when less",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number", minimum: 1 },
      y: { type: "number", minimum: 2 },
    }),
  );
  TestValidator.equals(
    "exclusiveMinimum covers minimum only when less",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number", exclusiveMinimum: 1 },
      y: { type: "number", minimum: 2 },
    }),
  );

  // MAXIMUM
  TestValidator.equals(
    "maximum covers when equal",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number", maximum: 2 },
      y: { type: "number", maximum: 2 },
    }),
  );
  TestValidator.equals(
    "maximum covers when greater",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number", maximum: 2 },
      y: { type: "number", maximum: 1 },
    }),
  );
  TestValidator.equals(
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
  TestValidator.equals(
    "integer can't cover number",
    false,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "integer" },
      y: { type: "number" },
    }),
  );
  TestValidator.equals(
    "multipleOf can't cover none multiplied",
    false,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number", multipleOf: 3 },
      y: { type: "number", multipleOf: 4 },
    }),
  );
  TestValidator.equals(
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
  TestValidator.equals(
    "minimum can't cover when greater",
    false,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number", minimum: 2 },
      y: { type: "number", minimum: 1 },
    }),
  );
  TestValidator.equals(
    "exclusiveMinimum can cover equal",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number", exclusiveMinimum: 1 },
      y: { type: "number", minimum: 1 },
    }),
  );

  // MAXIMUM
  TestValidator.equals(
    "maximum can't cover when less",
    false,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number", maximum: 1 },
      y: { type: "number", maximum: 2 },
    }),
  );
  TestValidator.equals(
    "exclusiveMaximum can cover equal",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "number", exclusiveMaximum: 2 },
      y: { type: "number", maximum: 2 },
    }),
  );
};
