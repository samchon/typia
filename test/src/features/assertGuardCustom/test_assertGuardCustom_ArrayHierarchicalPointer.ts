import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ArrayHierarchicalPointer = (): void => _test_assertGuard(CustomGuardError)(
    "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer
)((input) => typia.assertGuard<ArrayHierarchicalPointer>(input, (p) => new CustomGuardError(p)));
