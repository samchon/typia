import { TagBase } from "./TagBase";

/**
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
