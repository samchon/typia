import { Equal } from "./internal/Equal";
import { IsTuple } from "./internal/IsTuple";
import { NativeClass } from "./internal/NativeClass";
import { ValueOf } from "./internal/ValueOf";

/**
 * Plain form that can be classified into a class instance.
 *
 * `Classifiable<T>` is the methods-excluded, plain view of `T` — the input
 * shape that `typia.plain.classify<T>` accepts and reconstructs back into an
 * instance of `T`. It is the inverse-direction companion of {@link Resolved}:
 * where `Resolved<T>` describes the plain object a class instance _decays_ into
 * (methods mapped to `never`), `Classifiable<T>` describes the plain object a
 * class instance is _built from_ (method-typed members are _omitted_, so an
 * input value is never required to carry the methods the reconstructed instance
 * inherits from its prototype).
 *
 * The transformation recurses through nested classes and containers, extracts
 * primitive values from boxed types (Boolean→boolean, Number→number,
 * String→string), and preserves native classes (Date, Set, Map, typed arrays,
 * Buffer, etc.) unchanged so they pass through as-is.
 *
 * Note on construction strategy: the actual instance is built at compile time
 * by the transform, which prefers a static factory (`T.from(x)`), then a
 * single-required-parameter constructor (`new T(x)`), and finally public
 * property assignment. The `from`/constructor parameter shapes cannot be
 * derived from an instance type at the type level (TypeScript exposes no static
 * side of `T`), so `Classifiable<T>` models the public-property (field-copy)
 * input shape; that shape already structurally accepts a live instance, and
 * callers passing `JSON.parse` output (`any`) are unaffected by the
 * distinction.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Target type to classify into
 */
export type Classifiable<T> =
  Equal<T, ClassifiableMain<T>> extends true ? T : ClassifiableMain<T>;

type ClassifiableMain<T> = T extends [never]
  ? never // (special trick for jsonable | null) type
  : ValueOf<T> extends boolean | number | bigint | string
    ? ValueOf<T>
    : T extends Function
      ? never
      : T extends object
        ? ClassifiableObject<T>
        : ValueOf<T>;

type ClassifiableObject<T extends object> =
  T extends Array<infer U>
    ? IsTuple<T> extends true
      ? ClassifiableTuple<T>
      : ClassifiableMain<U>[]
    : T extends Set<infer U>
      ? Set<ClassifiableMain<U>>
      : T extends Map<infer K, infer V>
        ? Map<ClassifiableMain<K>, ClassifiableMain<V>>
        : T extends WeakSet<any> | WeakMap<any, any>
          ? never
          : T extends NativeClass
            ? T
            : {
                [P in keyof T as T[P] extends Function
                  ? never
                  : P]: ClassifiableMain<T[P]>;
              };

type ClassifiableTuple<T extends readonly any[]> = T extends []
  ? []
  : T extends [infer F]
    ? [ClassifiableMain<F>]
    : T extends [infer F, ...infer Rest extends readonly any[]]
      ? [ClassifiableMain<F>, ...ClassifiableTuple<Rest>]
      : T extends [(infer F)?]
        ? [ClassifiableMain<F>?]
        : T extends [(infer F)?, ...infer Rest extends readonly any[]]
          ? [ClassifiableMain<F>?, ...ClassifiableTuple<Rest>]
          : [];
