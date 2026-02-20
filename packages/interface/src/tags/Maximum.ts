import { TagBase } from "./TagBase";

/**
 * Maximum constraint (value <= max).
 *
 * `Maximum<N>` validates that a number/bigint is less than or equal to N.
 * Mutually exclusive with {@link ExclusiveMaximum}.
 *
 * @template Value Maximum bound (inclusive)
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
