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
