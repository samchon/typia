import { Equal } from "./typings/Equal";
import { IsTuple } from "./typings/IsTuple";
import { NativeClass } from "./typings/NativeClass";
import { ValueOf } from "./typings/ValueOf";

/**
 * Camel case type.
 *
 * `CamelCase` type is a type that all keys of an object are camelized.
 *
 * It also erases every method property like {@link Resolved} type.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Target type to be camelized
 */
export type CamelCase<T> =
  Equal<T, CamelizeMain<T>> extends true ? T : CamelizeMain<T>;

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
    ? IsTuple<T> extends true
      ? CamelizeTuple<T>
      : CamelizeMain<U>[]
    : T extends Set<infer U>
      ? Set<CamelizeMain<U>>
      : T extends Map<infer K, infer V>
        ? Map<CamelizeMain<K>, CamelizeMain<V>>
        : T extends WeakSet<any> | WeakMap<any, any>
          ? never
          : T extends NativeClass
            ? T
            : {
                [Key in keyof T as CamelizeString<Key & string>]: CamelizeMain<
                  T[Key]
                >;
              };

type CamelizeTuple<T extends readonly any[]> = T extends []
  ? []
  : T extends [infer F]
    ? [CamelizeMain<F>]
    : T extends [infer F, ...infer Rest extends readonly any[]]
      ? [CamelizeMain<F>, ...CamelizeTuple<Rest>]
      : T extends [(infer F)?]
        ? [CamelizeMain<F>?]
        : T extends [(infer F)?, ...infer Rest extends readonly any[]]
          ? [CamelizeMain<F>?, ...CamelizeTuple<Rest>]
          : [];

type CamelizeString<Key extends string> = Key extends `_${infer R}`
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
