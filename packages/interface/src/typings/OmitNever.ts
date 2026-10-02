import { SpecialFields } from "./SpecialFields";

/**
 * Omits properties with `never` type from an object type.
 *
 * `OmitNever<T>` removes all properties whose value type is `never`, producing
 * a type without required impossible properties. An optional `never` property
 * has an indexed read type including `undefined`, so it remains optional.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @template T Target object type
 *
 * @evidence contracts/common.md#principled-implementation SpecialFields yields keys whose indexed read type extends never and the standard Omit removes those keys while preserving the remaining types and modifiers. Optional never includes undefined on indexed access and therefore remains; this is read-type selection rather than a claim that every remaining property can be supplied.
 * @evidence contracts/common.md#clear-and-simple-design It composes two existing utilities with no new mechanism.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts A type-level composition with no cast, special key or runtime component.
 * @evidence contracts/common.md#meaningful-documentation The comment states which properties are removed and why the result is cleaner.
 */
export type OmitNever<T extends object> = Omit<T, SpecialFields<T, never>>;
