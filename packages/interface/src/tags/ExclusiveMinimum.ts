import { TagBase } from "./TagBase";

/**
 * Exclusive minimum value constraint (value > min).
 *
 * `ExclusiveMinimum<N>` is a type tag that validates numeric values are
 * strictly greater than the specified bound (not equal). Apply it to `number`
 * or `bigint` properties using TypeScript intersection types.
 *
 * This constraint is **mutually exclusive** with {@link Minimum} - you cannot
 * use both on the same property. Use `ExclusiveMinimum` for exclusive bounds
 * (>) and `Minimum` for inclusive bounds (>=).
 *
 * The constraint is enforced at runtime by `typia.is()`, `typia.assert()`, and
 * `typia.validate()`. It also generates `exclusiveMinimum` in JSON Schema.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   interface PositiveNumber {
 *     // Must be greater than 0, not equal to 0
 *     value: number & ExclusiveMinimum<0>;
 *   }
 *
 * @template Value The minimum bound (exclusive - value must be greater)
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
