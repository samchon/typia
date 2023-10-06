export type CamelCase<T> = Equal<T, Camelize<T>> extends true ? T : Camelize<T>;

type Equal<X, Y> = X extends Y ? (Y extends X ? true : false) : false;

type Camelize<T> = T extends [never]
    ? never // special trick for (jsonable | null) type
    : T extends object
    ? CamelizeObject<T>
    : T;

type CamelizeObject<T extends object> = T extends Array<infer U>
    ? IsTuple<T> extends true
        ? CamelizeTuple<T>
        : Camelize<U>[]
    : {
          [Key in keyof T as CamelizeString<Key & string>]: Camelize<T[Key]>;
      };

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
    ? [Camelize<F>]
    : T extends [infer F, ...infer Rest extends readonly any[]]
    ? [Camelize<F>, ...CamelizeTuple<Rest>]
    : T extends [(infer F)?]
    ? [Camelize<F>?]
    : T extends [(infer F)?, ...infer Rest extends readonly any[]]
    ? [Camelize<F>?, ...CamelizeTuple<Rest>]
    : [];

type CamelizeString<Key extends string> = Key extends `${infer F}${infer R}`
    ? `${Lowercase<F>}${CamelizeStringRepeatedly<R>}`
    : Key;
type CamelizeStringRepeatedly<Key extends string> =
    Key extends `${infer F}_${infer R}`
        ? `${F}${Capitalize<CamelizeStringRepeatedly<R>>}`
        : Key;
