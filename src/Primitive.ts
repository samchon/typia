/**
 * Primitive type of JSON.
 *
 * `Primitive<T>` is a TMP (Type Meta Programming) type which converts
 * its argument as a primitive type within framework JSON.
 *
 * If the target argument is a built-in class which returns its origin primitive type
 * through the `valueOf()` method like the `String` or `Number`, its return type would
 * be the `string` or `number`. Otherwise, the built-in class does not have the
 * `valueOf()` method, the return type would be an empty object (`{}`).
 *
 * Otherwise, the target argument is a type of custom class, all of its custom method
 * would be erased and its prototype would be changed to the primitive `object`.
 * Therefore, return type of the TMP type finally be the primitive object.
 *
 * In addition, if the target argument is a type of custom class and it has a special
 * method `toJSON()`, return type of this `Primitive` would be not `Primitive<Instance>`
 * but `Primitive<ReturnType<Instance.toJSON>>`.
 *
 * Before                  | After
 * ------------------------|----------------------------------------
 * `Boolean`               | `boolean`
 * `Number`                | `number`
 * `String`                | `string`
 * `Class`                 | `object`
 * `Class` with `toJSON()` | `Primitive<ReturnType<Class.toJSON>>`
 * Native Class            | `{}`
 * Others                  | No change
 *
 * @template Instance Target argument type.
 * @author Jeongho Nam - https://github.com/samchon
 * @author Kyungsu Kang - https://github.com/kakasoo
 * @author Michael - https://github.com/8471919
 */
export type Primitive<T> = Equal<T, PrimitiveMain<T>> extends true
    ? T
    : PrimitiveMain<T>;

type Equal<X, Y> = X extends Y ? (Y extends X ? true : false) : false;

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
        ? Instance extends NativeClass
            ? {}
            : Instance extends IJsonable<infer Raw>
            ? ValueOf<Raw> extends object
                ? Raw extends object
                    ? PrimitiveObject<Raw> // object would be primitified
                    : never // cannot be
                : ValueOf<Raw> // atomic value
            : PrimitiveObject<Instance> // object would be primitified
        : never // cannot be
    : ValueOf<Instance>;

type PrimitiveObject<Instance extends object> = Instance extends Array<infer T>
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

type ValueOf<Instance> = IsValueOf<Instance, Boolean> extends true
    ? boolean
    : IsValueOf<Instance, Number> extends true
    ? number
    : IsValueOf<Instance, String> extends true
    ? string
    : Instance;

type NativeClass =
    | Set<any>
    | Map<any, any>
    | WeakSet<any>
    | WeakMap<any, any>
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
    | DataView;

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
    ? Object extends IValueOf<infer U>
        ? Instance extends U
            ? false
            : true // not Primitive, but Object
        : false // cannot be
    : false;

interface IValueOf<T> {
    valueOf(): T;
}

interface IJsonable<T> {
    toJSON(): T;
}
