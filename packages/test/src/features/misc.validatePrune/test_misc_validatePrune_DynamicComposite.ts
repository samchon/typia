import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_misc_validatePrune_DynamicComposite =
  _test_misc_validatePrune("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )((input) => typia.misc.validatePrune<DynamicComposite>(input));
