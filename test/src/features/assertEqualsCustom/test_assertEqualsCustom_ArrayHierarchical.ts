import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_assertEqualsCustom_ArrayHierarchical = _test_assertEquals(
  CustomGuardError,
)("ArrayHierarchical")<ArrayHierarchical>(ArrayHierarchical)((input) =>
  typia.assertEquals<ArrayHierarchical>(input, (p) => new CustomGuardError(p)),
);
