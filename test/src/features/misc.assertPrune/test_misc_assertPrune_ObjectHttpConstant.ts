import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_misc_assertPrune_ObjectHttpConstant = _test_misc_assertPrune(
  TypeGuardError,
)("ObjectHttpConstant")<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
  typia.misc.assertPrune<ObjectHttpConstant>(input),
);
