import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_ObjectHttpUndefindable =
  _test_misc_assertPrune(TypeGuardError)(
    "ObjectHttpUndefindable",
  )<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
    typia.misc.createAssertPrune<ObjectHttpUndefindable>(),
  );
