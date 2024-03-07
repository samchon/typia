import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

import { TypeGuardError } from "typia";

export const test_assertEquals_ArrayHierarchicalPointer = _test_assertEquals(
  TypeGuardError,
)("ArrayHierarchicalPointer")<ArrayHierarchicalPointer>(
  ArrayHierarchicalPointer,
)((input) => typia.assertEquals<ArrayHierarchicalPointer>(input));
