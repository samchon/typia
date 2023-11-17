import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_misc_assertClone_TupleHierarchical = _test_misc_assertClone(
  "TupleHierarchical",
)<TupleHierarchical>(TupleHierarchical)((input) =>
  typia.misc.assertClone<TupleHierarchical>(input),
);
