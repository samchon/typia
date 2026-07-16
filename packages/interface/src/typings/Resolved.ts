import { Equal } from "./internal/Equal";
import { IsTupleLike } from "./internal/IsTupleLike";
import { NativeClass } from "./internal/NativeClass";
import { ValueOf } from "./internal/ValueOf";

/**
 * Converts a type to its resolved form by erasing all methods.
 *
 * `Resolved<T>` transforms classes to plain objects, extracts primitive values
 * from boxed types (Boolean→boolean, Number→number, String→string), and
 * recursively processes nested structures. Native classes (Date, Set, Map,
 * etc.) are preserved unchanged.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @author Kyungsu Kang - https://github.com/kakasoo
 * @template T Target type to resolve
 */
export type Resolved<T> = unknown extends T
  ? T
  : object extends T
    ? T
    : Equal<T, ResolvedMain<T>> extends true
      ? T
      : ResolvedMain<T>;

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
    ? IsTupleLike<T> extends true
      ? ResolvedArray<T>
      : Array<ResolvedMain<U>>
    : T extends ReadonlyArray<infer U>
      ? IsTupleLike<T> extends true
        ? ResolvedArray<T>
        : ReadonlyArray<ResolvedMain<U>>
      : T extends Set<infer U>
        ? Set<ResolvedMain<U>>
        : T extends Map<infer K, infer V>
          ? Map<ResolvedMain<K>, ResolvedMain<V>>
          : T extends ReadonlyMap<infer K, infer V>
            ? ReadonlyMap<ResolvedMain<K>, ResolvedMain<V>>
            : T extends ReadonlySet<infer U>
              ? ReadonlySet<ResolvedMain<U>>
              : T extends WeakSet<any> | WeakMap<any, any>
                ? never
                : T extends NativeClass
                  ? T
                  : {
                      [P in keyof T]: ResolvedMain<T[P]>;
                    };

type ResolvedArray<T extends readonly unknown[]> = {
  [P in keyof T]: ResolvedMain<T[P]>;
};
