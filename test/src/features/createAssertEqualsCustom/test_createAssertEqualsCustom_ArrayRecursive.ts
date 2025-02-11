import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_createAssertEqualsCustom_ArrayRecursive = _test_assertEquals(
  CustomGuardError,
)("ArrayRecursive")<ArrayRecursive>(ArrayRecursive)(
  typia.createAssertEquals<ArrayRecursive>((p) => new CustomGuardError(p)),
);
