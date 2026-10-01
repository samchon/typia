/**
 * Extracts non-function properties from a class type.
 *
 * `ClassProperties<T>` filters out all method properties from a class, keeping
 * only data properties. Useful for serialization where methods should be
 * excluded.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @template T Target class type
 *
 * @evidence contracts/common.md#principled-implementation Key remapping drops a key whose type is `never` or whose non-undefined type is a function, and keeps a key whose only type is `undefined`. Property types are retained unchanged, so only data members remain.
 * @evidence contracts/common.md#clear-and-simple-design One mapped type with a single filter expression.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It filters by the property's type, not by a name list.
 * @evidence contracts/common.md#meaningful-documentation The comment states what is extracted and the serialization use; it does not state the never and undefined-only rules.
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
