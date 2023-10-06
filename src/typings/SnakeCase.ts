export type SnakeCase<T> = Equal<T, Snakage<T>> extends true ? T : Snakage<T>;

type Equal<X, Y> = X extends Y ? (Y extends X ? true : false) : false;

type Snakage<T> = T extends [never]
    ? never // special trick for (jsonable | null) type
    : T extends object
    ? SnakageObject<T>
    : T;

type SnakageObject<T extends object> = T extends Array<infer U>
    ? IsTuple<T> extends true
        ? SnakageTuple<T>
        : Snakage<U>[]
    : {
          [Key in keyof T as SnakageString<Key & string>]: Snakage<T[Key]>;
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
type SnakageTuple<T extends readonly any[]> = T extends []
    ? []
    : T extends [infer F]
    ? [Snakage<F>]
    : T extends [infer F, ...infer Rest extends readonly any[]]
    ? [Snakage<F>, ...SnakageTuple<Rest>]
    : T extends [(infer F)?]
    ? [Snakage<F>?]
    : T extends [(infer F)?, ...infer Rest extends readonly any[]]
    ? [Snakage<F>?, ...SnakageTuple<Rest>]
    : [];

type SnakageString<Key extends string> = SnakageStringRepeatedly<Key, "">;
type SnakageStringRepeatedly<
    S extends string,
    Previous extends string,
> = S extends `${infer First}${infer Second}${infer Rest}`
    ? `${Underscore<Previous, First>}${Lowercase<First>}${Underscore<
          First,
          Second
      >}${Lowercase<Second>}${SnakageStringRepeatedly<Rest, First>}`
    : S extends `${infer First}`
    ? `${Underscore<Previous, First>}${Lowercase<First>}`
    : "";
type Underscore<First extends string, Second extends string> = First extends
    | UpperAlphabetic
    | ""
    | "_"
    ? ""
    : Second extends UpperAlphabetic
    ? "_"
    : "";
type UpperAlphabetic =
    | "A"
    | "B"
    | "C"
    | "D"
    | "E"
    | "F"
    | "G"
    | "H"
    | "I"
    | "J"
    | "K"
    | "L"
    | "M"
    | "N"
    | "O"
    | "P"
    | "Q"
    | "R"
    | "S"
    | "T"
    | "U"
    | "V"
    | "W"
    | "X"
    | "Y"
    | "Z";
