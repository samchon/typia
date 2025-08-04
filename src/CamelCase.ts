import { Equal } from "./typings/Equal";
import { IsTuple } from "./typings/IsTuple";
import { NativeClass } from "./typings/NativeClass";
import { ValueOf } from "./typings/ValueOf";

/**
 * Converts object property names to camelCase style.
 *
 * Transforms all object keys from snake_case, PascalCase, or other naming 
 * conventions to camelCase. Useful for API data transformation where backends 
 * use different naming conventions than frontend JavaScript standards.
 *
 * @example
 * ```typescript
 * interface SnakeData {
 *   user_name: string;
 *   is_active: boolean;
 *   profile_data: {
 *     first_name: string;
 *   };
 * }
 * 
 * type CamelData = CamelCase<SnakeData>;
 * // Result: {
 * //   userName: string;
 * //   isActive: boolean;
 * //   profileData: {
 * //     firstName: string;
 * //   };
 * // }
 * ```
 *
 * @template T Object type to transform property names
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
