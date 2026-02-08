import { TagBase } from "./TagBase";

/**
 * Minimum value constraint tag.
 *
 * Enforces that a numeric value must be greater than or equal to the specified
 * minimum. This constraint validates that the input value satisfies: input >=
 * minimum.
 *
 * Example usage:
 *
 * ```typescript
 * type Age = number & tags.Minimum<0>; // Age must be 0 or greater
 * type Balance = bigint & tags.Minimum<0n>; // BigInt balance must be non-negative
 * ```
 *
 * Note: This tag is mutually exclusive with ExclusiveMinimum. You cannot apply
 * both Minimum and ExclusiveMinimum constraints to the same property.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Value - The minimum value constraint (number or bigint literal)
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
