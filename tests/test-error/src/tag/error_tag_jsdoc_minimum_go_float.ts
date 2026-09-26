import typia from "typia";

// Numeric comment tags read JavaScript's `Number()` grammar, in which `inf` is
// not a number. Go's float syntax accepted it and spliced the text into the
// validator as `inf <= $input`, a ReferenceError at runtime (#2442).
interface IValue {
  /** @minimum inf */
  value: number;
}
typia.createIs<IValue>();
