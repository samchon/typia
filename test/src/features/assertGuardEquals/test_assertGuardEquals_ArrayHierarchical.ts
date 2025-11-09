import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_ArrayHierarchical = (): void => _test_assertGuardEquals(TypeGuardError)(
    "ArrayHierarchical",
)<ArrayHierarchical>(
    ArrayHierarchical
)((input) => typia.assertGuardEquals<ArrayHierarchical>(input));
