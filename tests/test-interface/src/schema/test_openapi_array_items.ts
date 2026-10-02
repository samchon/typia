import { OpenApiV3_1, OpenApiV3_2 } from "@typia/interface";

/**
 * Verifies raw OpenAPI array schemas admit boolean item schemas.
 *
 * JSON Schema 2020-12 applies items to positions after prefixItems, or to every
 * position without a prefix. The public raw types must represent both boolean
 * schemas as well as schema objects and omitted items. Legacy tuple arrays
 * remain accepted by the existing converter input contract.
 *
 * 1. Check false, true, schema and omitted items with and without a prefix.
 * 2. Preserve legacy tuple items and mixed array/null boolean items.
 * 3. Reject numeric and string items in ordinary and mixed array schemas.
 *
 */
export type OpenApiArrayItemsCases = [
  Assert<ArrayAccepted<{ type: "array"; prefixItems: [{ type: "string" }] }>>,
  Assert<
    ArrayAccepted<{
      type: "array";
      prefixItems: [{ type: "string" }];
      items: false;
    }>
  >,
  Assert<
    ArrayAccepted<{
      type: "array";
      prefixItems: [{ type: "string" }];
      items: true;
    }>
  >,
  Assert<
    ArrayAccepted<{
      type: "array";
      prefixItems: [{ type: "string" }];
      items: { type: "number" };
    }>
  >,
  Assert<ArrayAccepted<{ type: "array" }>>,
  Assert<ArrayAccepted<{ type: "array"; items: false }>>,
  Assert<ArrayAccepted<{ type: "array"; items: true }>>,
  Assert<ArrayAccepted<{ type: "array"; items: { type: "number" } }>>,
  Assert<ArrayAccepted<{ type: "array"; items: [{ type: "string" }] }>>,
  Assert<MixedAccepted<{ type: ["array", "null"]; items: false }>>,
  Assert<MixedAccepted<{ type: ["array", "null"]; items: true }>>,
  Assert<Rejected<{ type: "array"; items: 42 }>>,
  Assert<Rejected<{ type: "array"; items: "invalid" }>>,
  Assert<
    Rejected<{ type: "array"; prefixItems: [{ type: "string" }]; items: 42 }>
  >,
  Assert<
    Rejected<{
      type: "array";
      prefixItems: [{ type: "string" }];
      items: "invalid";
    }>
  >,
  Assert<Rejected<{ type: ["array", "null"]; items: 42 }>>,
  Assert<Rejected<{ type: ["array", "null"]; items: "invalid" }>>,
];

type Assert<T extends true> = T;

type ArrayAccepted<T> = [T] extends [
  OpenApiV3_1.IJsonSchema.IArray &
    OpenApiV3_2.IJsonSchema.IArray &
    OpenApiV3_1.IJsonSchema &
    OpenApiV3_2.IJsonSchema,
]
  ? true
  : false;

type MixedAccepted<T> = [T] extends [
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
