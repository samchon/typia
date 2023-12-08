import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_misc_createIsPrune_TupleHierarchical = _test_misc_isPrune(
  "TupleHierarchical",
)<TupleHierarchical>(TupleHierarchical)(
  typia.misc.createIsPrune<TupleHierarchical>(),
);
