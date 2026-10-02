import { Equal } from "./internal/Equal";
import { IsBroadString } from "./internal/IsBroadString";
import { IsTupleLike } from "./internal/IsTupleLike";
import { NativeClass } from "./internal/NativeClass";
import { ValueOf } from "./internal/ValueOf";

/**
 * Converts all object keys to snake_case.
 *
 * `SnakeCase<T>` transforms object property names to snake_case format and
 * erases methods like {@link Resolved}. Recursively processes nested
 * structures.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @template T Target type to transform
 *
 * @evidence contracts/common.md#principled-implementation Object keys are rewritten by key remapping from a template-literal conversion that inserts an underscore before an uppercase letter not preceded by another uppercase letter, an empty string or an underscore, then lowercases. Methods are erased, boxed primitives unwrapped, native classes preserved and `any`, `unknown` and `object` returned unchanged. Arrays are mapped before the Equal check so recursive tuple rest aliases are not compared eagerly, and TupleStack stops recursion through a tuple that contains itself.
 * @evidence contracts/common.md#clear-and-simple-design The exported alias decides whether conversion is needed and delegates object, array and string concerns to private helpers, one per structure, sharing Equal, IsTupleLike and ValueOf with the sibling case converters.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The conversion follows a closed algorithm over the key text and uses no consumer-specific key list; the Equal short-circuit only returns the original type when nothing would change.
 * @evidence contracts/common.md#meaningful-documentation The comment states what is converted, that methods are erased as in Resolved and that nested structures recurse; private sections are headed with line comments. It does not list consecutive-capital or digit edge cases of the key algorithm.
 */
export type SnakeCase<T> = unknown extends T
  ? T
  : object extends T
    ? T
    : T extends readonly unknown[]
      ? SnakageMain<T> // avoid eagerly comparing recursive tuple rest aliases
      : Equal<T, SnakageMain<T>> extends true
        ? T
        : SnakageMain<T>;

/* -----------------------------------------------------------
    OBJECT CONVERSION
----------------------------------------------------------- */

// TupleStack closes recursive tuple rest cycles without limiting other nesting.
type SnakageMain<T, TupleStack = never> = T extends [never]
  ? never // special trick for (jsonable | null) type
  : T extends { valueOf(): boolean | bigint | number | string }
    ? ValueOf<T>
    : T extends Function
      ? never
      : T extends object
        ? SnakageObject<T, TupleStack>
        : T;

type SnakageObject<T extends object, TupleStack> =
  T extends Array<infer U>
    ? IsTupleLike<T> extends true
      ? T extends TupleStack
        ? T
        : SnakageArray<T, TupleStack | T>
      : Array<SnakageMain<U, TupleStack>>
    : T extends ReadonlyArray<infer U>
      ? IsTupleLike<T> extends true
        ? T extends TupleStack
          ? T
          : SnakageArray<T, TupleStack | T>
        : ReadonlyArray<SnakageMain<U, TupleStack>>
      : T extends Set<infer U>
        ? Set<SnakageMain<U, TupleStack>>
        : T extends Map<infer K, infer V>
          ? Map<SnakageMain<K, TupleStack>, SnakageMain<V, TupleStack>>
          : T extends ReadonlyMap<infer K, infer V>
            ? ReadonlyMap<
                SnakageMain<K, TupleStack>,
                SnakageMain<V, TupleStack>
              >
            : T extends ReadonlySet<infer U>
              ? ReadonlySet<SnakageMain<U, TupleStack>>
              : T extends WeakSet<any> | WeakMap<any, any>
                ? never
                : T extends NativeClass
                  ? T
                  : {
                      [Key in keyof T as Key extends string
                        ? SnakageString<Key>
                        : Key extends number
                          ? Key
                          : never]: SnakageMain<T[Key], TupleStack>;
                    };

/* -----------------------------------------------------------
    SPECIAL CASES
----------------------------------------------------------- */
type SnakageArray<T extends readonly unknown[], TupleStack> = {
  [P in keyof T]: SnakageMain<T[P], TupleStack>;
};

/* -----------------------------------------------------------
    STRING CONVERTER
----------------------------------------------------------- */
type SnakageString<Key extends string> =
  IsBroadString<Key> extends true
    ? string
    : Key extends `${infer _}`
      ? SnakageStringRepeatedly<Key, "">
      : Key;
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
