import { TagBase } from "./TagBase";

/**
 * Multiple-of constraint (value % divisor === 0).
 *
 * `MultipleOf<N>` validates that a number/bigint is exactly divisible by N.
 *
 * @template Value Divisor value
 * @author Jeongho Nam - https://github.com/samchon
 */
export type MultipleOf<Value extends number | bigint> = TagBase<{
  target: Value extends bigint ? "bigint" : "number";
  kind: "multipleOf";
  value: Value;
  validate: `$input % ${Cast<Value>} === ${Value extends bigint
    ? Cast<0n>
    : 0}`;
  exclusive: true;
  schema: Value extends bigint
    ? { multipleOf: Numeric<Value> }
    : { multipleOf: Value };
}>;

type Cast<Value extends number | bigint> = Value extends number
  ? Value
  : `BigInt(${Value})`;
type Numeric<T extends bigint> = `${T}` extends `${infer N extends number}`
  ? N
  : never;
