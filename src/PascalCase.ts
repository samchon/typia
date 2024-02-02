/**
 * Pascal case type.
 *
 * `PascalCase` type is a type that all keys of an object are pascalized.
 *
 * It also erase every method properties like {@link Resolved} type.
 *
 * @template T Target type to be pascalized
 * @author Jeongho Nam - https://github.com/samchon
 */
export type PascalCase<T> = Equal<T, PascalizeMain<T>> extends true
  ? T
  : PascalizeMain<T>;

/* -----------------------------------------------------------
    OBJECT CONVERSION
----------------------------------------------------------- */
type Equal<X, Y> = X extends Y ? (Y extends X ? true : false) : false;

type PascalizeMain<T> = T extends [never]
  ? never // special trick for (jsonable | null) type
  : T extends { valueOf(): boolean | bigint | number | string }
  ? ValueOf<T>
  : T extends Function
  ? never
  : T extends object
  ? PascalizeObject<T>
  : T;

type PascalizeObject<T extends object> = T extends Array<infer U>
  ? IsTuple<T> extends true
    ? PascalizeTuple<T>
    : PascalizeMain<U>[]
  : T extends Set<infer U>
  ? Set<PascalizeMain<U>>
  : T extends Map<infer K, infer V>
  ? Map<PascalizeMain<K>, PascalizeMain<V>>
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
      | Blob
      | File
  ? T
  : {
      [Key in keyof T as PascalizeString<Key & string>]: PascalizeMain<T[Key]>;
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
type PascalizeTuple<T extends readonly any[]> = T extends []
  ? []
  : T extends [infer F]
  ? [PascalizeMain<F>]
  : T extends [infer F, ...infer Rest extends readonly any[]]
  ? [PascalizeMain<F>, ...PascalizeTuple<Rest>]
  : T extends [(infer F)?]
  ? [PascalizeMain<F>?]
  : T extends [(infer F)?, ...infer Rest extends readonly any[]]
  ? [PascalizeMain<F>?, ...PascalizeTuple<Rest>]
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
type PascalizeString<Key extends string> = Key extends `${infer F}${infer R}`
  ? `${Uppercase<F>}${PascalizeStringRepeatedly<R>}`
  : Key;
type PascalizeStringRepeatedly<Key extends string> =
  Key extends `${infer F}_${infer R}`
    ? `${F}${Capitalize<PascalizeStringRepeatedly<R>>}`
    : Key;
