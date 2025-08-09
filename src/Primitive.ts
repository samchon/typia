import { Equal } from "./typings/Equal";
import { NativeClass } from "./typings/NativeClass";
import { ValueOf } from "./typings/ValueOf";

import { Format } from "./tags";

/**
 * Primitive type of JSON.
 *
 * `Primitive<T>` is a TMP (Type Meta Programming) type which converts
 * its argument as a primitive type within the framework JSON.
 *
 * If the target argument is a built-in class which returns its origin primitive type
 * through the `valueOf()` method like the `String` or `Number`, its return type will
 * be the `string` or `number`. Otherwise, if the built-in class does not have the
 * `valueOf()` method, the return type will be an empty object (`{}`).
 *
 * Otherwise, if the target argument is a type of custom class, all of its custom methods
 * will be erased and its prototype will be changed to the primitive `object`.
 * Therefore, the return type of the TMP type will finally be the primitive object.
 *
 * In addition, if the target argument is a type of custom class and it has a special
 * method `toJSON()`, the return type of this `Primitive` will be not `Primitive<Instance>`
 * but `Primitive<ReturnType<Instance.toJSON>>`.
 *
 * Before                  | After
 * ------------------------|----------------------------------------
 * `Boolean`               | `boolean`
 * `Number`                | `number`
 * `String`                | `string`
 * `Class`                 | `object`
 * `Class` with `toJSON()` | `Primitive<ReturnType<Class.toJSON>>`
 * Native Class            | never
 * Others                  | No change
 *
 * @template T Target argument type.
 * @author Jeongho Nam - https://github.com/samchon
 * @author Kyungsu Kang - https://github.com/kakasoo
 * @author Michael - https://github.com/8471919
 */
export type Primitive<T> =
  Equal<T, PrimitiveMain<T>> extends true ? T : PrimitiveMain<T>;

type PrimitiveMain<Instance> = Instance extends [never]
  ? never // (special trick for jsonable | null) type
  : ValueOf<Instance> extends bigint
    ? never
    : ValueOf<Instance> extends boolean | number | string
      ? ValueOf<Instance>
      : Instance extends Function
        ? never
        : ValueOf<Instance> extends object
          ? Instance extends object
            ? Instance extends Date
              ? string & Format<"date-time">
              : Instance extends IJsonable<infer Raw>
                ? ValueOf<Raw> extends object
                  ? Raw extends object
                    ? PrimitiveObject<Raw> // object would be primitified
                    : never // cannot be
                  : ValueOf<Raw> // atomic value
                : Instance extends Exclude<NativeClass, Date>
                  ? never
                  : PrimitiveObject<Instance> // object would be primitified
            : never // cannot be
          : ValueOf<Instance>;

type PrimitiveObject<Instance extends object> =
  Instance extends Array<infer T>
    ? IsPrimitiveTuple<Instance> extends true
      ? PrimitiveTuple<Instance>
      : PrimitiveMain<T>[]
    : {
        [P in keyof Instance]: PrimitiveMain<Instance[P]>;
      };

// Specialized tuple detection for Primitive type that handles rest tuples with literal elements
type IsPrimitiveTuple<T extends readonly any[] | { length: number }> = [
  T,
] extends [never]
  ? false
  : T extends readonly any[]
    ? number extends T["length"]
      ? HasLiteralElements<T>  // For variable-length arrays, check if they have literal elements
      : true  // Fixed-length tuples
    : false;

// Check if a variable-length array has literal elements (indicating it's a rest tuple, not a plain array)
type HasLiteralElements<T extends readonly any[]> = 
  T extends readonly [infer First, ...any[]]
    ? IsLiteralType<First> extends true
      ? true
      : T extends readonly [...any[], infer Last]
        ? IsLiteralType<Last>
        : false
    : T extends readonly [...any[], infer Last]
      ? IsLiteralType<Last>
      : false;

type IsLiteralType<T> = T extends string
  ? string extends T
    ? false
    : true
  : T extends number
    ? number extends T
      ? false
      : true
    : T extends boolean
      ? boolean extends T
        ? false
        : true
      : true;

type PrimitiveTuple<T extends readonly any[]> = HasRestElement<T> extends true
  ? PreserveRestTuple<T>
  : DecomposeRegularTuple<T>;

type HasRestElement<T extends readonly any[]> = 
  T extends readonly [any, ...any[], any]
    ? true
    : T extends readonly [...any[], any]
      ? true
      : T extends readonly [any, ...any[]]
        ? number extends T["length"]
          ? true
          : false
        : false;

type PreserveRestTuple<T extends readonly any[]> = {
  [K in keyof T]: PrimitiveMain<T[K]>;
};

type DecomposeRegularTuple<T extends readonly any[]> = T extends []
  ? []
  : T extends [infer F]
    ? [PrimitiveMain<F>]
    : T extends [infer F, ...infer Rest extends readonly any[]]
      ? [PrimitiveMain<F>, ...DecomposeRegularTuple<Rest>]
      : T extends [(infer F)?]
        ? [PrimitiveMain<F>?]
        : T extends [(infer F)?, ...infer Rest extends readonly any[]]
          ? [PrimitiveMain<F>?, ...DecomposeRegularTuple<Rest>]
          : [];

interface IJsonable<T> {
  toJSON(): T;
}
