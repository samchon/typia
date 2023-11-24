import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_misc_createAssertPrune_DynamicTemplate =
  _test_misc_assertPrune("DynamicTemplate")<DynamicTemplate>(DynamicTemplate)(
    typia.misc.createAssertPrune<DynamicTemplate>(),
  );
