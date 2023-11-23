import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_misc_clone_ArrayHierarchicalPointer = _test_misc_clone(
  "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)((input) =>
  typia.misc.clone<ArrayHierarchicalPointer>(input),
);
