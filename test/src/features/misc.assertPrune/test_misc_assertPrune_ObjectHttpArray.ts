import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_misc_assertPrune_ObjectHttpArray = (): void =>
  _test_misc_assertPrune(TypeGuardError)("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )((input) => typia.misc.assertPrune<ObjectHttpArray>(input));
