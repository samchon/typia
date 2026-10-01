/**
 * Extracts the primitive value type from boxed primitives.
 *
 * `ValueOf<Instance>` converts boxed primitive types (Boolean, Number, String)
 * to their primitive equivalents (boolean, number, string). Non-boxed types are
 * returned unchanged.
 *
 * @template Instance Type to extract primitive from
 *
 * @evidence contracts/common.md#principled-implementation IsValueOf tests whether the instance is a Boolean, Number or String wrapper object, by checking assignability to the wrapper while not being assignable to the corresponding primitive, and then returns the primitive; any other type is returned unchanged. The check relies on the wrapper's `valueOf` signature.
 * @evidence contracts/common.md#clear-and-simple-design One alias with a private tester and a private helper interface; the sequence of three tests is the whole policy.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It uses standard wrapper-object semantics and no runtime cast.
 * @evidence contracts/common.md#meaningful-documentation The comment describes the boxed-to-primitive mapping and that other types pass through; the tester documents its non-primitive case with an inline comment.
 */
export type ValueOf<Instance> =
  IsValueOf<Instance, Boolean> extends true
    ? boolean
    : IsValueOf<Instance, Number> extends true
      ? number
      : IsValueOf<Instance, String> extends true
        ? string
        : Instance;

type IsValueOf<Instance, Object extends IValueOf<any>> = Instance extends Object
  ? Object extends IValueOf<infer Primitive>
    ? Instance extends Primitive
      ? false
      : true // not Primitive, but Object
    : false // cannot be
  : false;

interface IValueOf<T> {
  valueOf(): T;
}
