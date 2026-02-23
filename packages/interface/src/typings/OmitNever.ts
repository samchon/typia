import { SpecialFields } from "./SpecialFields";

<<<<<<< HEAD
=======
/**
 * Omits properties with `never` type from an object type.
 *
 * `OmitNever<T>` removes all properties whose value type is `never`, producing
 * a cleaner type without impossible properties.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Target object type
 */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
export type OmitNever<T extends object> = Omit<T, SpecialFields<T, never>>;
