<<<<<<< HEAD
=======
/**
 * Extracts property keys whose value type extends the target type.
 *
 * `SpecialFields<Instance, Target>` returns a union of property names from
 * `Instance` where the property value extends `Target`.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Instance Source object type
 * @template Target Target value type to match
 */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
export type SpecialFields<Instance extends object, Target> = {
  [P in keyof Instance]: Instance[P] extends Target ? P : never;
}[keyof Instance & string];
