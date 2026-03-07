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
 * - **Arrays**: element type becomes `DeepPartial<U>`
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
  : T extends (...args: unknown[]) => unknown
    ? T
    : T extends Array<infer U>
      ? Array<DeepPartial<U>>
      : T extends object
        ? { [P in keyof T]?: DeepPartial<T[P]> }
        : T;
