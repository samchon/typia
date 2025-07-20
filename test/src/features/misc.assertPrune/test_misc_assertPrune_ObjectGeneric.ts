import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_misc_assertPrune_ObjectGeneric = (): void =>
  _test_misc_assertPrune(TypeGuardError)("ObjectGeneric")<ObjectGeneric>(
    ObjectGeneric,
  )((input) => typia.misc.assertPrune<ObjectGeneric>(input));
