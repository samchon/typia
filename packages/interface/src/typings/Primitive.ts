import { Format } from "../tags/Format";
import { Equal } from "./internal/Equal";
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
 *
 * @template T Target type to convert
 *
 * @evidence contracts/common.md#principled-implementation The type follows JSON.stringify semantics: boxed primitives unwrap, bigint, functions and non-Date native classes become `never`, Date becomes `string & Format<"date-time">`, a `toJSON` return replaces the object and other classes become plain objects with methods removed. Tuples keep their positions, including optional and variadic forms through a local IsPrimitiveTuple.
 * @evidence contracts/common.md#clear-and-simple-design The exported alias applies the Equal short-circuit and the private PrimitiveMain, PrimitiveObject and tuple helpers each own one branch of the JSON mapping.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The mapping encodes the JSON serialization contract, not a fixture; no cast or runtime logic is involved. Its `toJSON` support is structural, so a `toJSON` that does not return a plain JSON value is mapped on its declared return type without checking it.
 * @evidence contracts/common.md#meaningful-documentation The comment lists the transformations and the never cases; the local variadic-tuple helper explains why it differs from the shared IsTuple.
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

type PrimitiveTuple<T extends readonly any[]> = number extends T["length"]
  ? PrimitiveVariadicTuple<T>
  : T extends []
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

type PrimitiveVariadicTuple<T extends readonly any[]> = {
  [P in keyof T]: PrimitiveMain<T[P]>;
};

// Keep this broader tuple detection local to Primitive. Other helpers sharing
// IsTuple still treat variadic tuples as arrays because their tuple recursions
// do not preserve open-ended tuple shapes.
type IsPrimitiveTuple<T extends readonly any[]> = [T] extends [never]
  ? false
  : number extends T["length"]
    ? T extends readonly [any, ...any[]]
      ? true
      : false
    : true;

interface IJsonable<T> {
  toJSON(): T;
}
