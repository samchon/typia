import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createAssertEquals_ObjectRecursive = _test_assertEquals(
  TypeGuardError,
)("ObjectRecursive")<ObjectRecursive>(ObjectRecursive)(
  typia.createAssertEquals<ObjectRecursive>(),
);
