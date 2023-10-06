export type PascalCase<T> = Equal<T, Pascalize<T>> extends true
    ? T
    : Pascalize<T>;

type Equal<X, Y> = X extends Y ? (Y extends X ? true : false) : false;

type Pascalize<T> = T extends [never]
    ? never // special trick for (jsonable | null) type
    : T extends object
    ? PascalizeObject<T>
    : T;

type PascalizeObject<T extends object> = T extends Array<infer U>
    ? IsTuple<T> extends true
        ? PascalizeTuple<T>
        : Pascalize<U>[]
    : {
          [Key in keyof T as PascalizeString<Key & string>]: Pascalize<T[Key]>;
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
type PascalizeTuple<T extends readonly any[]> = T extends []
    ? []
    : T extends [infer F]
    ? [Pascalize<F>]
    : T extends [infer F, ...infer Rest extends readonly any[]]
    ? [Pascalize<F>, ...PascalizeTuple<Rest>]
    : T extends [(infer F)?]
    ? [Pascalize<F>?]
    : T extends [(infer F)?, ...infer Rest extends readonly any[]]
    ? [Pascalize<F>?, ...PascalizeTuple<Rest>]
    : [];

type PascalizeString<Key extends string> = Key extends `${infer F}${infer R}`
    ? `${Uppercase<F>}${PascalizeStringRepeatedly<R>}`
    : Key;
type PascalizeStringRepeatedly<Key extends string> =
    Key extends `${infer F}_${infer R}`
        ? `${F}${Capitalize<PascalizeStringRepeatedly<R>>}`
        : Key;
