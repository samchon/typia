import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_assertGuardCustom_ArrayHierarchical = _test_assertGuard(
  CustomGuardError,
)("ArrayHierarchical")<ArrayHierarchical>(ArrayHierarchical)((input) =>
  typia.assertGuard<ArrayHierarchical>(input, (p) => new CustomGuardError(p)),
);
