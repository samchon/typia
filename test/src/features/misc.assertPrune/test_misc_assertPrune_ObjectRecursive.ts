import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_assertPrune_ObjectRecursive = _test_misc_assertPrune(
  TypeGuardError,
)("ObjectRecursive")<ObjectRecursive>(ObjectRecursive)((input) =>
  typia.misc.assertPrune<ObjectRecursive>(input),
);
