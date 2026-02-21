/**
 * Extracts the primitive value type from boxed primitives.
 *
 * `ValueOf<Instance>` converts boxed primitive types (Boolean, Number, String)
 * to their primitive equivalents (boolean, number, string). Non-boxed types are
 * returned unchanged.
 *
 * @template Instance Type to extract primitive from
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
