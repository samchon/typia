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
    : T extends readonly unknown[]
      ? ResolvedMain<T> // avoid eagerly comparing recursive tuple rest aliases
      : Equal<T, ResolvedMain<T>> extends true
        ? T
        : ResolvedMain<T>;

// TupleStack closes recursive tuple rest cycles without limiting other nesting.
type ResolvedMain<T, TupleStack = never> = T extends [never]
  ? never // (special trick for jsonable | null) type
  : ValueOf<T> extends boolean | number | bigint | string
    ? ValueOf<T>
    : T extends Function
      ? never
      : T extends object
        ? ResolvedObject<T, TupleStack>
        : ValueOf<T>;

type ResolvedObject<T extends object, TupleStack> =
  T extends Array<infer U>
    ? IsTupleLike<T> extends true
      ? T extends TupleStack
        ? T
        : ResolvedArray<T, TupleStack | T>
      : Array<ResolvedMain<U, TupleStack>>
    : T extends ReadonlyArray<infer U>
      ? IsTupleLike<T> extends true
        ? T extends TupleStack
          ? T
          : ResolvedArray<T, TupleStack | T>
        : ReadonlyArray<ResolvedMain<U, TupleStack>>
      : T extends Set<infer U>
        ? Set<ResolvedMain<U, TupleStack>>
        : T extends Map<infer K, infer V>
          ? Map<ResolvedMain<K, TupleStack>, ResolvedMain<V, TupleStack>>
          : T extends ReadonlyMap<infer K, infer V>
            ? ReadonlyMap<
                ResolvedMain<K, TupleStack>,
                ResolvedMain<V, TupleStack>
              >
            : T extends ReadonlySet<infer U>
              ? ReadonlySet<ResolvedMain<U, TupleStack>>
              : T extends WeakSet<any> | WeakMap<any, any>
                ? never
                : T extends NativeClass
                  ? T
                  : {
                      [P in keyof T]: ResolvedMain<T[P], TupleStack>;
                    };

type ResolvedArray<T extends readonly unknown[], TupleStack> = {
  [P in keyof T]: ResolvedMain<T[P], TupleStack>;
};
