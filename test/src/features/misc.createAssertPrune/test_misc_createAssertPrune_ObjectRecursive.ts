import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_ObjectRecursive =
  _test_misc_assertPrune(TypeGuardError)("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive,
  )(typia.misc.createAssertPrune<ObjectRecursive>());
