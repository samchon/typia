import { Equal } from "./typings/Equal";
import { IsTuple } from "./typings/IsTuple";
import { NativeClass } from "./typings/NativeClass";
import { ValueOf } from "./typings/ValueOf";

/**
 * Strips methods from types, keeping only data properties.
 *
 * Removes all function properties from types while preserving the data structure. 
 * Perfect for defining interfaces that represent data transfer objects, API responses, 
 * or when you need the shape of a class without its behavior.
 *
 * Also converts built-in wrapper types to their primitive equivalents, similar to 
 * {@link Primitive} but without JSON serialization-specific transformations.
 *
 * @example
 * ```typescript
 * class User {
 *   constructor(public name: string, public age: number) {}
 *   
 *   greet() { return `Hello, ${this.name}`; }
 *   isAdult() { return this.age >= 18; }
 * }
 * 
 * type UserData = Resolved<User>;
 * // Result: { name: string; age: number; }
 * // Methods greet() and isAdult() are removed
 * 
 * type ResolvedString = Resolved<String>;
 * // Result: string (unwraps to primitive)
 * ```
 *
 * @template T Type to resolve by removing methods
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
