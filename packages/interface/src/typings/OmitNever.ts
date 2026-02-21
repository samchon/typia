import { SpecialFields } from "./SpecialFields";

/**
 * Omits properties with `never` type from an object type.
 *
 * `OmitNever<T>` removes all properties whose value type is `never`, producing
 * a cleaner type without impossible properties.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Target object type
 */
export type OmitNever<T extends object> = Omit<T, SpecialFields<T, never>>;
