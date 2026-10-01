import { SpecialFields } from "./SpecialFields";

/**
 * Omits properties with `never` type from an object type.
 *
 * `OmitNever<T>` removes all properties whose value type is `never`, producing
 * a cleaner type without impossible properties.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @template T Target object type
 *
 * @evidence contracts/common.md#principled-implementation SpecialFields yields the keys whose value type is assignable to `never`, and the built-in Omit removes those keys, so only properties that can hold a value remain.
 * @evidence contracts/common.md#clear-and-simple-design It composes two existing utilities with no new mechanism.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts A type-level composition with no cast, special key or runtime component.
 * @evidence contracts/common.md#meaningful-documentation The comment states which properties are removed and why the result is cleaner.
 */
export type OmitNever<T extends object> = Omit<T, SpecialFields<T, never>>;
