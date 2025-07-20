import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_misc_isClone_ArrayHierarchicalPointer = (): void =>
  _test_misc_isClone("ArrayHierarchicalPointer")<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer,
  )((input) => typia.misc.isClone<ArrayHierarchicalPointer>(input));
