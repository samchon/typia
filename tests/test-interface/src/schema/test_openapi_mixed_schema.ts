import { OpenApiV3_1, OpenApiV3_2 } from "@typia/interface";

/**
 * Verifies OpenAPI mixed schemas admit independently optional schema keywords.
 *
 * OpenAPI 3.1 and 3.2 use JSON Schema's type arrays. A nullable scalar need not
 * also declare a constant, every composition keyword and a reference; its
 * default may be a scalar value. Optional keywords retain their own declared
 * value types when present.
 *
 * 1. Check nullable scalar, array and object defaults against both versions.
 * 2. Check each composition/reference keyword independently and together.
 * 3. Reject an unknown type name and malformed composition/reference values.
 */
export type OpenApiMixedSchemaCases = [
  Assert<Accepted<{ type: ["string", "null"] }>>,
  Assert<Accepted<{ type: ["string", "null"]; default: "ready" }>>,
  Assert<Accepted<{ type: ["number", "null"]; default: 42 }>>,
  Assert<Accepted<{ type: ["boolean", "null"]; default: true }>>,
  Assert<Accepted<{ type: ["string", "null"]; default: null }>>,
  Assert<Accepted<{ type: ["array", "null"]; default: [1, 2] }>>,
  Assert<Accepted<{ type: ["object", "null"]; default: { value: 1 } }>>,
  Assert<Accepted<{ type: ["string", "null"]; const: "ready" }>>,
  Assert<Accepted<{ type: ["string", "null"]; oneOf: [{ type: "string" }] }>>,
  Assert<Accepted<{ type: ["string", "null"]; anyOf: [{ type: "string" }] }>>,
  Assert<Accepted<{ type: ["string", "null"]; allOf: [{ type: "string" }] }>>,
  Assert<
    Accepted<{ type: ["string", "null"]; $ref: "#/components/schemas/S" }>
  >,
  Assert<
    Accepted<{
      type: ["string", "null"];
      const: "ready";
      oneOf: [{ type: "string" }];
      anyOf: [{ type: "string" }];
      allOf: [{ type: "string" }];
      $ref: "#/components/schemas/S";
      default: "ready";
    }>
  >,
  Assert<Rejected<{ type: ["invalid", "null"] }>>,
  Assert<Rejected<{ type: ["string", "null"]; oneOf: "invalid" }>>,
  Assert<Rejected<{ type: ["string", "null"]; anyOf: 42 }>>,
  Assert<Rejected<{ type: ["string", "null"]; allOf: { type: "string" } }>>,
  Assert<Rejected<{ type: ["string", "null"]; $ref: 42 }>>,
];

type Assert<T extends true> = T;

type Accepted<T> = [T] extends [
  OpenApiV3_1.IJsonSchema.IMixed &
    OpenApiV3_2.IJsonSchema.IMixed &
    OpenApiV3_1.IJsonSchema &
    OpenApiV3_2.IJsonSchema,
]
  ? true
  : false;

type Rejected<T> = [T] extends [
  OpenApiV3_1.IJsonSchema | OpenApiV3_2.IJsonSchema,
]
  ? false
  : true;
