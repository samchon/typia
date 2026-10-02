/**
 * Extracts property keys whose value type extends the target type.
 *
 * `SpecialFields<Instance, Target>` returns a union of property names from
 * `Instance` where the property value extends `Target`.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @template Instance Source object type
 * @template Target Target value type to match
 *
 * @evidence contracts/common.md#principled-implementation A mapped type with `-?` evaluates `Instance[P] extends Target` for every key and yields the key or `never`; indexing the result by `keyof Instance` unions exactly the keys whose value type is assignable to Target. The `-?` removes optionality from the mapped keys, but an optional property's value type still includes `undefined` when it is tested.
 * @evidence contracts/common.md#clear-and-simple-design One mapped type and one index access over the source Instance and matching Target parameters.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts A structural type computation over the supplied type with no cast or consumer name.
 * @evidence contracts/common.md#meaningful-documentation The comment explains the key-union result and documents both type parameters.
 */
export type SpecialFields<Instance extends object, Target> = {
  [P in keyof Instance]-?: Instance[P] extends Target ? P : never;
}[keyof Instance];
