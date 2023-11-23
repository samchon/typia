import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_misc_createAssertPrune_DynamicComposite =
  _test_misc_assertPrune("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )(typia.misc.createAssertPrune<DynamicComposite>());
