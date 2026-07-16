import { Equal } from "./internal/Equal";
import { IsBroadString } from "./internal/IsBroadString";
import { IsTupleLike } from "./internal/IsTupleLike";
import { NativeClass } from "./internal/NativeClass";
import { ValueOf } from "./internal/ValueOf";

/**
 * Converts all object keys to camelCase.
 *
 * `CamelCase<T>` transforms object property names to camelCase format and
 * erases methods like {@link Resolved}. Recursively processes nested
 * structures.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Target type to transform
 */
export type CamelCase<T> = unknown extends T
  ? T
  : object extends T
    ? T
    : T extends readonly unknown[]
      ? CamelizeMain<T> // avoid eagerly comparing recursive tuple rest aliases
      : Equal<T, CamelizeMain<T>> extends true
        ? T
        : CamelizeMain<T>;

// TupleStack closes recursive tuple rest cycles without limiting other nesting.
type CamelizeMain<T, TupleStack = never> = T extends [never]
  ? never // special trick for (jsonable | null) type
  : T extends { valueOf(): boolean | bigint | number | string }
    ? ValueOf<T>
    : T extends Function
      ? never
      : T extends object
        ? CamelizeObject<T, TupleStack>
        : T;

type CamelizeObject<T extends object, TupleStack> =
  T extends Array<infer U>
    ? IsTupleLike<T> extends true
      ? T extends TupleStack
        ? T
        : CamelizeArray<T, TupleStack | T>
      : Array<CamelizeMain<U, TupleStack>>
    : T extends ReadonlyArray<infer U>
      ? IsTupleLike<T> extends true
        ? T extends TupleStack
          ? T
          : CamelizeArray<T, TupleStack | T>
        : ReadonlyArray<CamelizeMain<U, TupleStack>>
      : T extends Set<infer U>
        ? Set<CamelizeMain<U, TupleStack>>
        : T extends Map<infer K, infer V>
          ? Map<CamelizeMain<K, TupleStack>, CamelizeMain<V, TupleStack>>
          : T extends ReadonlyMap<infer K, infer V>
            ? ReadonlyMap<
                CamelizeMain<K, TupleStack>,
                CamelizeMain<V, TupleStack>
              >
            : T extends ReadonlySet<infer U>
              ? ReadonlySet<CamelizeMain<U, TupleStack>>
              : T extends WeakSet<any> | WeakMap<any, any>
                ? never
                : T extends NativeClass
                  ? T
                  : {
                      [Key in keyof T as Key extends string
                        ? CamelizeString<Key>
                        : Key extends number
                          ? Key
                          : never]: CamelizeMain<T[Key], TupleStack>;
                    };

type CamelizeArray<T extends readonly unknown[], TupleStack> = {
  [P in keyof T]: CamelizeMain<T[P], TupleStack>;
};

type CamelizeString<Key extends string> =
  IsBroadString<Key> extends true
    ? string
    : Key extends `_${infer R}`
      ? `_${CamelizeString<R>}`
      : Key extends `${infer _F}_${infer _R}`
        ? CamelizeSnakeString<Key>
        : Key extends Uppercase<Key>
          ? Lowercase<Key>
          : CamelizePascalString<Key>;
type CamelizePascalString<Key extends string> =
  Key extends `${infer F}${infer R}` ? `${Lowercase<F>}${R}` : Key;
type CamelizeSnakeString<Key extends string> = Key extends `_${infer R}`
  ? CamelizeSnakeString<R>
  : Key extends `${infer F}_${infer M}${infer R}`
    ? M extends "_"
      ? CamelizeSnakeString<`${F}_${R}`>
      : `${Lowercase<F>}${Uppercase<M>}${CamelizeSnakeString<R>}`
    : Lowercase<Key>;
