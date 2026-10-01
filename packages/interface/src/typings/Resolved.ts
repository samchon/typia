import { Equal } from "./internal/Equal";
import { IsTupleLike } from "./internal/IsTupleLike";
import { NativeClass } from "./internal/NativeClass";
import { ValueOf } from "./internal/ValueOf";

/**
 * Converts a type to its resolved form by mapping callable values to never.
 *
 * `Resolved<T>` transforms classes to plain objects, extracts primitive values
 * from boxed types (Boolean→boolean, Number→number, String→string), and
 * recursively processes nested public properties. Arrays, tuples, Set and Map
 * retain their container shape while their contents are resolved recursively,
 * including readonly containers. Date and other supported native classes pass
 * through unchanged; WeakSet and WeakMap become `never`.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @author Kyungsu Kang - https://github.com/kakasoo
 *
 * @template T Target type to resolve
 *
 * @evidence contracts/common.md#principled-implementation Conditional types unwrap boxed primitives, map callable values to never and recursively resolve public properties and array, tuple, Set and Map contents. Supported native classes pass through after the container branches; weak collections become never. Broad unknown/object inputs remain unchanged. TupleStack preserves a revisited tuple-rest identity rather than imposing a depth limit, and arrays bypass the Equal comparison to avoid eager recursive-alias evaluation.
 * @evidence contracts/common.md#clear-and-simple-design A thin alias chooses between the original and the resolved form and delegates structure-specific work to ResolvedMain, ResolvedObject and ResolvedArray.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It is a structural mapping over the type with no consumer names, casts or runtime code.
 * @evidence contracts/common.md#meaningful-documentation The comment states what is resolved and which categories are preserved; recursion and tuple guards are explained in line comments at their private declarations.
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
