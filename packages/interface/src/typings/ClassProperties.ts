/**
 * Extracts non-function properties from a class type.
 *
 * `ClassProperties<T>` filters out all method properties from a class, keeping
 * only data properties. Useful for serialization where methods should be
 * excluded.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Target class type
 */
export type ClassProperties<T extends object> = {
  [K in keyof T as [T[K]] extends [never]
    ? never
    : [Exclude<T[K], undefined>] extends [never]
      ? K
      : Exclude<T[K], undefined> extends Function
        ? never
        : K]: T[K];
};
