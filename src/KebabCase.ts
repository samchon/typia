import { Equal } from "./typings/Equal";
import { IsTuple } from "./typings/IsTuple";
import { NativeClass } from "./typings/NativeClass";
import { ValueOf } from "./typings/ValueOf";

/**
 * Kebab case type.
 *
 * `KebabCase` type is a type that all keys of an object are converted to kebab case.
 *
 * It also erases every method property like {@link Resolved} type.
 *
 * @template T Target type to be kebab cased
 * @author Jeongho Nam - https://github.com/samchon
 */
export type KebabCase<T> =
  Equal<T, KebabizeMain<T>> extends true ? T : KebabizeMain<T>;

/* -----------------------------------------------------------
    OBJECT CONVERSION
----------------------------------------------------------- */

type KebabizeMain<T> = T extends [never]
  ? never // special trick for (jsonable | null) type
  : T extends { valueOf(): boolean | bigint | number | string }
    ? ValueOf<T>
    : T extends Function
      ? never
      : T extends object
        ? KebabizeObject<T>
        : T;

type KebabizeObject<T extends object> =
  T extends Array<infer U>
    ? IsTuple<T> extends true
      ? KebabizeTuple<T>
      : KebabizeMain<U>[]
    : T extends Set<infer U>
      ? Set<KebabizeMain<U>>
      : T extends Map<infer K, infer V>
        ? Map<KebabizeMain<K>, KebabizeMain<V>>
        : T extends WeakSet<any> | WeakMap<any, any>
          ? never
          : T extends NativeClass
            ? T
            : {
                [Key in keyof T as KebabizeString<Key & string>]: KebabizeMain<
                  T[Key]
                >;
              };

/* -----------------------------------------------------------
    SPECIAL CASES
----------------------------------------------------------- */
type KebabizeTuple<T extends readonly any[]> = T extends []
  ? []
  : T extends [infer F]
    ? [KebabizeMain<F>]
    : T extends [infer F, ...infer Rest extends readonly any[]]
      ? [KebabizeMain<F>, ...KebabizeTuple<Rest>]
      : T extends [(infer F)?]
        ? [KebabizeMain<F>?]
        : T extends [(infer F)?, ...infer Rest extends readonly any[]]
          ? [KebabizeMain<F>?, ...KebabizeTuple<Rest>]
          : [];

/* -----------------------------------------------------------
    STRING CONVERTER
----------------------------------------------------------- */
type KebabizeString<Key extends string> = Key extends `${infer _}`
  ? KebabizeStringRepeatedly<Key, "">
  : Key;
type KebabizeStringRepeatedly<
  S extends string,
  Previous extends string,
> = S extends `${infer First}${infer Second}${infer Rest}`
  ? `${Hyphen<Previous, First>}${Lowercase<First>}${Hyphen<
      First,
      Second
    >}${Lowercase<Second>}${KebabizeStringRepeatedly<Rest, Second>}`
  : S extends `${infer First}`
    ? `${Hyphen<Previous, First>}${Lowercase<First>}`
    : "";
type Hyphen<First extends string, Second extends string> = First extends
  | UpperAlphabetic
  | ""
  | "-"
  | "_"
  ? ""
  : Second extends UpperAlphabetic
    ? "-"
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