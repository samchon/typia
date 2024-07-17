import { IsTuple } from "./typings/IsTuple";
import { NativeClass } from "./typings/NativeClass";
import { ValueOf } from "./typings/ValueOf";

/**
 * Camel case type.
 *
 * `CamelCase` type is a type that all keys of an object are camelized.
 *
 * It also erase every method properties like {@link Resolved} type.
 *
 * @template T Target type to be camelized
 * @author Jeongho Nam - https://github.com/samchon
 */
export type CamelCase<T> =
  Equal<T, CamelizeMain<T>> extends true ? T : CamelizeMain<T>;

type Equal<X, Y> = X extends Y ? (Y extends X ? true : false) : false;

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
  : Key extends `${infer F}${infer R}`
    ? `${Lowercase<F>}${CamelizeStringRepeatedly<R>}`
    : Key;
type CamelizeStringRepeatedly<Key extends string> =
  Key extends `${infer F}_${infer R}`
    ? `${F}${Capitalize<CamelizeStringRepeatedly<R>>}`
    : Key;
