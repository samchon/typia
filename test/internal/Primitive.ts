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

export namespace Primitive {
    /**
     * Hard copy for primitive object.
     *
     * `Primitive.clone` is a function copying an object in the primitive and entire level.
     *
     * @param instance Target instance to be copied
     * @return The copied instance
     */
    export function clone<Instance>(instance: Instance): Primitive<Instance> {
        return JSON.parse(JSON.stringify(instance));
    }

    /**
     * Test whether two arguments are equal in the primitive level.
     *
     * @param x The first argument to compare
     * @param y The second argument to compare
     * @return Whether two arguments are equal or not
     */
    export function equal_to<Instance>(x: Instance, y: Instance): boolean {
        return recursive_equal_to(x, y, "$input");
    }
}

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

function object_equal_to<T extends object>(x: T, y: T, path: string): boolean {
    return Object.entries(x).every(([key, value]) => {
        return recursive_equal_to(value, (y as any)[key], `${path}.${key}`);
    });
}

function array_equal_to<T>(x: T[], y: T[], path: string): boolean {
    if (x.length !== y.length)
        return trace(x.length, y.length, `${path}.length`);
    return x.every((value, index) => {
        return recursive_equal_to(value, y[index], `${path}[${index}]`);
    });
}

function recursive_equal_to<T>(x: T, y: T, path: string): boolean {
    const type = typeof x;
    if (type !== typeof y) return trace(x, y, path);
    else if (type === "object")
        if (x === null) return trace(x, y, path);
        else if (x instanceof Array)
            return array_equal_to(x, y as typeof x, path);
        else
            return object_equal_to(
                (<any>x) as object,
                (<any>y) as object,
                path,
            );
    else if (type !== "function") return trace(x, y, path);
    else return trace(x, y, path);
}

function trace(x: any, y: any, path: string): boolean {
    if (x !== y) console.log(x, y, path);
    return x === y;
}
