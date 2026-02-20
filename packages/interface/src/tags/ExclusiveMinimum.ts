import { TagBase } from "./TagBase";

/**
 * Exclusive minimum constraint (value > min).
 *
 * `ExclusiveMinimum<N>` validates that a number/bigint is strictly greater
 * than N. Mutually exclusive with {@link Minimum}.
 *
 * @template Value Minimum bound (exclusive)
 * @author Jeongho Nam - https://github.com/samchon
 */
export type ExclusiveMinimum<Value extends number | bigint> = TagBase<{
  target: Value extends bigint ? "bigint" : "number";
  kind: "exclusiveMinimum";
  value: Value;
  validate: `${Cast<Value>} < $input`;
  exclusive: ["exclusiveMinimum", "minimum"];
  schema: Value extends bigint
    ? {
        exclusiveMinimum: Numeric<Value>;
      }
    : {
        exclusiveMinimum: Value;
      };
}>;

type Cast<Value extends number | bigint> = Value extends number
  ? Value
  : `BigInt(${Value})`;
type Numeric<T extends bigint> = `${T}` extends `${infer N extends number}`
  ? N
  : never;
