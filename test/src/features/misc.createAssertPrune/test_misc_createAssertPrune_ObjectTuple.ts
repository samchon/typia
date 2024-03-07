import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectTuple } from "../../structures/ObjectTuple";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_ObjectTuple = _test_misc_assertPrune(
  TypeGuardError,
)("ObjectTuple")<ObjectTuple>(ObjectTuple)(
  typia.misc.createAssertPrune<ObjectTuple>(),
);
