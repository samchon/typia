import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_misc_createValidatePrune_ObjectSimple =
  _test_misc_validatePrune("ObjectSimple")<ObjectSimple>(ObjectSimple)(
    typia.misc.createValidatePrune<ObjectSimple>(),
  );
