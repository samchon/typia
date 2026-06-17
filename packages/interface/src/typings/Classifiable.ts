import { IsTuple } from "./internal/IsTuple";
import { NativeClass } from "./internal/NativeClass";
import { ValueOf } from "./internal/ValueOf";

/**
 * Every plain form that can be classified into a class instance.
 *
 * `Classifiable<T>` is the **union of the three inputs** `typia.plain.classify`
 * accepts to reconstruct an instance, mirroring the transform's construction
 * strategy:
 *
 * 1. {@link ClassifiableFactory} — the seed accepted by a static factory
 *    `T.from(x)`, when one exists.
 * 2. {@link ClassifiableConstructor} — the seed accepted by `new T(x)`, when the
 *    constructor is callable with a single argument (a first parameter that may
 *    be optional, with every later parameter optional).
 * 3. {@link ClassifiableProperties} — the public, methods-excluded property shape
 *    (field copy), recursing through nested classes and containers.
 *
 * `from`/constructor parameters are only reachable from the **class** type
 * (`typeof T`); for an instance type those two arms resolve to `never` and the
 * union collapses to the property shape, which already structurally accepts a
 * live instance. The property arm always recurses; native classes (Date, Set,
 * Map, typed arrays, Buffer, etc.) and boxed primitives are handled there.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Target class (or instance) type to classify into
 */
export type Classifiable<T> =
  | ClassifiableFactory<T>
  | ClassifiableConstructor<T>
  | ClassifiableProperties<T>;

/**
 * Seed accepted by a static factory `T.from(x)`, or `never` when `T` has no
 * `from` whose call needs only a single argument.
 */
export type ClassifiableFactory<T> = T extends {
  from: (...args: infer A) => any;
}
  ? ClassifiableSeed<A>
  : never;

/**
 * Seed accepted by `new T(x)`, or `never` when `T` is not constructible with a
 * single argument (first parameter present, every later parameter optional).
 */
export type ClassifiableConstructor<T> = T extends abstract new (
  ...args: infer A
) => any
  ? ClassifiableSeed<A>
  : never;

/**
 * Public, methods-excluded property shape — the field-copy input. For a class
 * type the instance side is used; otherwise `T` itself is classified.
 */
export type ClassifiableProperties<T> = T extends abstract new (
  ...args: any
) => infer I
  ? ClassifiableMain<I>
  : ClassifiableMain<T>;

// First parameter type, but only when the function/constructor is callable with
// exactly one argument: there must be a first parameter, and every parameter
// after it must be optional (so `[]` is assignable to the rest).
type ClassifiableSeed<A extends readonly any[]> = A extends readonly [
  infer P,
  ...infer Rest,
]
  ? [] extends Rest
    ? P
    : never
  : A extends readonly [(infer P)?, ...infer Rest]
    ? [] extends Rest
      ? P
      : never
    : never;

type ClassifiableMain<T> = T extends [never]
  ? never // (special trick for jsonable | null) type
  : ValueOf<T> extends boolean | number | bigint | string
    ? ValueOf<T>
    : T extends Function
      ? never
      : T extends object
        ? ClassifiableObject<T>
        : ValueOf<T>;

type ClassifiableObject<T extends object> = T extends readonly any[]
  ? ClassifiableArray<T>
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

// Array-likes are split into mutable vs `readonly` so the modifier survives;
// the object branch's key remapping (which drops methods) would otherwise
// mangle a `readonly` array into an index-signature object.
type ClassifiableArray<T extends readonly any[]> =
  T extends Array<infer U>
    ? IsTuple<T> extends true
      ? ClassifiableTuple<T>
      : ClassifiableMain<U>[]
    : T extends readonly (infer U)[]
      ? IsTuple<T> extends true
        ? Readonly<ClassifiableTuple<[...T]>>
        : readonly ClassifiableMain<U>[]
      : never;

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
