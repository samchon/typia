import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_createAssertGuard_ArrayHierarchical = _test_assertGuard(
  TypeGuardError,
)("ArrayHierarchical")<ArrayHierarchical>(ArrayHierarchical)(
  typia.createAssertGuard<ArrayHierarchical>(),
);
