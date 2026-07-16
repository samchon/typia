import { Equal } from "./internal/Equal";
import { IsBroadString } from "./internal/IsBroadString";
import { IsTupleLike } from "./internal/IsTupleLike";
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
export type KebabCase<T> = unknown extends T
  ? T
  : object extends T
    ? T
    : T extends readonly unknown[]
      ? KebabageMain<T> // avoid eagerly comparing recursive tuple rest aliases
      : Equal<T, KebabageMain<T>> extends true
        ? T
        : KebabageMain<T>;

/* -----------------------------------------------------------
    OBJECT CONVERSION
----------------------------------------------------------- */

// TupleStack closes recursive tuple rest cycles without limiting other nesting.
type KebabageMain<T, TupleStack = never> = T extends [never]
  ? never // special trick for (jsonable | null) type
  : T extends { valueOf(): boolean | bigint | number | string }
    ? ValueOf<T>
    : T extends Function
      ? never
      : T extends object
        ? KebabageObject<T, TupleStack>
        : T;

type KebabageObject<T extends object, TupleStack> =
  T extends Array<infer U>
    ? IsTupleLike<T> extends true
      ? T extends TupleStack
        ? T
        : KebabageArray<T, TupleStack | T>
      : Array<KebabageMain<U, TupleStack>>
    : T extends ReadonlyArray<infer U>
      ? IsTupleLike<T> extends true
        ? T extends TupleStack
          ? T
          : KebabageArray<T, TupleStack | T>
        : ReadonlyArray<KebabageMain<U, TupleStack>>
      : T extends Set<infer U>
        ? Set<KebabageMain<U, TupleStack>>
        : T extends Map<infer K, infer V>
          ? Map<KebabageMain<K, TupleStack>, KebabageMain<V, TupleStack>>
          : T extends ReadonlyMap<infer K, infer V>
            ? ReadonlyMap<
                KebabageMain<K, TupleStack>,
                KebabageMain<V, TupleStack>
              >
            : T extends ReadonlySet<infer U>
              ? ReadonlySet<KebabageMain<U, TupleStack>>
              : T extends WeakSet<any> | WeakMap<any, any>
                ? never
                : T extends NativeClass
                  ? T
                  : {
                      [Key in keyof T as Key extends string
                        ? KebabageString<Key>
                        : Key extends number
                          ? Key
                          : never]: KebabageMain<T[Key], TupleStack>;
                    };

/* -----------------------------------------------------------
    SPECIAL CASES
----------------------------------------------------------- */
type KebabageArray<T extends readonly unknown[], TupleStack> = {
  [P in keyof T]: KebabageMain<T[P], TupleStack>;
};

/* -----------------------------------------------------------
    STRING CONVERTER
----------------------------------------------------------- */
type KebabageString<Key extends string> =
  IsBroadString<Key> extends true
    ? string
    : Key extends `${infer _}`
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
