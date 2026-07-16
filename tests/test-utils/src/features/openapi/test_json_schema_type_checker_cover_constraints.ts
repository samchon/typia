import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiTypeChecker } from "@typia/utils";

/**
 * Verifies schema coverage proves semantic containment for constrained values.
 *
 * Coverage previously treated every same-typed constant as covered and missed
 * exclusive endpoints, decimal divisibility, array uniqueness, and tuple length
 * constraints. Those false positives make union discrimination unsound.
 *
 * 1. Check positive and negative numeric/string constant containment.
 * 2. Check inclusive/exclusive ranges and exact decimal divisibility.
 * 3. Check arrays, tuples, uniqueness, and reference-flattened constraints.
 */
export const test_json_schema_type_checker_cover_constraints = (): void => {
  const components: OpenApi.IComponents = {
    schemas: {
      PositiveCent: {
        type: "number",
        minimum: 10,
        multipleOf: 0.01,
      },
      ValidCent: { const: 10.01 },
      InvalidCent: { const: 1.01 },
    },
  };
  const cases: Array<{
    name: string;
    expected: boolean;
    x: OpenApi.IJsonSchema;
    y: OpenApi.IJsonSchema;
  }> = [
    {
      name: "minimum accepts satisfying constant",
      expected: true,
      x: { type: "number", minimum: 10 },
      y: { const: 10 },
    },
    {
      name: "minimum rejects violating constant",
      expected: false,
      x: { type: "number", minimum: 10 },
      y: { const: 1 },
    },
    {
      name: "exclusive minimum rejects equal constant",
      expected: false,
      x: { type: "number", exclusiveMinimum: 10 },
      y: { const: 10 },
    },
    {
      name: "exclusive minimum does not cover equal inclusive boundary",
      expected: false,
      x: { type: "number", exclusiveMinimum: 1 },
      y: { type: "number", minimum: 1 },
    },
    {
      name: "inclusive minimum covers equal exclusive boundary",
      expected: true,
      x: { type: "number", minimum: 1 },
      y: { type: "number", exclusiveMinimum: 1 },
    },
    {
      name: "exclusive maximum does not cover equal inclusive boundary",
      expected: false,
      x: { type: "number", exclusiveMaximum: 1 },
      y: { type: "number", maximum: 1 },
    },
    {
      name: "decimal multiple covers its decimal multiple",
      expected: true,
      x: { type: "number", multipleOf: 0.01 },
      y: { type: "number", multipleOf: 0.03 },
    },
    {
      name: "decimal multiple rejects unrelated decimal",
      expected: false,
      x: { type: "number", multipleOf: 0.03 },
      y: { type: "number", multipleOf: 0.01 },
    },
    {
      name: "half multiple covers every integer",
      expected: true,
      x: { type: "number", multipleOf: 0.5 },
      y: { type: "integer" },
    },
    {
      name: "string minimum rejects one astral character",
      expected: false,
      x: { type: "string", minLength: 2 },
      y: { const: "😀" },
    },
    {
      name: "string maximum accepts one astral character",
      expected: true,
      x: { type: "string", maxLength: 1 },
      y: { const: "😀" },
    },
    {
      name: "pattern accepts matching constant",
      expected: true,
      x: { type: "string", pattern: "^a" },
      y: { const: "abc" },
    },
    {
      name: "pattern rejects nonmatching constant",
      expected: false,
      x: { type: "string", pattern: "^a" },
      y: { const: "b" },
    },
    {
      name: "unique array covers singleton tuple",
      expected: true,
      x: { type: "array", items: {}, uniqueItems: true },
      y: {
        type: "array",
        prefixItems: [{ type: "string" }],
        additionalItems: false,
        minItems: 1,
        maxItems: 1,
      },
    },
    {
      name: "unique array rejects nonunique-capable tuple",
      expected: false,
      x: { type: "array", items: {}, uniqueItems: true },
      y: {
        type: "array",
        prefixItems: [{ type: "string" }, { type: "string" }],
        additionalItems: false,
        minItems: 2,
        maxItems: 2,
      },
    },
    {
      name: "minimum-length array rejects optional tuple prefix",
      expected: false,
      x: { type: "array", items: {}, minItems: 2 },
      y: {
        type: "array",
        prefixItems: [{}, {}],
        additionalItems: false,
        minItems: 1,
        maxItems: 2,
      },
    },
    {
      name: "reference constraints accept contained reference",
      expected: true,
      x: { $ref: "#/components/schemas/PositiveCent" },
      y: { $ref: "#/components/schemas/ValidCent" },
    },
    {
      name: "reference constraints reject violating reference",
      expected: false,
      x: { $ref: "#/components/schemas/PositiveCent" },
      y: { $ref: "#/components/schemas/InvalidCent" },
    },
    {
      name: "numeric schema covers a contradictory numeric range",
      expected: true,
      x: { type: "number", minimum: 10 },
      y: { type: "number", minimum: 1, maximum: 0 },
    },
    {
      name: "numeric schema covers an equal exclusive empty range",
      expected: true,
      x: { type: "number", minimum: 10 },
      y: { type: "number", minimum: 1, exclusiveMaximum: 1 },
    },
    {
      name: "numeric schema does not cover an equal inclusive singleton",
      expected: false,
      x: { type: "number", minimum: 10 },
      y: { type: "number", minimum: 1, maximum: 1 },
    },
    {
      name: "string schema covers a contradictory length range",
      expected: true,
      x: { type: "string", minLength: 10 },
      y: { type: "string", minLength: 2, maxLength: 1 },
    },
    {
      name: "string schema does not cover a non-empty exact length",
      expected: false,
      x: { type: "string", minLength: 10 },
      y: { type: "string", minLength: 1, maxLength: 1 },
    },
  ];
  for (const test of cases)
    TestValidator.equals(
      test.name,
      OpenApiTypeChecker.covers({
        components,
        x: test.x,
        y: test.y,
      }),
      test.expected,
    );
};
