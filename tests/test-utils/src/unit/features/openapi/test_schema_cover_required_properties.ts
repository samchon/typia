import { ILlmSchema, OpenApi } from "@typia/interface";
import {
  LlmTypeChecker,
  OpenApiTypeChecker,
  OpenApiValidator,
} from "@typia/utils";
import assert from "node:assert/strict";

/**
 * Verifies object schema coverage respects required properties absent in the
 * subset.
 *
 * Every value admitted by a covered schema must satisfy the covering schema's
 * required keys. Walking only the subset's declared properties misses a
 * required key that is absent from that declaration entirely.
 *
 * 1. Contrast omitted, optional and required declarations of the same key.
 * 2. Preserve coverage when only the covering schema makes that key optional.
 * 3. Repeat the distinction through nested objects and local references.
 * 4. Preserve all eight authored additional-property/required rows moved from E2E.
 */
export const test_schema_cover_required_properties = (): void => {
  const required = {
    type: "object" as const,
    properties: { a: { type: "string" as const } },
    required: ["a"],
  };
  const optional = { ...required, required: [] };
  const empty = { type: "object" as const, properties: {}, required: [] };
  assert.equal(
    OpenApiValidator.create({ components: {}, schema: empty, required: true })(
      {},
    ).success,
    true,
  );
  assert.equal(
    OpenApiValidator.create({
      components: {},
      schema: required,
      required: true,
    })({}).success,
    false,
  );
  const nested = (schema: OpenApi.IJsonSchema): OpenApi.IJsonSchema => ({
    type: "object",
    properties: { value: schema },
    required: ["value"],
  });
  const cases: Array<[OpenApi.IJsonSchema, OpenApi.IJsonSchema, boolean]> = [
    [required, empty, false],
    [required, optional, false],
    [required, required, true],
    [optional, required, true],
    [
      required,
      {
        ...empty,
        properties: { b: { type: "string" as const } },
        required: ["b"],
      },
      false,
    ],
    [nested(required), nested(empty), false],
    [nested(required), nested(required), true],
  ];
  for (const [x, y, expected] of cases) {
    assert.equal(OpenApiTypeChecker.covers({ components: {}, x, y }), expected);
    assert.equal(
      LlmTypeChecker.covers({
        $defs: {},
        x: x as ILlmSchema,
        y: y as ILlmSchema,
      }),
      expected,
    );
    assert.equal(
      OpenApiTypeChecker.covers({
        components: { schemas: { X: x, Y: y } },
        x: { $ref: "#/components/schemas/X" },
        y: { $ref: "#/components/schemas/Y" },
      }),
      expected,
    );
    assert.equal(
      LlmTypeChecker.covers({
        $defs: { X: x as ILlmSchema, Y: y as ILlmSchema },
        x: { $ref: "#/$defs/X" },
        y: { $ref: "#/$defs/Y" },
      }),
      expected,
    );
  }

  // Authored-only cases transferred from the native object-cover test.
  const components: OpenApi.IComponents = {};
  assert.equal(
    true,
    OpenApiTypeChecker.covers({
      components,
      x: {
        type: "object",
        properties: {
          id: { type: "string" },
        },
        required: [],
      },
      y: {
        type: "object",
        properties: {
          id: { type: "string" },
        },
        required: ["id"],
      },
    }),
  );
  assert.equal(
    true,
    OpenApiTypeChecker.covers({
      components,
      x: {
        type: "object",
        properties: {},
        additionalProperties: true,
        required: [],
      },
      y: {
        type: "object",
        properties: {},
        required: [],
      },
    }),
  );
  assert.equal(
    true,
    OpenApiTypeChecker.covers({
      components,
      x: {
        type: "object",
        properties: {},
        additionalProperties: {
          type: "object",
          properties: {},
          required: [],
        },
        required: [],
      },
      y: {
        type: "object",
        properties: {},
        required: [],
      },
    }),
  );
  assert.equal(
    true,
    OpenApiTypeChecker.covers({
      components,
      x: {
        type: "object",
        properties: {},
        additionalProperties: true,
        required: [],
      },
      y: {
        type: "object",
        properties: {},
        additionalProperties: {
          type: "object",
          properties: {
            id: { type: "string" },
          },
          required: ["id"],
        },
        required: [],
      },
    }),
  );
  assert.equal(
    false,
    OpenApiTypeChecker.covers({
      components,
      x: {
        type: "object",
        properties: {
          id: { type: "string" },
        },
        required: ["id"],
      },
      y: {
        type: "object",
        properties: {
          id: { type: "string" },
        },
        required: [],
      },
    }),
  );
  assert.equal(
    false,
    OpenApiTypeChecker.covers({
      components,
      x: {
        type: "object",
        properties: {},
        required: [],
      },
      y: {
        type: "object",
        properties: {},
        additionalProperties: true,
        required: [],
      },
    }),
  );
  assert.equal(
    false,
    OpenApiTypeChecker.covers({
      components,
      x: {
        type: "object",
        properties: {},
        required: [],
      },
      y: {
        type: "object",
        properties: {},
        additionalProperties: {
          type: "object",
          properties: {},
          required: [],
        },
        required: [],
      },
    }),
  );
  assert.equal(
    false,
    OpenApiTypeChecker.covers({
      components,
      x: {
        type: "object",
        properties: {},
        additionalProperties: {
          type: "object",
          properties: {
            id: { type: "string" },
          },
          required: [],
        },
        required: [],
      },
      y: {
        type: "object",
        properties: {},
        additionalProperties: true,
        required: [],
      },
    }),
  );
};
