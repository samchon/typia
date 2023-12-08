import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_misc_createPrune_TupleHierarchical = _test_misc_prune(
  "TupleHierarchical",
)<TupleHierarchical>(TupleHierarchical)(
  typia.misc.createPrune<TupleHierarchical>(),
);
