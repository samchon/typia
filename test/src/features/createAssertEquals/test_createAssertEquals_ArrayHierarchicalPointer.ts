import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_createAssertEquals_ArrayHierarchicalPointer = (): void =>
  _test_assertEquals(TypeGuardError)(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
    typia.createAssertEquals<ArrayHierarchicalPointer>(),
  );
