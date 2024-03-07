import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_ObjectHttpConstant =
  _test_misc_assertPrune(TypeGuardError)(
    "ObjectHttpConstant",
  )<ObjectHttpConstant>(ObjectHttpConstant)(
    typia.misc.createAssertPrune<ObjectHttpConstant>(),
  );
