import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ArrayRecursive = _test_assertEquals(
  CustomGuardError,
)("ArrayRecursive")<ArrayRecursive>(ArrayRecursive)((input) =>
  typia.assertEquals<ArrayRecursive>(input, (p) => new CustomGuardError(p)),
);
