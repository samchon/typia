import { TagBase } from "./TagBase";

/**
 * Mathematical divisibility constraint.
 *
 * `MultipleOf<N>` is a type tag that validates numeric values are exactly
 * divisible by the specified divisor with no remainder. Apply it to `number` or
 * `bigint` properties using TypeScript intersection types.
 *
 * A `number` is divided as the decimal it prints back, not as the binary double
 * it is stored in, so `MultipleOf<0.1>` accepts `0.3` the way the emitted
 * `multipleOf` keyword does. A `bigint` uses integer remainder, with the
 * divisor rendered through a JavaScript number literal before bigint
 * conversion.
 *
 * Common use cases:
 *
 * - `MultipleOf<2>` for even numbers
 * - `MultipleOf<0.01>` for currency with 2 decimal places
 * - `MultipleOf<100>` for values in hundreds
 *
 * This constraint can be combined with other numeric constraints like
 * {@link Minimum} and {@link Maximum}. It is exclusive, so a second `MultipleOf`
 * on the same property is a compile error.
 *
 * The constraint is enforced at runtime by `typia.is()`, `typia.assert()`, and
 * `typia.validate()`. It generates `multipleOf` in JSON Schema output.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
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
 *
 * @evidence contracts/common.md#principled-implementation Bigint uses integer remainder against BigInt(N), whose N is rendered as a JavaScript number literal before conversion; the schema divisor is also number-valued. This retains the accepted number-representation precision limit. Numbers use _isMultipleOf, which decomposes the printed decimal operands so 0.3 is a multiple of 0.1. The tag is exclusive.
 * @evidence contracts/common.md#clear-and-simple-design The numeric and bigint branches differ in method, so the validate conditional separates them; Cast and Numeric are private and used by those branches only.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Decimal division is the contract of the tag, stated in its comment, and not a patch over binary floating error for chosen cases.
 * @evidence contracts/common.md#meaningful-documentation The comment explains decimal reading of number operands, the bigint remainder and divisor rendering, common uses and exclusivity.
 */
export type MultipleOf<Value extends number | bigint> = TagBase<{
  target: Value extends bigint ? "bigint" : "number";
  kind: "multipleOf";
  value: Value;
  validate: Value extends bigint
    ? `$input % ${Cast<Value>} === ${Cast<0n>}`
    : `$importInternal("_isMultipleOf")($input, ${Value})`;
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
