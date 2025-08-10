import { TagBase } from "./TagBase";

/**
 * Exclusive minimum value constraint tag.
 *
 * Enforces that a numeric value must be strictly greater than the specified
 * minimum (not equal). This constraint validates that the input value
 * satisfies: input > minimum.
 *
 * Example usage:
 *
 * ```typescript
 * type PositiveNumber = number & tags.ExclusiveMinimum<0>; // Must be > 0
 * type LargeCount = bigint & tags.ExclusiveMinimum<999n>; // Must be > 999
 * ```
 *
 * Note: This tag is mutually exclusive with Minimum. You cannot apply both
 * ExclusiveMinimum and Minimum constraints to the same property.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Value - The exclusive minimum value constraint (number or bigint
 *   literal)
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
