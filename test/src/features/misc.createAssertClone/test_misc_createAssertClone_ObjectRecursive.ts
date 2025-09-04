import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_createAssertClone_ObjectRecursive = (): void =>
  _test_misc_assertClone(TypeGuardError)("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive,
  )(typia.misc.createAssertClone<ObjectRecursive>());
