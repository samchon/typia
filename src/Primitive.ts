/**
 * Primitive type.
 *
 * `Primitive` is a type of TMP (Type Meta Programming) type who converts its argument as a
 * primitive type.
 *
 * If the target argument is a built-in class who returns its origin primitive type through
 * the `valueOf()` method like the `String` or `Number`, its return type would be the
 * `string` or `number`.
 *
 * Otherwise, the target argument is a type of custom class, all of its custom method would
 * be erased and its prototype would be changed to the primitive `object`. Therefore, return
 * type of the TMP type finally be the primitive object.
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
 * Others                  | No change
 *
 * @template Instance Target argument type.
 * @author Jenogho Nam - https://github.com/samchon
 */
export type Primitive<T> = _Equal<T, _Primitive<T>> extends true
    ? T
    : _Primitive<T>;

type _Equal<X, Y> = X extends Y ? (Y extends X ? true : false) : false;

type _Primitive<Instance> = _ValueOf<Instance> extends object
    ? Instance extends object
        ? Instance extends _Native
            ? {}
            : Instance extends IJsonable<infer Raw>
            ? _ValueOf<Raw> extends object
                ? Raw extends object
                    ? _PrimitiveObject<Raw> // object would be primitified
                    : never // cannot be
                : _ValueOf<Raw> // atomic value
            : _PrimitiveObject<Instance> // object would be primitified
        : never // cannot be
    : _ValueOf<Instance>;

type _PrimitiveObject<Instance extends object> = Instance extends Array<infer T>
    ? _Primitive<T>[]
    : {
          [P in keyof Instance]: Instance[P] extends Function
              ? never
              : _Primitive<Instance[P]>;
      };

type _ValueOf<Instance> = _IsValueOf<Instance, Boolean> extends true
    ? boolean
    : _IsValueOf<Instance, Number> extends true
    ? number
    : _IsValueOf<Instance, String> extends true
    ? string
    : Instance;

type _Native =
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

type _IsValueOf<
    Instance,
    Object extends IValueOf<any>,
> = Instance extends Object
    ? Object extends IValueOf<infer Primitive>
        ? Instance extends Primitive
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
