import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_misc_isClone_ArrayHierarchical = _test_misc_isClone(
  "ArrayHierarchical",
)<ArrayHierarchical>(ArrayHierarchical)((input) =>
  typia.misc.isClone<ArrayHierarchical>(input),
);
