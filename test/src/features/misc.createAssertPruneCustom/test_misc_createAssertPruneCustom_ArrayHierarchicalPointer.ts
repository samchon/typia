import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_ArrayHierarchicalPointer = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer
)(typia.misc.createAssertPrune<ArrayHierarchicalPointer>((p) => new CustomGuardError(p)));
