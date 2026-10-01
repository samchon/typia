import { TagBase } from "./TagBase";

/**
 * Inclusive maximum value constraint (value <= max).
 *
 * `Maximum<N>` is a type tag that validates numeric values are less than or
 * equal to the specified bound. Apply it to `number` or `bigint` properties
 * using TypeScript intersection types.
 *
 * This constraint is **mutually exclusive** with {@link ExclusiveMaximum} - you
 * cannot use both on the same property. Use `Maximum` for inclusive bounds (<=)
 * and `ExclusiveMaximum` for exclusive bounds (<).
 *
 * The constraint is enforced at runtime by `typia.is()`, `typia.assert()`, and
 * `typia.validate()`. It also generates `maximum` in JSON Schema output.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @example
 *   interface Rating {
 *     // Score from 0-100
 *     score: number & Minimum<0> & Maximum<100>;
 *     // Percentage cannot exceed 1.0
 *     ratio: number & Maximum<1.0>;
 *   }
 *
 * @template Value The maximum allowed value (inclusive)
 *
 * @evidence contracts/common.md#principled-implementation The check is `$input <= N` for numbers and `$input <= BigInt(N)` for bigint, which are the inclusive bound in the value's own type; `schema.maximum` carries the bound, rendered as a JSON number for bigint, which is inexact beyond the safe-integer range. Its exclusivity list keeps it from combining with ExclusiveMaximum.
 * @evidence contracts/common.md#clear-and-simple-design Private Cast and Numeric helpers are shared in form with the other bound tags and used once each here.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts A general comparison template with no special-cased value.
 * @evidence contracts/common.md#meaningful-documentation The comment states the inclusive meaning, the mutual exclusion with ExclusiveMaximum and examples for a score and a ratio.
 */
export type Maximum<Value extends number | bigint> = TagBase<{
  target: Value extends bigint ? "bigint" : "number";
  kind: "maximum";
  value: Value;
  validate: `$input <= ${Cast<Value>}`;
  exclusive: ["maximum", "exclusiveMaximum"];
  schema: Value extends bigint
    ? { maximum: Numeric<Value> }
    : { maximum: Value };
}>;

type Cast<Value extends number | bigint> = Value extends number
  ? Value
  : `BigInt(${Value})`;
type Numeric<T extends bigint> = `${T}` extends `${infer N extends number}`
  ? N
  : never;
