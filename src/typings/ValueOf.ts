export type ValueOf<Instance> =
  IsValueOf<Instance, boolean> extends true
    ? boolean
    : IsValueOf<Instance, number> extends true
      ? number
      : IsValueOf<Instance, string> extends true
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
