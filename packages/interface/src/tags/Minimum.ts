import { TagBase } from "./TagBase";

/**
<<<<<<< HEAD
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
=======
 * Inclusive minimum value constraint (value >= min).
 *
 * `Minimum<N>` is a type tag that validates numeric values are greater than or
 * equal to the specified bound. Apply it to `number` or `bigint` properties
 * using TypeScript intersection types.
 *
 * This constraint is **mutually exclusive** with {@link ExclusiveMinimum} - you
 * cannot use both on the same property. Use `Minimum` for inclusive bounds (>=)
 * and `ExclusiveMinimum` for exclusive bounds (>).
 *
 * The constraint is enforced at runtime by `typia.is()`, `typia.assert()`, and
 * `typia.validate()`. It also generates `minimum` in JSON Schema output.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   interface Product {
 *     // Price must be 0 or greater
 *     price: number & Minimum<0>;
 *     // Quantity must be at least 1
 *     quantity: number & Minimum<1>;
 *   }
 *
 * @template Value The minimum allowed value (inclusive)
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
