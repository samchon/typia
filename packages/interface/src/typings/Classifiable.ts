import { IsTuple } from "./internal/IsTuple";
import { NativeClass } from "./internal/NativeClass";
import { ValueOf } from "./internal/ValueOf";

/**
 * The plain input `typia.plain.classify<T>` accepts to reconstruct an instance.
 *
 * The transform builds each class with **exactly one** construction strategy,
 * chosen by precedence, so `Classifiable<T>` resolves to that one strategy's
 * plain seed — not a union of all three. (A union would accept, say, the
 * property shape for a class the runtime builds via `from`, which `T.from` then
 * rejects: the union over-accepts and is unsound.) For a **class** type
 * (`typeof T`) the precedence is:
 *
 * 1. The seed of a static factory `T.from(x)`, when `T` has a `from` callable with
 *    a single argument.
 * 2. Otherwise the seed of `new T(x)`, when the constructor is callable with a
 *    single argument (a first parameter that may be optional, every later
 *    parameter optional/rest).
 * 3. Otherwise the public, methods-excluded property shape — field copy onto the
 *    prototype (`Object.create(T.prototype)` + assign), which needs no
 *    constructor call and so applies to any class regardless of its
 *    constructor. For a non-class type this is the type itself, each property
 *    classified.
 *
 * Factory/constructor seeds are reachable only from the class type; for an
 * **instance** type `T` (the common `classify<User>` call) the class-only arms
 * are unreachable, so the result is the recursive property shape — the most a
 * type can express from an instance, and it already structurally accepts a live
 * instance. (A class built via `from`/`new` from a shape that diverges from its
 * public properties is the one input TypeScript cannot recover from an instance
 * type; such callers pass `any` — the `JSON.parse` case — or use the validated
 * `assertClassify`/`validateClassify` variants.)
 *
 * Strategy selection within the class-type form is by ARITY — a single
 * meaningful argument — and is deliberately NOT gated on the field shape being
 * assignable to the `from`/constructor parameter, so a divergent factory such
 * as `Temporal.from(isoString)` is honored (following Rev 3/5's arity rule over
 * a literal reading of the earlier "parameter accepts the plain data shape"
 * clause). One consequence, peculiar to `Classifiable<typeof X>`: an INHERITED
 * single-argument constructor (e.g. `class X extends Error`, which inherits
 * `new (message?: string)`) is selected by arity and its seed omits `X`'s own
 * fields — own-vs-inherited cannot be distinguished at the type level. The
 * instance form `Classifiable<X>` (the normal call) field-copies every public
 * property and is unaffected.
 *
 * The property arm recurses through nested classes and containers; native
 * classes (Date, typed arrays, RegExp, Buffer, …) pass through and boxed
 * primitives unwrap, while `Set`/`Map` (and their `readonly` counterparts)
 * additionally accept their array form (`Set<T>` ⇒ `T[]`, `Map<K,V>` ⇒ `[K,
 * V][]`). A `WeakSet`/`WeakMap` member is dropped (it cannot be rebuilt from
 * plain data). Construction seeds are recursively classified into the same
 * plain form — a nested class inside a seed is method-stripped, iterable seeds
 * render as arrays, boxed seeds unwrap. A top-level or construction-seed
 * `any`/`unknown` is rejected (`never`) so it cannot widen the result; a nested
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
      : T extends any // distribute over a union of (class) types
        ? ClassifiableInput<T>
        : never;

type IsAny<T> = 0 extends 1 & T ? true : false;

// Runtime precedence as a conditional: `T.from(x)` → `new T(x)` → field copy.
// Each arm is `never` when its strategy is inapplicable, so the conditional
// falls through to the next, yielding exactly the one strategy the transform
// picks — never a union of all three (which would accept inputs a later strategy
// rejects, e.g. the property shape for a `from`-built class).
type ClassifiableInput<T> = [ClassifiableFactory<T>] extends [never]
  ? [ClassifiableConstructor<T>] extends [never]
    ? ClassifiableProperties<T>
    : ClassifiableConstructor<T>
  : ClassifiableFactory<T>;

// Instance type of a class type T (its `prototype`). Unlike `abstract new`, this
// also resolves a class whose constructor is private/protected (or declared in a
// `.d.ts` ambient class) — whose construct signature `abstract new` does NOT
// match — so a value-object with a private constructor stays classifiable. It is
// `never` for any non-class type, letting the arms below tell a class apart from
// a plain value. The `T extends Function` guard is essential: a class (even with
// a private constructor) is a Function, whereas a plain object / interface /
// instance that merely carries a data field literally named `prototype` is not —
// without it, `{ prototype: infer I }` would read that field as the instance and
// drop the object's other fields. The `(...args) => any` exclusion then drops a
// CALLABLE object (a call signature, not a construct signature) that also carries
// a `prototype` field — a class constructor has no call signature, so it passes.
// `IsAny` rejects a plain function (whose `prototype` is `any`) and the `object`
// guard a non-object `prototype`.
type ClassInstanceType<T> = T extends abstract new (...args: any) => infer I
  ? I
  : T extends Function
    ? T extends (...args: any) => any
      ? never
      : T extends { prototype: infer I }
        ? IsAny<I> extends true
          ? never
          : I extends object
            ? I
            : never
        : never
    : never;

// Static factory `T.from(x)` seed. Detected via `ClassInstanceType` (a class
// type, even one with a private constructor), so an instance/plain-object method
// named `from` cannot seed a spurious arm. `from` counts as a constructing
// factory only when it RETURNS the instance type (looking through a `| null` /
// `| undefined` failure arm) — a `from` whose return is unrelated (a helper like
// `from(text): number`), untyped (`any`), or that constructs nothing (`never` /
// only `null`/`undefined`, where `NonNullable` collapses to `never`) does not
// hijack the strategy, and one returning a base/supertype (e.g. an inherited
// `from`) falls through to field copy, which safely captures the subclass's own
// fields.
type ClassifiableFactory<T> = [ClassInstanceType<T>] extends [never]
  ? never
  : T extends { from: (...args: infer A) => infer R }
    ? IsAny<R> extends true
      ? never
      : [NonNullable<R>] extends [never]
        ? never
        : [NonNullable<R>] extends [ClassInstanceType<T>]
          ? ClassifiableSeed<A>
          : never
    : never;

// `new T(x)` seed — single-argument callable. A private/protected (or otherwise
// non-`new`-able) constructor does not match `abstract new`, so this is `never`
// for it — correct, since you cannot `new` it; such a class is built via `from`
// or field copy.
type ClassifiableConstructor<T> = T extends abstract new (
  ...args: infer A
) => any
  ? ClassifiableSeed<A>
  : never;

// Field-copy property shape — the fallback strategy. Field copy is
// `Object.create(T.prototype)` + property assignment; it never calls the
// constructor, so it applies to ANY class and is NOT gated on `new T()` (a
// required-argument, or even private/protected, constructor does not disable
// field copy — the instance type is read from `prototype`). For a non-class type
// this is just the recursive property shape.
type ClassifiableProperties<T> = [ClassInstanceType<T>] extends [never]
  ? ClassifiableMain<T>
  : ClassifiableMain<ClassInstanceType<T>>;

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
                  // A purely-nullish field (`null`/`undefined`) is KEPT (its
                  // `NonNullable` is `never`, which would otherwise be vacuously a
                  // `Function` and dropped like a method) — `null` is valid plain
                  // data that the runtime field copy preserves.
                  [P in keyof T as [NonNullable<T[P]>] extends [never]
                    ? P
                    : NonNullable<T[P]> extends Function
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
