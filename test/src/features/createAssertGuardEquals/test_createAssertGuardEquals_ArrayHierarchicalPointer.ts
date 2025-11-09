import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ArrayHierarchicalPointer = (): void => _test_assertGuardEquals(TypeGuardError)(
    "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer
)(typia.createAssertGuardEquals<ArrayHierarchicalPointer>());
