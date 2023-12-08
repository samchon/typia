import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_misc_createValidatePrune_DynamicTemplate =
  _test_misc_validatePrune("DynamicTemplate")<DynamicTemplate>(DynamicTemplate)(
    typia.misc.createValidatePrune<DynamicTemplate>(),
  );
