import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ArrayHierarchicalPointer = (): void => _test_assertEquals(TypeGuardError)(
    "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer
)(typia.createAssertEquals<ArrayHierarchicalPointer>());
