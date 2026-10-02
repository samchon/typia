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
 *
 * @example
 *   interface PositiveNumber {
 *     // Must be greater than 0, not equal to 0
 *     value: number & ExclusiveMinimum<0>;
 *   }
 *
 * @template Value The minimum bound (exclusive - value must be greater)
 *
 * @evidence contracts/common.md#principled-implementation The tag emits N < $input for numbers and BigInt(N) < $input for bigint. Cast renders N as a JavaScript number literal before bigint conversion, while Numeric renders schema.exclusiveMinimum as a number type. Both retain the accepted number-representation precision limit; no arbitrary-precision bound is promised. Its exclusivity list excludes Minimum.
 * @evidence contracts/common.md#clear-and-simple-design Private Cast and Numeric helpers have one use each, mirroring ExclusiveMaximum so the two bounds read as a pair.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts A general template over the bound, with no special cases.
 * @evidence contracts/common.md#meaningful-documentation The comment states the strict lower bound, mutual exclusion with Minimum and shows a positive-number example.
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
