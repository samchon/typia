import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_assertCustom_ArrayHierarchical = _test_assert(
  CustomGuardError,
)("ArrayHierarchical")<ArrayHierarchical>(ArrayHierarchical)((input) =>
  typia.assert<ArrayHierarchical>(input, (p) => new CustomGuardError(p)),
);
