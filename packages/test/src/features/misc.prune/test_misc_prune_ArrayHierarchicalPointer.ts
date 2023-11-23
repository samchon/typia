import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_misc_prune_ArrayHierarchicalPointer = _test_misc_prune(
  "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)((input) =>
  typia.misc.prune<ArrayHierarchicalPointer>(input),
);
