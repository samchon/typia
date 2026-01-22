import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_misc_assertPrune_DynamicTemplate = (): void =>
  _test_misc_assertPrune(TypeGuardError)("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )((input) => typia.misc.assertPrune<DynamicTemplate>(input));
