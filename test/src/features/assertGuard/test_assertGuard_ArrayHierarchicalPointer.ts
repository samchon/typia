import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_assertGuard_ArrayHierarchicalPointer = _test_assertGuard(
  TypeGuardError,
)("ArrayHierarchicalPointer")<ArrayHierarchicalPointer>(
  ArrayHierarchicalPointer,
)((input) => typia.assertGuard<ArrayHierarchicalPointer>(input));
