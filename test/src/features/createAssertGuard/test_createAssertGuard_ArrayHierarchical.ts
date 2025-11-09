import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ArrayHierarchical = (): void => _test_assertGuard(TypeGuardError)(
    "ArrayHierarchical",
)<ArrayHierarchical>(
    ArrayHierarchical
)(typia.createAssertGuard<ArrayHierarchical>());
