import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_assertGuardEquals_ObjectRecursive = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive,
  )((input) => typia.assertGuardEquals<ObjectRecursive>(input));
