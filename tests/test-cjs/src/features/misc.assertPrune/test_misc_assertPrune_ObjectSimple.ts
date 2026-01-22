import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_misc_assertPrune_ObjectSimple = (): void =>
  _test_misc_assertPrune(TypeGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )((input) => typia.misc.assertPrune<ObjectSimple>(input));
