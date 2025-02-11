import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ArrayHierarchicalPointer = _test_assert(CustomGuardError)(
    "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer
)(typia.createAssert<ArrayHierarchicalPointer>((p) => new CustomGuardError(p)));
