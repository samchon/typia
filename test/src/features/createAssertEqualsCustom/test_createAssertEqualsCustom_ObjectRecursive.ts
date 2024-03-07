import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ObjectRecursive = _test_assertEquals(
  CustomGuardError,
)("ObjectRecursive")<ObjectRecursive>(ObjectRecursive)(
  typia.createAssertEquals<ObjectRecursive>((p) => new CustomGuardError(p)),
);
