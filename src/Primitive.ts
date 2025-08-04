import { Equal } from "./typings/Equal";
import { IsTuple } from "./typings/IsTuple";
import { NativeClass } from "./typings/NativeClass";
import { ValueOf } from "./typings/ValueOf";

import { Format } from "./tags";

/**
 * Converts complex TypeScript types to their JSON-serializable primitive forms.
 *
 * Transforms classes, built-in objects, and custom types into the primitive types 
 * they become when serialized to JSON. Essential for type-safe JSON operations 
 * where you need to know the actual runtime shape of your data.
 *
 * Handles special cases like Date objects becoming strings, classes with toJSON() 
 * methods, and built-in wrapper types like String/Number becoming their primitives.
 *
 * @example
 * ```typescript
 * class User {
 *   constructor(public name: string, public createdAt: Date) {}
 *   toJSON() {
 *     return { name: this.name, timestamp: this.createdAt.getTime() };
 *   }
 * }
 * 
 * type SerializedUser = Primitive<User>;
 * // Result: { name: string; timestamp: number; }
 * 
 * type PrimitiveDate = Primitive<Date>;
 * // Result: string & Format<"date-time">
 * ```
 *
 * @template T Type to convert to its JSON primitive form
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
