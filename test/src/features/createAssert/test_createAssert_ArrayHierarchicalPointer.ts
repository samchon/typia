import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_createAssert_ArrayHierarchicalPointer = _test_assert(
  TypeGuardError,
)("ArrayHierarchicalPointer")<ArrayHierarchicalPointer>(
  ArrayHierarchicalPointer,
)(typia.createAssert<ArrayHierarchicalPointer>());
