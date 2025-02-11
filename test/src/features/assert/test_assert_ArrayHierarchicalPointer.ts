import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

import { TypeGuardError } from "typia";

export const test_assert_ArrayHierarchicalPointer = _test_assert(TypeGuardError)(
    "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer
)((input) => typia.assert<ArrayHierarchicalPointer>(input));
