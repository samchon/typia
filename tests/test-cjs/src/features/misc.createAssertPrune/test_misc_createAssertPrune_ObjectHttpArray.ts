import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_misc_createAssertPrune_ObjectHttpArray = (): void =>
  _test_misc_assertPrune(TypeGuardError)("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )(typia.misc.createAssertPrune<ObjectHttpArray>());
