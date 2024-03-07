import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ObjectRecursive = _test_assertGuard(
  CustomGuardError,
)("ObjectRecursive")<ObjectRecursive>(ObjectRecursive)(
  typia.createAssertGuard<ObjectRecursive>((p) => new CustomGuardError(p)),
);
