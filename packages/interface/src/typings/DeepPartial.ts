/**
 * Recursively makes all properties of a type optional.
 *
 * `DeepPartial<T>` transforms a type by making every property optional at all
 * nesting levels. Unlike TypeScript's built-in `Partial<T>` which only affects
 * the top level, this utility recursively applies optionality to nested objects
 * and arrays.
 *
 * Used primarily in {@link IJsonParseResult.IFailure} to represent partially
 * recovered data from malformed JSON, where some properties may be missing due
 * to parsing errors.
 *
 * Behavior:
 *
 * - **Primitives** (`string`, `number`, `boolean`, `bigint`, `symbol`, `null`,
 *   `undefined`): returned as-is
 * - **Functions**: returned as-is
 * - **Arrays and tuples**: members become deeply partial while mutability and
 *   tuple positions are preserved
 * - **Objects**: all properties become optional with `DeepPartial` applied
 *
 * Built-in objects such as Date, Map and Set follow the ordinary object branch,
 * so their public members also become optional. They are not preserved as
 * callable native instances by this partial-data representation.
 *
 * @author Michael - https://github.com/8471919
 *
 * @template T The type to make deeply partial
 *
 * @evidence contracts/common.md#principled-implementation Primitives, null, undefined and functions are returned as-is, arrays and tuples are mapped homomorphically so tuple positions and readonly are preserved, and other objects become mapped types with optional properties recursively. Conditional types distribute over unions. Built-in objects such as Date, Map and Set are treated as ordinary objects, so their members become optional too.
 * @evidence contracts/common.md#clear-and-simple-design One recursive conditional of four mutually exclusive arms; no helper or option.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts A structural mapped type, with no cast or runtime component.
 * @evidence contracts/common.md#meaningful-documentation The native prose lists each type category, preserved tuple shape, ordinary treatment of built-in object members and the partially recovered JSON use in IJsonParseResult.IFailure.
 */
export type DeepPartial<T> = T extends
  | string
  | number
  | boolean
  | bigint
  | symbol
  | null
  | undefined
  ? T
  : T extends Function
    ? T
    : T extends readonly unknown[]
      ? { [P in keyof T]: DeepPartial<T[P]> }
      : T extends object
        ? { [P in keyof T]?: DeepPartial<T[P]> }
        : T;
