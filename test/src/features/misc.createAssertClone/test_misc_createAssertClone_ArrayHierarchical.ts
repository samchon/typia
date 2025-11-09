import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_ArrayHierarchical = (): void => _test_misc_assertClone(TypeGuardError)(
    "ArrayHierarchical",
)<ArrayHierarchical>(
    ArrayHierarchical
)(typia.misc.createAssertClone<ArrayHierarchical>());
