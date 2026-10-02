import { TagBase } from "./TagBase";

/**
 * Single example value for JSON Schema documentation.
 *
 * `Example<Value>` is a type tag that adds a representative example value to
 * the generated JSON Schema. This is metadata-only - it appears in the
 * `example` field of the schema and helps API consumers understand expected
 * values.
 *
 * Examples are displayed in API documentation tools like Swagger UI and can be
 * used by code generators to produce more helpful client code.
 *
 * Supports all JSON-compatible types: primitives, objects, arrays, and null.
 * For multiple named examples, use {@link Examples} instead.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @example
 *   interface User {
 *     email: string & Format<"email"> & Example<"user@example.com">;
 *     age: number & Minimum<0> & Example<25>;
 *     tags: string[] & Example<["admin", "active"]>;
 *   }
 *
 * @template Value The example value (any JSON-compatible type)
 *
 * @evidence contracts/common.md#principled-implementation The value is stored verbatim in `schema.example` for any JSON-compatible target; a bigint example is converted to a number through the same text-template inference as Default, which cannot preserve integers beyond the safe range. The tag is exclusive because JSON Schema has one `example` slot.
 * @evidence contracts/common.md#clear-and-simple-design A single TagBase over the value and a conditional for the bigint case; the local Numeric helper is repeated in each tag file and is not shared.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Metadata only; the example is not checked against the property type at runtime.
 * @evidence contracts/common.md#meaningful-documentation The comment distinguishes it from Examples, lists the supported JSON-compatible kinds and gives examples for string, number and array properties.
 */
export type Example<
  Value extends
    | boolean
    | bigint
    | number
    | string
    | object
    | Array<unknown>
    | null,
> = TagBase<{
  target: "boolean" | "bigint" | "number" | "string" | "array" | "object";
  kind: "example";
  value: Value;
  exclusive: true;
  schema: Value extends bigint
    ? { example: Numeric<Value> }
    : { example: Value };
}>;

type Numeric<T extends bigint> = `${T}` extends `${infer N extends number}`
  ? N
  : never;
