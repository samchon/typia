import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createAssertCustom_ObjectRecursive = _test_assert(
  CustomGuardError,
)("ObjectRecursive")<ObjectRecursive>(ObjectRecursive)(
  typia.createAssert<ObjectRecursive>((p) => new CustomGuardError(p)),
);
