import { TagBase } from "./TagBase";

/**
 * Exclusive maximum value constraint tag.
 *
 * Enforces that a numeric value must be strictly less than the specified
 * maximum (not equal). This constraint validates that the input value
 * satisfies: input < maximum.
 *
 * Example usage:
 *
 * ```typescript
 * type Discount = number & tags.ExclusiveMaximum<100>; // Must be < 100
 * type ByteValue = bigint & tags.ExclusiveMaximum<256n>; // Must be < 256
 * ```
 *
 * Note: This tag is mutually exclusive with Maximum. You cannot apply both
 * ExclusiveMaximum and Maximum constraints to the same property.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Value - The exclusive maximum value constraint (number or bigint
 *   literal)
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
