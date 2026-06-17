import { IsTuple } from "./internal/IsTuple";
import { NativeClass } from "./internal/NativeClass";
import { ValueOf } from "./internal/ValueOf";

/**
 * Every plain form that can be classified into a class instance.
 *
 * `Classifiable<T>` is the union of the inputs `typia.plain.classify<T>`
 * accepts to reconstruct an instance, mirroring the transform's construction
 * strategy:
 *
 * 1. The seed of a static factory `T.from(x)`, when `T` is a class with a `from`
 *    callable with a single argument.
 * 2. The seed of `new T(x)`, when the constructor is callable with a single
 *    argument (a first parameter that may be optional, every later parameter
 *    optional/rest).
 * 3. The public, methods-excluded property shape (field copy) — but only when `T`
 *    is constructible with no arguments (`new T()`), since the field-copy
 *    strategy builds a blank instance first. For a non-class type this arm is
 *    the type itself with each property recursively classified.
 *
 * Factory/constructor seeds are reachable only from the **class** type (`typeof
 * T`); for an instance type all class-only arms vanish and the result is the
 * recursive property shape, which already structurally accepts a live instance.
 * The property arm recurses through nested classes and containers; native
 * classes (Date, typed arrays, RegExp, Buffer, …) pass through and boxed
 * primitives unwrap, while `Set`/`Map` (and their `readonly` counterparts)
 * additionally accept their array form (`Set<T>` ⇒ `T[]`, `Map<K,V>` ⇒ `[K,
 * V][]`). A `WeakSet`/`WeakMap` member is dropped (it cannot be rebuilt from
 * plain data). Construction seeds are recursively classified into the same
 * plain form — a nested class inside a seed is method-stripped, iterable seeds
 * render as arrays, boxed seeds unwrap. A top-level or construction-seed
 * `any`/`unknown` is rejected (`never`) so it cannot widen the union; a nested
 * `any` inside a property is preserved as-is.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Target class (or instance) type to classify into
 */
export type Classifiable<T> =
  IsAny<T> extends true
    ? never
    : unknown extends T
      ? never
      :
          | ClassifiableFactory<T>
          | ClassifiableConstructor<T>
          | ClassifiableProperties<T>;

type IsAny<T> = 0 extends 1 & T ? true : false;

// Static factory `T.from(x)` seed — only on a class (constructor) type, so an
// instance/plain-object method named `from` cannot seed a spurious arm.
type ClassifiableFactory<T> = T extends abstract new (...args: any) => any
  ? T extends { from: (...args: infer A) => any }
    ? ClassifiableSeed<A>
    : never
  : never;

// `new T(x)` seed — only on a class type, single-argument callable.
type ClassifiableConstructor<T> = T extends abstract new (
  ...args: infer A
) => any
  ? ClassifiableSeed<A>
  : never;

// Field-copy property shape. For a non-class type, recurse properties. For a
// class type, offer it only when `new T()` works (no required constructor
// arguments), because field copy builds a blank instance first.
type ClassifiableProperties<T> = T extends abstract new (
  ...args: any
) => infer I
  ? T extends abstract new () => any
    ? ClassifiableMain<I>
    : never
  : ClassifiableMain<T>;

// First parameter type, but only when the call is valid with a single argument:
// a first parameter must exist and every later parameter must be optional/rest
// (so `[]` is assignable to the rest). An `Iterable<U>` seed is rendered as
// `U[]` (the plain, JSON-decodable form typia can validate).
type ClassifiableSeed<A extends readonly any[]> = A extends readonly [
  infer P,
  ...infer Rest,
]
  ? [] extends Rest
    ? ClassifiableSeedValue<P>
    : never
  : A extends readonly []
    ? never
    : A extends readonly [(infer P)?, ...infer Rest]
      ? [] extends Rest
        ? ClassifiableSeedValue<P>
        : never
      : never;

// The seed of `from`/`new`, rendered as the plain, JSON-decodable form:
//  - `any`/`unknown` are rejected up front, else an `any`-typed seed (the common
//    `static from(json: any)` pattern) poisons the whole union to `any`.
//  - the bare-primitive arm is DISTRIBUTIVE and must stay ahead of `ValueOf`: a
//    union seed like `number | string | Date` keeps `string` as `string`.
//    Without it the non-distributive `ValueOf` arm fails for the whole union and
//    `string` falls to the `Iterable` arm, becoming `string[]`. `ValueOf` then
//    unwraps a boxed `String`/`Number` seed to its primitive.
//  - per the spec ("iterable construction seeds are rendered as arrays"), an
//    iterable seed — including a tuple or typed array — renders as its element
//    array (the JSON-decodable form); object seeds recurse through
//    `ClassifiableMain`, so a nested class inside a seed is classified too.
type ClassifiableSeedValue<P> =
  IsAny<P> extends true
    ? never
    : unknown extends P
      ? never
      : P extends string | number | bigint | boolean
        ? P
        : ValueOf<P> extends boolean | number | bigint | string
          ? ValueOf<P>
          : P extends Iterable<infer U>
            ? ClassifiableMain<U>[]
            : P extends null | undefined
              ? never
              : ClassifiableMain<P>;

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
    ? Set<ClassifiableMain<U>> | ClassifiableMain<U>[]
    : T extends Map<infer K, infer V>
      ?
          | Map<ClassifiableMain<K>, ClassifiableMain<V>>
          | [ClassifiableMain<K>, ClassifiableMain<V>][]
      : T extends ReadonlyMap<infer K, infer V>
        ? // checked before ReadonlySet: a ReadonlyMap structurally matches
            // ReadonlySet<infer U> (methods are bivariant and ReadonlySet has no
            // distinguishing required member like the mutable `Set.add`), so the
            // more specific ReadonlyMap arm must run first — ReadonlySet has no
            // `get`, so it can never match this arm in turn.
            | ReadonlyMap<ClassifiableMain<K>, ClassifiableMain<V>>
            | [ClassifiableMain<K>, ClassifiableMain<V>][]
        : T extends ReadonlySet<infer U>
          ? ReadonlySet<ClassifiableMain<U>> | ClassifiableMain<U>[]
          : T extends WeakSet<any> | WeakMap<any, any>
            ? never
            : T extends NativeClass
              ? T
              : {
                  // Drop a key when its value carries no plain data. `NonNullable`
                  // looks through an optional `m?(): void` (type `(() => void) |
                  // undefined`), which would otherwise survive as `m?: undefined`
                  // and reject the class's own instance. A `WeakSet`/`WeakMap`
                  // member is also dropped (it cannot be rebuilt from plain data,
                  // and a `never` value would make the whole object
                  // unsatisfiable) — but a real `Set`/`Map` is structurally
                  // *wider* than its weak counterpart, so it must be matched and
                  // kept first, otherwise `Set extends WeakSet` would drop it.
                  [P in keyof T as NonNullable<T[P]> extends Function
                    ? never
                    : NonNullable<T[P]> extends Set<any> | Map<any, any>
                      ? P
                      : NonNullable<T[P]> extends
                            | WeakSet<any>
                            | WeakMap<any, any>
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
