import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ArrayHierarchical = (): void => _test_assertGuard(CustomGuardError)(
    "ArrayHierarchical",
)<ArrayHierarchical>(
    ArrayHierarchical
)(typia.createAssertGuard<ArrayHierarchical>((p) => new CustomGuardError(p)));
