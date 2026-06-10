import { Equal } from "./internal/Equal";
import { NativeClass } from "./internal/NativeClass";
import { ValueOf } from "./internal/ValueOf";

/**
 * Converts all object keys to kebab-case.
 *
 * `KebabCase<T>` transforms object property names to kebab-case format and
 * erases methods like {@link Resolved}. Recursively processes nested
 * structures.
 *
 * The conversion first derives the snake_case form of each key (matching
 * {@link SnakeCase}), then rewrites the word separators to hyphens while keeping
 * any leading underscores untouched.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Target type to transform
 */
export type KebabCase<T> =
  Equal<T, KebabageMain<T>> extends true ? T : KebabageMain<T>;

/* -----------------------------------------------------------
    OBJECT CONVERSION
----------------------------------------------------------- */

type KebabageMain<T> = T extends [never]
  ? never // special trick for (jsonable | null) type
  : T extends { valueOf(): boolean | bigint | number | string }
    ? ValueOf<T>
    : T extends Function
      ? never
      : T extends object
        ? KebabageObject<T>
        : T;

type KebabageObject<T extends object> =
  T extends Array<infer U>
    ? IsTuple<T> extends true
      ? KebabageTuple<T>
      : KebabageMain<U>[]
    : T extends Set<infer U>
      ? Set<KebabageMain<U>>
      : T extends Map<infer K, infer V>
        ? Map<KebabageMain<K>, KebabageMain<V>>
        : T extends WeakSet<any> | WeakMap<any, any>
          ? never
          : T extends NativeClass
            ? T
            : {
                [Key in keyof T as KebabageString<Key & string>]: KebabageMain<
                  T[Key]
                >;
              };

/* -----------------------------------------------------------
    SPECIAL CASES
----------------------------------------------------------- */
type IsTuple<T extends readonly any[] | { length: number }> = [T] extends [
  never,
]
  ? false
  : T extends readonly any[]
    ? number extends T["length"]
      ? false
      : true
    : false;
type KebabageTuple<T extends readonly any[]> = T extends []
  ? []
  : T extends [infer F]
    ? [KebabageMain<F>]
    : T extends [infer F, ...infer Rest extends readonly any[]]
      ? [KebabageMain<F>, ...KebabageTuple<Rest>]
      : T extends [(infer F)?]
        ? [KebabageMain<F>?]
        : T extends [(infer F)?, ...infer Rest extends readonly any[]]
          ? [KebabageMain<F>?, ...KebabageTuple<Rest>]
          : [];

/* -----------------------------------------------------------
    STRING CONVERTER
----------------------------------------------------------- */
type KebabageString<Key extends string> = Key extends `${infer _}`
  ? KebabagePrefix<SnakageStringRepeatedly<Key, "">>
  : Key;
type KebabagePrefix<S extends string> = S extends `_${infer Rest}`
  ? `_${KebabagePrefix<Rest>}`
  : KebabageBody<S>;
type KebabageBody<S extends string> = S extends `${infer Head}_${infer Tail}`
  ? `${Head}-${KebabageBody<Tail>}`
  : S;
type SnakageStringRepeatedly<
  S extends string,
  Previous extends string,
> = S extends `${infer First}${infer Second}${infer Rest}`
  ? `${Underscore<Previous, First>}${Lowercase<First>}${Underscore<
      First,
      Second
    >}${Lowercase<Second>}${SnakageStringRepeatedly<Rest, Second>}`
  : S extends `${infer First}`
    ? `${Underscore<Previous, First>}${Lowercase<First>}`
    : "";
type Underscore<First extends string, Second extends string> = First extends
  | UpperAlphabetic
  | ""
  | "_"
  ? ""
  : Second extends UpperAlphabetic
    ? "_"
    : "";
type UpperAlphabetic =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";
