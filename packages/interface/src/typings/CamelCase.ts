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
    : Equal<T, CamelizeMain<T>> extends true
      ? T
      : CamelizeMain<T>;

type CamelizeMain<T> = T extends [never]
  ? never // special trick for (jsonable | null) type
  : T extends { valueOf(): boolean | bigint | number | string }
    ? ValueOf<T>
    : T extends Function
      ? never
      : T extends object
        ? CamelizeObject<T>
        : T;

type CamelizeObject<T extends object> =
  T extends Array<infer U>
    ? IsTupleLike<T> extends true
      ? CamelizeArray<T>
      : Array<CamelizeMain<U>>
    : T extends ReadonlyArray<infer U>
      ? IsTupleLike<T> extends true
        ? CamelizeArray<T>
        : ReadonlyArray<CamelizeMain<U>>
      : T extends Set<infer U>
        ? Set<CamelizeMain<U>>
        : T extends Map<infer K, infer V>
          ? Map<CamelizeMain<K>, CamelizeMain<V>>
          : T extends ReadonlyMap<infer K, infer V>
            ? ReadonlyMap<CamelizeMain<K>, CamelizeMain<V>>
            : T extends ReadonlySet<infer U>
              ? ReadonlySet<CamelizeMain<U>>
              : T extends WeakSet<any> | WeakMap<any, any>
                ? never
                : T extends NativeClass
                  ? T
                  : {
                      [Key in keyof T as Key extends string
                        ? CamelizeString<Key>
                        : Key extends number
                          ? Key
                          : never]: CamelizeMain<T[Key]>;
                    };

type CamelizeArray<T extends readonly unknown[]> = {
  [P in keyof T]: CamelizeMain<T[P]>;
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
