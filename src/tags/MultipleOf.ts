import { TagBase } from "./TagBase";

/**
 * Multiple of constraint tag.
 *
 * Enforces that a numeric value must be an exact multiple of the specified
 * divisor. This constraint validates that the input value satisfies: input %
 * divisor === 0.
 *
 * Example usage:
 *
 * ```typescript
 * type EvenNumber = number & tags.MultipleOf<2>; // Must be even (2, 4, 6, ...)
 * type DollarAmount = number & tags.MultipleOf<0.01>; // Must be in cents
 * ```
 *
 * Common use cases include validating even/odd numbers, currency amounts, time
 * intervals, or any value that must align to specific increments.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Value - The divisor value that input must be a multiple of (number
 *   or bigint literal)
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
