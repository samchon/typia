import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_misc_isPrune_TupleHierarchical = _test_misc_isPrune(
  "TupleHierarchical",
)<TupleHierarchical>(TupleHierarchical)((input) =>
  typia.misc.isPrune<TupleHierarchical>(input),
);
