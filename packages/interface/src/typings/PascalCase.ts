import { Equal } from "./internal/Equal";
import { IsTuple } from "./internal/IsTuple";
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
export type PascalCase<T> =
  Equal<T, PascalizeMain<T>> extends true ? T : PascalizeMain<T>;

type PascalizeMain<T> = T extends [never]
  ? never // special trick for (jsonable | null) type
  : T extends { valueOf(): boolean | bigint | number | string }
    ? ValueOf<T>
    : T extends Function
      ? never
      : T extends object
        ? PascalizeObject<T>
        : T;

type PascalizeObject<T extends object> =
  T extends Array<infer U>
    ? IsTuple<T> extends true
      ? PascalizeTuple<T>
      : PascalizeMain<U>[]
    : T extends Set<infer U>
      ? Set<PascalizeMain<U>>
      : T extends Map<infer K, infer V>
        ? Map<PascalizeMain<K>, PascalizeMain<V>>
        : T extends WeakSet<any> | WeakMap<any, any>
          ? never
          : T extends NativeClass
            ? T
            : {
                [Key in keyof T as PascalizeString<
                  Key & string
                >]: PascalizeMain<T[Key]>;
              };

type PascalizeTuple<T extends readonly any[]> = T extends []
  ? []
  : T extends [infer F]
    ? [PascalizeMain<F>]
    : T extends [infer F, ...infer Rest extends readonly any[]]
      ? [PascalizeMain<F>, ...PascalizeTuple<Rest>]
      : T extends [(infer F)?]
        ? [PascalizeMain<F>?]
        : T extends [(infer F)?, ...infer Rest extends readonly any[]]
          ? [PascalizeMain<F>?, ...PascalizeTuple<Rest>]
          : [];

type PascalizeString<Key extends string> = Key extends `_${infer R}`
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
