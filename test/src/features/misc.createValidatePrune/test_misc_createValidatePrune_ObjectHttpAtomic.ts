import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_misc_createValidatePrune_ObjectHttpAtomic =
  _test_misc_validatePrune("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )(typia.misc.createValidatePrune<ObjectHttpAtomic>());
