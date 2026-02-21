import { TagBase } from "./TagBase";

/**
 * Exclusive maximum constraint (value < max).
 *
 * `ExclusiveMaximum<N>` validates that a number/bigint is strictly less than N.
 * Mutually exclusive with {@link Maximum}.
 *
 * @template Value Maximum bound (exclusive)
 * @author Jeongho Nam - https://github.com/samchon
 */
export type ExclusiveMaximum<Value extends number | bigint> = TagBase<{
  target: Value extends bigint ? "bigint" : "number";
  kind: "exclusiveMaximum";
  value: Value;
  validate: `$input < ${Cast<Value>}`;
  exclusive: ["exclusiveMaximum", "maximum"];
  schema: Value extends bigint
    ? {
        exclusiveMaximum: Numeric<Value>;
      }
    : {
        exclusiveMaximum: Value;
      };
}>;

type Cast<Value extends number | bigint> = Value extends number
  ? Value
  : `BigInt(${Value})`;
type Numeric<T extends bigint> = `${T}` extends `${infer N extends number}`
  ? N
  : never;
