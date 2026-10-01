import { TagBase } from "./TagBase";

/**
 * Inclusive minimum value constraint (value >= min).
 *
 * `Minimum<N>` is a type tag that validates numeric values are greater than or
 * equal to the specified bound. Apply it to `number` or `bigint` properties
 * using TypeScript intersection types.
 *
 * This constraint is **mutually exclusive** with {@link ExclusiveMinimum} - you
 * cannot use both on the same property. Use `Minimum` for inclusive bounds (>=)
 * and `ExclusiveMinimum` for exclusive bounds (>).
 *
 * The constraint is enforced at runtime by `typia.is()`, `typia.assert()`, and
 * `typia.validate()`. It also generates `minimum` in JSON Schema output.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @example
 *   interface Product {
 *     // Price must be 0 or greater
 *     price: number & Minimum<0>;
 *     // Quantity must be at least 1
 *     quantity: number & Minimum<1>;
 *   }
 *
 * @template Value The minimum allowed value (inclusive)
 *
 * @evidence contracts/common.md#principled-implementation The check is `N <= $input` for numbers and `BigInt(N) <= $input` for bigint, which is the inclusive lower bound in the value's own type; `schema.minimum` carries the bound, rendered as a JSON number for bigint and therefore inexact beyond the safe-integer range. It is exclusive with ExclusiveMinimum.
 * @evidence contracts/common.md#clear-and-simple-design Private Cast and Numeric helpers mirror the other bound tags and are used once each here.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts A general comparison template without a special-cased value.
 * @evidence contracts/common.md#meaningful-documentation The comment states the inclusive meaning, the exclusion of ExclusiveMinimum and gives price and quantity examples.
 */
export type Minimum<Value extends number | bigint> = TagBase<{
  target: Value extends bigint ? "bigint" : "number";
  kind: "minimum";
  value: Value;
  validate: `${Cast<Value>} <= $input`;
  exclusive: ["minimum", "exclusiveMinimum"];
  schema: Value extends bigint
    ? { minimum: Numeric<Value> }
    : { minimum: Value };
}>;

type Cast<Value extends number | bigint> = Value extends number
  ? Value
  : `BigInt(${Value})`;
type Numeric<T extends bigint> = `${T}` extends `${infer N extends number}`
  ? N
  : never;
