import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_createAssertCustom_ArrayRecursive = _test_assert(
  CustomGuardError,
)("ArrayRecursive")<ArrayRecursive>(ArrayRecursive)(
  typia.createAssert<ArrayRecursive>((p) => new CustomGuardError(p)),
);
