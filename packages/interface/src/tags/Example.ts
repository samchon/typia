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
 * @example
 *   interface User {
 *     email: string & Format<"email"> & Example<"user@example.com">;
 *     age: number & Minimum<0> & Example<25>;
 *     tags: string[] & Example<["admin", "active"]>;
 *   }
 *
 * @template Value The example value (any JSON-compatible type)
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
