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
  Equal<T, PrimitiveMain<T, []>> extends true ? T : PrimitiveMain<T, []>;

type PrimitiveMain<Instance, _Depth extends readonly any[] = []> = 
  _Depth['length'] extends 15 // Add global depth limit
    ? any // Fallback to any for very deep recursion
    : Instance extends [never]
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
                        ? PrimitiveObject<Raw, [..._Depth, any]> // object would be primitified
                        : never // cannot be
                      : ValueOf<Raw> // atomic value
                    : Instance extends Exclude<NativeClass, Date>
                      ? never
                      : PrimitiveObject<Instance, [..._Depth, any]> // object would be primitified
                : never // cannot be
              : ValueOf<Instance>;

type PrimitiveObject<Instance extends object, _Depth extends readonly any[] = []> =
  Instance extends Array<infer T>
    ? IsPrimitiveTuple<Instance, _Depth> extends true
      ? PrimitiveTuple<Instance, _Depth>
      : PrimitiveMain<T, _Depth>[]
    : {
        [P in keyof Instance]: PrimitiveMain<Instance[P], _Depth>;
      };

// Specialized tuple detection for Primitive type that handles rest tuples with literal elements
// Uses recursion depth limiting to prevent infinite type instantiation
type IsPrimitiveTuple<T extends readonly any[] | { length: number }, _Depth extends readonly any[] = []> = 
  _Depth['length'] extends 10 // Limit recursion depth to prevent infinite instantiation
    ? false 
    : [T] extends [never]
      ? false
      : T extends readonly any[]
        ? number extends T["length"]
          ? IsRestTupleWithLiterals<T, _Depth>  // For variable-length arrays, check for rest tuple pattern
          : true  // Fixed-length tuples
        : false;

// Simplified detection for the specific pattern: literals at start/end with rest in middle
type IsRestTupleWithLiterals<T extends readonly any[], _Depth extends readonly any[] = []> =
  _Depth['length'] extends 5 // Shallow depth limit for this check
    ? false
    : T extends readonly [infer First, ...any[], infer Last]
      ? IsLiteralType<First> extends true
        ? true
        : IsLiteralType<Last> extends true
          ? true
          : false
      : T extends readonly [infer Single, ...any[]]
        ? IsLiteralType<Single>
        : T extends readonly [...any[], infer Single]
          ? IsLiteralType<Single>
          : false;

type IsLiteralType<T> = T extends string
  ? string extends T ? false : true
  : T extends number
    ? number extends T ? false : true
    : T extends boolean
      ? boolean extends T ? false : true
      : false;

type PrimitiveTuple<T extends readonly any[], _Depth extends readonly any[] = []> = 
  _Depth['length'] extends 8 // Limit recursion depth
    ? PrimitiveMain<T[number], _Depth>[] // Fallback to array for deep recursion
    : T extends readonly []
      ? []
      : T extends readonly [infer F]
        ? [PrimitiveMain<F, _Depth>]
        : T extends readonly [infer F, ...infer Rest extends readonly any[]]
          ? [PrimitiveMain<F, _Depth>, ...PrimitiveTuple<Rest, [..._Depth, any]>]
          : T extends readonly [(infer F)?]
            ? [PrimitiveMain<F, _Depth>?]
            : T extends readonly [(infer F)?, ...infer Rest extends readonly any[]]
              ? [PrimitiveMain<F, _Depth>?, ...PrimitiveTuple<Rest, [..._Depth, any]>]
              : PrimitiveMain<T[number], _Depth>[];

interface IJsonable<T> {
  toJSON(): T;
}
