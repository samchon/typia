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
 * @author Michael - https://github.com/8471919
 * @template T The type to make deeply partial
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
