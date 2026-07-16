import { Equal } from "./internal/Equal";
import { IsBroadString } from "./internal/IsBroadString";
import { IsTupleLike } from "./internal/IsTupleLike";
import { NativeClass } from "./internal/NativeClass";
import { ValueOf } from "./internal/ValueOf";

/**
 * Converts all object keys to PascalCase.
 *
 * `PascalCase<T>` transforms object property names to PascalCase format and
 * erases methods like {@link Resolved}. Recursively processes nested
 * structures.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Target type to transform
 */
export type PascalCase<T> = unknown extends T
  ? T
  : object extends T
    ? T
    : T extends readonly unknown[]
      ? PascalizeMain<T> // avoid eagerly comparing recursive tuple rest aliases
      : Equal<T, PascalizeMain<T>> extends true
        ? T
        : PascalizeMain<T>;

// TupleStack closes recursive tuple rest cycles without limiting other nesting.
type PascalizeMain<T, TupleStack = never> = T extends [never]
  ? never // special trick for (jsonable | null) type
  : T extends { valueOf(): boolean | bigint | number | string }
    ? ValueOf<T>
    : T extends Function
      ? never
      : T extends object
        ? PascalizeObject<T, TupleStack>
        : T;

type PascalizeObject<T extends object, TupleStack> =
  T extends Array<infer U>
    ? IsTupleLike<T> extends true
      ? T extends TupleStack
        ? T
        : PascalizeArray<T, TupleStack | T>
      : Array<PascalizeMain<U, TupleStack>>
    : T extends ReadonlyArray<infer U>
      ? IsTupleLike<T> extends true
        ? T extends TupleStack
          ? T
          : PascalizeArray<T, TupleStack | T>
        : ReadonlyArray<PascalizeMain<U, TupleStack>>
      : T extends Set<infer U>
        ? Set<PascalizeMain<U, TupleStack>>
        : T extends Map<infer K, infer V>
          ? Map<PascalizeMain<K, TupleStack>, PascalizeMain<V, TupleStack>>
          : T extends ReadonlyMap<infer K, infer V>
            ? ReadonlyMap<
                PascalizeMain<K, TupleStack>,
                PascalizeMain<V, TupleStack>
              >
            : T extends ReadonlySet<infer U>
              ? ReadonlySet<PascalizeMain<U, TupleStack>>
              : T extends WeakSet<any> | WeakMap<any, any>
                ? never
                : T extends NativeClass
                  ? T
                  : {
                      [Key in keyof T as Key extends string
                        ? PascalizeString<Key>
                        : Key extends number
                          ? Key
                          : never]: PascalizeMain<T[Key], TupleStack>;
                    };

type PascalizeArray<T extends readonly unknown[], TupleStack> = {
  [P in keyof T]: PascalizeMain<T[P], TupleStack>;
};

type PascalizeString<Key extends string> =
  IsBroadString<Key> extends true
    ? string
    : Key extends `_${infer R}`
      ? `_${PascalizeString<R>}`
      : Key extends `${infer _F}_${infer _R}`
        ? PascalizeSnakeString<Key>
        : Capitalize<Key>;
type PascalizeSnakeString<Key extends string> = Key extends `_${infer R}`
  ? PascalizeSnakeString<R>
  : Key extends `${infer F}${infer M}_${infer R}`
    ? `${Uppercase<F>}${Lowercase<M>}${PascalizeSnakeString<R>}`
    : Key extends `${infer F}${infer R}`
      ? `${Uppercase<F>}${Lowercase<R>}`
      : Key;
