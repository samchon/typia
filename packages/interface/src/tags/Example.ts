import { TagBase } from "./TagBase";

/**
 * Adds a single example value to JSON Schema.
 *
 * `Example<Value>` provides documentation for API clients. For multiple
 * named examples, use {@link Examples} instead.
 *
 * @template Value Example value (primitive, object, array, or null)
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
