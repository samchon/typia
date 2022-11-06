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
export type Primitive<Instance> = value_of<Instance> extends object
    ? Instance extends object
        ? Instance extends IJsonable<infer Raw>
            ? value_of<Raw> extends object
                ? Raw extends object
                    ? PrimitiveObject<Raw> // object would be primitified
                    : never // cannot be
                : value_of<Raw> // atomic value
            : PrimitiveObject<Instance> // object would be primitified
        : never // cannot be
    : value_of<Instance>;

type PrimitiveObject<Instance extends object> = Instance extends Array<infer T>
    ? Primitive<T>[]
    : {
          [P in keyof Instance]: Instance[P] extends Function
              ? never
              : Primitive<Instance[P]>;
      };

type value_of<Instance> = is_value_of<Instance, Boolean> extends true
    ? boolean
    : is_value_of<Instance, Number> extends true
    ? number
    : is_value_of<Instance, String> extends true
    ? string
    : Instance;

type is_value_of<
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
