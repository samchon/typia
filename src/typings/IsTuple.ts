export type IsTuple<T extends readonly any[] | { length: number }> = [
  T,
] extends [never]
  ? false
  : T extends readonly any[]
    ? number extends T["length"]
      ? HasLiteralElements<T>
      : true
    : false;

// Check if a variable-length array has literal elements (indicating it's a tuple, not a plain array)
type HasLiteralElements<T extends readonly any[]> = 
  T extends readonly [infer First, ...any[]]
    ? IsLiteralType<First> extends true
      ? true
      : T extends readonly [...any[], infer Last]
        ? IsLiteralType<Last>
        : false
    : T extends readonly [...any[], infer Last]
      ? IsLiteralType<Last>
      : false;

type IsLiteralType<T> = T extends string
  ? string extends T
    ? false
    : true
  : T extends number
    ? number extends T
      ? false
      : true
    : T extends boolean
      ? boolean extends T
        ? false
        : true
      : true;
