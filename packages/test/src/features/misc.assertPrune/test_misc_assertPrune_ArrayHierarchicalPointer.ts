import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_misc_assertPrune_ArrayHierarchicalPointer =
  _test_misc_assertPrune("ArrayHierarchicalPointer")<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer,
  )((input) => typia.misc.assertPrune<ArrayHierarchicalPointer>(input));
