import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_misc_createAssertClone_ArrayHierarchicalPointer =
  _test_misc_assertClone(TypeGuardError)(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
    typia.misc.createAssertClone<ArrayHierarchicalPointer>(),
  );
