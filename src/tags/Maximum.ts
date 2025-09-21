import { TagBase } from "./TagBase";

/**
 * Maximum value constraint tag.
 *
 * Enforces that a numeric value must be less than or equal to the specified
 * maximum. This constraint validates that the input value satisfies: input <=
 * maximum.
 *
 * Example usage:
 *
 * ```typescript
 * type Percentage = number & tags.Maximum<100>; // Must be <= 100
 * type SmallInt = bigint & tags.Maximum<255n>; // BigInt must be <= 255
 * ```
 *
 * Note: This tag is mutually exclusive with ExclusiveMaximum. You cannot apply
 * both Maximum and ExclusiveMaximum constraints to the same property.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Value - The maximum value constraint (number or bigint literal)
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
