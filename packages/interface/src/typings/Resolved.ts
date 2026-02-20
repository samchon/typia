import { Equal } from "./internal/Equal";
import { IsTuple } from "./internal/IsTuple";
import { NativeClass } from "./internal/NativeClass";
import { ValueOf } from "./internal/ValueOf";

/**
 * Converts a type to its resolved form by erasing all methods.
 *
 * `Resolved<T>` transforms classes to plain objects, extracts primitive values
 * from boxed types (Boolean→boolean, Number→number, String→string), and
 * recursively processes nested structures. Native classes (Date, Set, Map, etc.)
 * are preserved unchanged.
 *
 * @template T Target type to resolve
 * @author Jeongho Nam - https://github.com/samchon
 */
export type Resolved<T> =
  Equal<T, ResolvedMain<T>> extends true ? T : ResolvedMain<T>;

type ResolvedMain<T> = T extends [never]
  ? never // (special trick for jsonable | null) type
  : ValueOf<T> extends boolean | number | bigint | string
    ? ValueOf<T>
    : T extends Function
      ? never
      : T extends object
        ? ResolvedObject<T>
        : ValueOf<T>;

type ResolvedObject<T extends object> =
  T extends Array<infer U>
    ? IsTuple<T> extends true
      ? ResolvedTuple<T>
      : ResolvedMain<U>[]
    : T extends Set<infer U>
      ? Set<ResolvedMain<U>>
      : T extends Map<infer K, infer V>
        ? Map<ResolvedMain<K>, ResolvedMain<V>>
        : T extends WeakSet<any> | WeakMap<any, any>
          ? never
          : T extends NativeClass
            ? T
            : {
                [P in keyof T]: ResolvedMain<T[P]>;
              };

type ResolvedTuple<T extends readonly any[]> = T extends []
  ? []
  : T extends [infer F]
    ? [ResolvedMain<F>]
    : T extends [infer F, ...infer Rest extends readonly any[]]
      ? [ResolvedMain<F>, ...ResolvedTuple<Rest>]
      : T extends [(infer F)?]
        ? [ResolvedMain<F>?]
        : T extends [(infer F)?, ...infer Rest extends readonly any[]]
          ? [ResolvedMain<F>?, ...ResolvedTuple<Rest>]
          : [];
