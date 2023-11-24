import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_misc_createValidatePrune_ObjectPartial =
  _test_misc_validatePrune("ObjectPartial")<ObjectPartial>(ObjectPartial)(
    typia.misc.createValidatePrune<ObjectPartial>(),
  );
