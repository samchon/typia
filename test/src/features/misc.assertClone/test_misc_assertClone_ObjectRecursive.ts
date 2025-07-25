import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_assertClone_ObjectRecursive = (): void =>
  _test_misc_assertClone(TypeGuardError)("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive,
  )((input) => typia.misc.assertClone<ObjectRecursive>(input));
