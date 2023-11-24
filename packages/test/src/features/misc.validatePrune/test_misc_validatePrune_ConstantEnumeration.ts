import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_misc_validatePrune_ConstantEnumeration =
  _test_misc_validatePrune("ConstantEnumeration")<ConstantEnumeration>(
    ConstantEnumeration,
  )((input) => typia.misc.validatePrune<ConstantEnumeration>(input));
