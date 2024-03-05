import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_assertGuardEquals_ArrayHierarchicalPointer =
  _test_assertGuardEquals(TypeGuardError)(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)((input) =>
    typia.assertGuardEquals<ArrayHierarchicalPointer>(input),
  );
