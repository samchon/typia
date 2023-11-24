import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_misc_createValidatePrune_TypeTagCustom =
  _test_misc_validatePrune("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)(
    typia.misc.createValidatePrune<TypeTagCustom>(),
  );
