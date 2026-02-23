import { TagBase } from "./TagBase";

/**
 * Divisibility constraint (value % divisor === 0).
 *
 * `MultipleOf<N>` is a type tag that validates numeric values are exactly
 * divisible by the specified divisor with no remainder. Apply it to `number` or
 * `bigint` properties using TypeScript intersection types.
 *
 * Common use cases:
 *
 * - `MultipleOf<2>` for even numbers
 * - `MultipleOf<0.01>` for currency with 2 decimal places
 * - `MultipleOf<100>` for values in hundreds
 *
 * This constraint can be combined with other numeric constraints like
 * {@link Minimum} and {@link Maximum}. Multiple `MultipleOf` constraints on the
 * same property are allowed (all must pass).
 *
 * The constraint is enforced at runtime by `typia.is()`, `typia.assert()`, and
 * `typia.validate()`. It generates `multipleOf` in JSON Schema output.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   interface Currency {
 *     // Must be exact cents (0.01, 0.02, ..., 1.00, 1.01, ...)
 *     amount: number & MultipleOf<0.01>;
 *   }
 *   interface Pagination {
 *     // Page size must be multiple of 10
 *     pageSize: number & MultipleOf<10>;
 *   }
 *
 * @template Value The divisor (value must be evenly divisible by this)
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
