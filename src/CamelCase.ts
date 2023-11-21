/**
 * Camel case type.
 *
 * `CamelCase` type is a type that all keys of an object are camelized.
 *
 * It also erase every method properties like {@link Resolved} type.
 *
 * @template T Target type to be camelized
 * @author Jeongho Nam - https://github.com/samchon
 */
export type CamelCase<T> = Equal<T, CamelizeMain<T>> extends true
  ? T
  : CamelizeMain<T>;

/* -----------------------------------------------------------
    OBJECT CONVERSION
----------------------------------------------------------- */
type Equal<X, Y> = X extends Y ? (Y extends X ? true : false) : false;

type CamelizeMain<T> = T extends [never]
  ? never // special trick for (jsonable | null) type
  : T extends { valueOf(): boolean | bigint | number | string }
  ? ValueOf<T>
  : T extends Function
  ? never
  : T extends object
  ? CamelizeObject<T>
  : T;

type CamelizeObject<T extends object> = T extends Array<infer U>
  ? IsTuple<T> extends true
    ? CamelizeTuple<T>
    : CamelizeMain<U>[]
  : T extends Set<infer U>
  ? Set<CamelizeMain<U>>
  : T extends Map<infer K, infer V>
  ? Map<CamelizeMain<K>, CamelizeMain<V>>
  : T extends WeakSet<any> | WeakMap<any, any>
  ? never
  : T extends
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
  ? T
  : {
      [Key in keyof T as CamelizeString<Key & string>]: CamelizeMain<T[Key]>;
    };

/* -----------------------------------------------------------
    SPECIAL CASES
----------------------------------------------------------- */
type IsTuple<T extends readonly any[] | { length: number }> = [T] extends [
  never,
]
  ? false
  : T extends readonly any[]
  ? number extends T["length"]
    ? false
    : true
  : false;
type CamelizeTuple<T extends readonly any[]> = T extends []
  ? []
  : T extends [infer F]
  ? [CamelizeMain<F>]
  : T extends [infer F, ...infer Rest extends readonly any[]]
  ? [CamelizeMain<F>, ...CamelizeTuple<Rest>]
  : T extends [(infer F)?]
  ? [CamelizeMain<F>?]
  : T extends [(infer F)?, ...infer Rest extends readonly any[]]
  ? [CamelizeMain<F>?, ...CamelizeTuple<Rest>]
  : [];

type ValueOf<Instance> = IsValueOf<Instance, Boolean> extends true
  ? boolean
  : IsValueOf<Instance, Number> extends true
  ? number
  : IsValueOf<Instance, String> extends true
  ? string
  : Instance;

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

/* -----------------------------------------------------------
    STRING CONVERTER
----------------------------------------------------------- */
type CamelizeString<Key extends string> = Key extends `${infer F}${infer R}`
  ? `${Lowercase<F>}${CamelizeStringRepeatedly<R>}`
  : Key;
type CamelizeStringRepeatedly<Key extends string> =
  Key extends `${infer F}_${infer R}`
    ? `${F}${Capitalize<CamelizeStringRepeatedly<R>>}`
    : Key;
