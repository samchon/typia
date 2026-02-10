import { TestValidator } from "@nestia/e2e";
import { OpenApiTypeChecker } from "@samchon/openapi";
import typia, { tags } from "typia";

export const test_json_schema_type_checker_cover_string = (): void => {
  // SUCCESS SCENARIOS
  TestValidator.equals(
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
  TestValidator.equals(
    "minLength covers when equal",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "string", minLength: 1 },
      y: { type: "string", minLength: 1 },
    }),
  );
  TestValidator.equals(
    "minLength covers when less",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "string", minLength: 1 },
      y: { type: "string", minLength: 2 },
    }),
  );
  TestValidator.equals(
    "maxLength covers when equal",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "string", maxLength: 2 },
      y: { type: "string", maxLength: 2 },
    }),
  );
  TestValidator.equals(
    "maxLength covers when greater",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "string", maxLength: 2 },
      y: { type: "string", maxLength: 1 },
    }),
  );
  TestValidator.equals(
    "pattern covers when equal",
    true,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "string", pattern: "^a.*" },
      y: { type: "string", pattern: "^a.*" },
    }),
  );

  // FAILURE SCENARIOS
  TestValidator.equals(
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
  TestValidator.equals(
    "minLength can't cover when greater",
    false,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "string", minLength: 2 },
      y: { type: "string", minLength: 1 },
    }),
  );
  TestValidator.equals(
    "maxLength can't cover when less",
    false,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "string", maxLength: 1 },
      y: { type: "string", maxLength: 2 },
    }),
  );
  TestValidator.equals(
    "pattern can't cover when different",
    false,
    OpenApiTypeChecker.covers({
      components: {},
      x: { type: "string", pattern: "^a.*" },
      y: { type: "string", pattern: "^b.*" },
    }),
  );

  // CHECK FORMAT CASE
  for (const x of typia.misc.literals<tags.Format.Value>())
    for (const y of typia.misc.literals<tags.Format.Value>())
      TestValidator.equals(
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
