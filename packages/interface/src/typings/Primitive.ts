import { Format } from "../tags/Format";
import { Equal } from "./internal/Equal";
import { IsTuple } from "./internal/IsTuple";
import { NativeClass } from "./internal/NativeClass";
import { ValueOf } from "./internal/ValueOf";

/**
 * Converts a type to its JSON-serializable primitive form.
 *
 * `Primitive<T>` transforms types for JSON serialization: boxed primitives
 * become primitives (Boolean→boolean), classes become plain objects with
 * methods removed, Date becomes `string & Format<"date-time">`, and types with
 * `toJSON()` use their return type. Native classes (except Date) and bigint
 * become `never` as they're not JSON-serializable.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @author Kyungsu Kang - https://github.com/kakasoo
 * @author Michael - https://github.com/8471919
 * @template T Target type to convert
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
