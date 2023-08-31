/**
 * Resolved type erased every methods.
 *
 * `Resolved` is a type of TMP (Type Meta Programming) type which converts
 * its argument as a resolved type that erased every method properties.
 *
 * If the target argument is a built-in class which returns its origin primitive type
 * through the `valueOf()` method like the `String` or `Number`, its return type would
 * be the `string` or `number`. Otherwise, the built-in class does not have the
 * `valueOf()` method, the return type would be same with the target argument.
 *
 * Otherwise, the target argument is a type of custom class, all of its custom methods
 * would be erased and its prototype would be changed to the primitive `object`.
 * Therefore, return type of the TMP type finally be the resolved object.
 *
 * Before                  | After
 * ------------------------|----------------------------------------
 * `Boolean`               | `boolean`
 * `Number`                | `number`
 * `BigInt`                | `bigint`
 * `String`                | `string`
 * `Class`                 | `interface`
 * Native Class or Others  | No change
 *
 * @template Instance Target argument type.
 * @author Jeongho Nam - https://github.com/samchon
 * @author Kyungsu Kang - https://github.com/kakasoo
 */
export type Resolved<T> = Equal<T, ResolvedMain<T>> extends true
    ? T
    : ResolvedMain<T>;

type Equal<X, Y> = X extends Y ? (Y extends X ? true : false) : false;

type ResolvedMain<Instance> = Instance extends [never]
    ? never // (special trick for jsonable | null) type
    : ValueOf<Instance> extends boolean | number | bigint | string
    ? ValueOf<Instance>
    : Instance extends Function
    ? never
    : Instance extends object
    ? ResolvedObject<Instance>
    : ValueOf<Instance>;

type ResolvedObject<Instance extends object> = Instance extends Array<infer T>
    ? IsTuple<Instance> extends true
        ? ResolvedTuple<Instance>
        : ResolvedMain<T>[]
    : Instance extends Set<infer U>
    ? Set<ResolvedMain<U>>
    : Instance extends Map<infer K, infer V>
    ? Map<ResolvedMain<K>, ResolvedMain<V>>
    : Instance extends WeakSet<any> | WeakMap<any, any>
    ? never
    : Instance extends
          | Date
          | Uint8Array
          | Uint8ClampedArray
          | Uint16Array
          | Uint32Array
          | BigUint64Array
          | Int8Array
          | Int16Array
          | Int32Array
          | BigInt64Array
          | Float32Array
          | Float64Array
          | ArrayBuffer
          | SharedArrayBuffer
          | DataView
    ? Instance
    : {
          [P in keyof Instance]: ResolvedMain<Instance[P]>;
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

type ValueOf<Instance> = IsValueOf<Instance, Boolean> extends true
    ? boolean
    : IsValueOf<Instance, Number> extends true
    ? number
    : IsValueOf<Instance, String> extends true
    ? string
    : Instance;

type IsTuple<T extends readonly any[] | { length: number }> = [T] extends [
    never,
]
    ? false
    : T extends readonly any[]
    ? number extends T["length"]
        ? false
        : true
    : false;

type IsValueOf<Instance, Object extends IValueOf<any>> = Instance extends Object
    ? Object extends IValueOf<infer Primitive>
        ? Instance extends Primitive
            ? false
            : true // not Primitive, but Object
        : false // cannot be
    : false;

interface IValueOf<T> {
    valueOf(): T;
}
