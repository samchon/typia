import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_misc_assertPrune_ObjectUndefined = (): void =>
  _test_misc_assertPrune(TypeGuardError)("ObjectUndefined")<ObjectUndefined>(
    ObjectUndefined,
  )((input) => typia.misc.assertPrune<ObjectUndefined>(input));
