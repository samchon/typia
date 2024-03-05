import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_misc_createAssertPrune_ObjectGeneric = _test_misc_assertPrune(
  TypeGuardError,
)("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)(
  typia.misc.createAssertPrune<ObjectGeneric>(),
);
