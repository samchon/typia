import { TagBase } from "./TagBase";

/**
<<<<<<< HEAD
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
=======
 * Exclusive maximum value constraint (value < max).
 *
 * `ExclusiveMaximum<N>` is a type tag that validates numeric values are
 * strictly less than the specified bound (not equal). Apply it to `number` or
 * `bigint` properties using TypeScript intersection types.
 *
 * This constraint is **mutually exclusive** with {@link Maximum} - you cannot
 * use both on the same property. Use `ExclusiveMaximum` for exclusive bounds
 * (<) and `Maximum` for inclusive bounds (<=).
 *
 * The constraint is enforced at runtime by `typia.is()`, `typia.assert()`, and
 * `typia.validate()`. It also generates `exclusiveMaximum` in JSON Schema.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   interface Temperature {
 *     // Must be less than 100 (boiling point), not equal
 *     celsius: number & ExclusiveMaximum<100>;
 *   }
 *
 * @template Value The maximum bound (exclusive - value must be less)
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
