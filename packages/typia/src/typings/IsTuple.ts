export type IsTuple<T extends readonly any[] | { length: number }> = [
  T,
] extends [never]
  ? false
  : T extends readonly any[]
    ? number extends T["length"]
      ? false
      : true
    : false;
