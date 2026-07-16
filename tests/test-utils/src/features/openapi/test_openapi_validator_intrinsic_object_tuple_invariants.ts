import { TestValidator } from "@nestia/e2e";
import { IValidation, OpenApi } from "@typia/interface";
import { OpenApiValidator } from "@typia/utils";

/**
 * Verifies OpenAPI validation enforces intrinsic JSON and tuple invariants.
 *
 * Object validation previously admitted every non-null JavaScript object,
 * numeric validation admitted non-finite values, and tuple validation ignored
 * bounds, uniqueness, optional prefixes, and element requiredness. These
 * expectations come from the JSON data model and JSON Schema 2020-12 rather
 * than the prior implementation.
 *
 * 1. Check plain/null-prototype objects against arrays and native instances.
 * 2. Reject non-finite numbers and unresolved inherited references.
 * 3. Exercise tuple min/max/unique, optional prefixes, required present elements,
 *    typed rest items, false rest items, and empty tuples.
 */
export const test_openapi_validator_intrinsic_object_tuple_invariants =
  (): void => {
    const objectSchema: OpenApi.IJsonSchema.IObject = {
      type: "object",
      properties: { name: { type: "string" } },
      required: ["name"],
    };
    expectSuccess("plain object", objectSchema, { name: "typia" });
    expectSuccess(
      "null-prototype object",
      objectSchema,
      Object.assign(Object.create(null), { name: "typia" }),
    );
    const emptyObjectSchema: OpenApi.IJsonSchema.IObject = { type: "object" };
    for (const [label, value] of [
      ["array", []],
      ["date", new Date(0)],
      ["map", new Map()],
      ["set", new Set()],
      ["class", new (class Payload {})()],
    ] as const)
      expectFailure(`${label} is not a JSON object`, emptyObjectSchema, value);
    expectFailure(
      "inherited object property is absent",
      objectSchema,
      Object.create({ name: "inherited" }),
    );

    for (const value of [
      Number.NaN,
      Number.POSITIVE_INFINITY,
      Number.NEGATIVE_INFINITY,
    ]) {
      expectFailure("non-finite number", { type: "number" }, value);
      expectFailure("non-finite integer", { type: "integer" }, value);
    }
    expectSuccess("finite number boundary", { type: "number" }, 0);
    expectSuccess("finite integer boundary", { type: "integer" }, 0);
    expectSuccess(
      "number bound boundary",
      { type: "number", minimum: 0, maximum: 1 },
      1,
    );
    expectFailure(
      "number bound violation",
      { type: "number", minimum: 0, maximum: 1 },
      2,
    );

    const inheritedSchemas = Object.create({
      toString: { type: "string" },
    }) as Record<string, OpenApi.IJsonSchema>;
    expectFailure(
      "inherited reference is unresolved",
      { $ref: "#/components/schemas/toString" },
      "not actually resolved",
      { schemas: inheritedSchemas },
    );
    expectSuccess(
      "reserved own reference resolves",
      { $ref: "#/components/schemas/toString" },
      "resolved",
      { schemas: Object.fromEntries([["toString", { type: "string" }]]) },
    );
    expectFailure(
      "cyclic reference chain fails deterministically",
      { $ref: "#/components/schemas/Loop" },
      "value",
      {
        schemas: {
          Loop: { $ref: "#/components/schemas/Alias" },
          Alias: { $ref: "#/components/schemas/Loop" },
        },
      },
    );
    expectFailure(
      "cyclic union reference fails deterministically",
      { $ref: "#/components/schemas/UnionLoop" },
      "value",
      {
        schemas: {
          UnionLoop: {
            oneOf: [{ $ref: "#/components/schemas/UnionLoop" }],
          },
        },
      },
    );

    const optionalTuple: OpenApi.IJsonSchema.ITuple = {
      type: "array",
      prefixItems: [{ type: "string" }, { type: "number" }],
      additionalItems: false,
      minItems: 1,
      maxItems: 2,
    };
    expectSuccess("optional trailing prefix", optionalTuple, ["first"]);
    expectFailure("tuple minimum", optionalTuple, []);
    expectFailure("tuple maximum", optionalTuple, ["first", 2, 3]);
    expectFailure(
      "present tuple element is required",
      optionalTuple,
      ["first", undefined],
      {},
      false,
    );
    expectFailure(
      "tuple holes are not present JSON values",
      optionalTuple,
      Object.assign(new Array(2), { 0: "first" }),
      {},
      false,
    );

    const uniqueTuple: OpenApi.IJsonSchema.ITuple = {
      type: "array",
      prefixItems: [{ type: "number" }, { type: "number" }],
      additionalItems: false,
      minItems: 2,
      uniqueItems: true,
    };
    expectFailure("tuple uniqueness", uniqueTuple, [1, 1]);
    expectFailure(
      "structural array duplicates",
      {
        type: "array",
        items: {},
        uniqueItems: true,
      },
      [0, { id: 1 }, { id: 1 }],
    );
    expectSuccess("tuple unique values", uniqueTuple, [1, 2]);

    const restTuple: OpenApi.IJsonSchema.ITuple = {
      type: "array",
      prefixItems: [{ type: "string" }],
      additionalItems: { type: "number" },
      minItems: 1,
    };
    expectSuccess("typed tuple rest", restTuple, ["first", 1, 2]);
    expectFailure("invalid tuple rest", restTuple, ["first", "second"]);
    expectSuccess(
      "empty fixed tuple",
      { type: "array", prefixItems: [], additionalItems: false, maxItems: 0 },
      [],
    );
  };

const expectSuccess = (
  label: string,
  schema: OpenApi.IJsonSchema,
  value: unknown,
  components: OpenApi.IComponents = {},
  required: boolean = true,
): void =>
  TestValidator.equals(
    label,
    validate(schema, value, components, required).success,
    true,
  );
const expectFailure = (
  label: string,
  schema: OpenApi.IJsonSchema,
  value: unknown,
  components: OpenApi.IComponents = {},
  required: boolean = true,
): void =>
  TestValidator.equals(
    label,
    validate(schema, value, components, required).success,
    false,
  );

const validate = (
  schema: OpenApi.IJsonSchema,
  value: unknown,
  components: OpenApi.IComponents,
  required: boolean,
): IValidation<unknown> =>
  OpenApiValidator.validate({ components, schema, value, required });
