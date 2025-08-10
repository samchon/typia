import { Equal } from "./typings/Equal";
import { IsTuple } from "./typings/IsTuple";
import { NativeClass } from "./typings/NativeClass";
import { ValueOf } from "./typings/ValueOf";

/**
 * Resolved type that erases every method.
 *
 * `Resolved` is a TMP (Type Meta Programming) type which converts its argument
 * as a resolved type that erases every method property.
 *
 * If the target argument is a built-in class which returns its origin primitive
 * type through the `valueOf()` method like the `String` or `Number`, its return
 * type will be the `string` or `number`. Otherwise, if the built-in class does
 * not have the `valueOf()` method, the return type will be the same as the
 * target argument.
 *
 * Otherwise, if the target argument is a type of custom class, all of its
 * custom methods will be erased and its prototype will be changed to the
 * primitive `object`. Therefore, the return type of the TMP type will finally
 * be the resolved object.
 *
 * Before | After
 * ------------------------|---------------------------------------- `Boolean` |
 * `boolean` `Number` | `number` `BigInt` | `bigint` `String` | `string` `Class`
 * | `interface` Native Class or Others | No change
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @author Kyungsu Kang - https://github.com/kakasoo
 * @template T Target argument type.
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
