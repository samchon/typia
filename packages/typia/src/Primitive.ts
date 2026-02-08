import { Equal } from "./typings/Equal";
import { IsTuple } from "./typings/IsTuple";
import { NativeClass } from "./typings/NativeClass";
import { ValueOf } from "./typings/ValueOf";

import { Format } from "./tags";

/**
 * Primitive type of JSON.
 *
 * `Primitive<T>` is a TMP (Type Meta Programming) type which converts its
 * argument as a primitive type within the framework JSON.
 *
 * If the target argument is a built-in class which returns its origin primitive
 * type through the `valueOf()` method like the `String` or `Number`, its return
 * type will be the `string` or `number`. Otherwise, if the built-in class does
 * not have the `valueOf()` method, the return type will be an empty object
 * (`{}`).
 *
 * Otherwise, if the target argument is a type of custom class, all of its
 * custom methods will be erased and its prototype will be changed to the
 * primitive `object`. Therefore, the return type of the TMP type will finally
 * be the primitive object.
 *
 * In addition, if the target argument is a type of custom class and it has a
 * special method `toJSON()`, the return type of this `Primitive` will be not
 * `Primitive<Instance>` but `Primitive<ReturnType<Instance.toJSON>>`.
 *
 * Before | After
 * ------------------------|---------------------------------------- `Boolean` |
 * `boolean` `Number` | `number` `String` | `string` `Class` | `object` `Class`
 * with `toJSON()` | `Primitive<ReturnType<Class.toJSON>>` Native Class | never
 * Others | No change
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @author Kyungsu Kang - https://github.com/kakasoo
 * @author Michael - https://github.com/8471919
 * @template T Target argument type.
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
    ? IsTuple<Instance> extends true
      ? PrimitiveTuple<Instance>
      : PrimitiveMain<T>[]
    : {
        [P in keyof Instance]: PrimitiveMain<Instance[P]>;
      };

type PrimitiveTuple<T extends readonly any[]> = T extends []
  ? []
  : T extends [infer F]
    ? [PrimitiveMain<F>]
    : T extends [infer F, ...infer Rest extends readonly any[]]
      ? [PrimitiveMain<F>, ...PrimitiveTuple<Rest>]
      : T extends [(infer F)?]
        ? [PrimitiveMain<F>?]
        : T extends [(infer F)?, ...infer Rest extends readonly any[]]
          ? [PrimitiveMain<F>?, ...PrimitiveTuple<Rest>]
          : [];

interface IJsonable<T> {
  toJSON(): T;
}
