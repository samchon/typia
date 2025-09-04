import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createAssertGuardEquals_ObjectRecursive = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive,
  )(typia.createAssertGuardEquals<ObjectRecursive>());
