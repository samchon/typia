import { OmitNever } from "./OmitNever";

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
export type ClassProperties<T extends object> = OmitNever<{
  [K in keyof T]: T[K] extends Function ? never : T[K];
}>;
