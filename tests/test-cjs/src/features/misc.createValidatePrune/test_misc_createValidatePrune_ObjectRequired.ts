import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_misc_createValidatePrune_ObjectRequired = (): void =>
  _test_misc_validatePrune("ObjectRequired")<ObjectRequired>(ObjectRequired)(
    typia.misc.createValidatePrune<ObjectRequired>(),
  );
