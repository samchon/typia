import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_misc_createIsPrune_DynamicComposite = _test_misc_isPrune(
  "DynamicComposite",
)<DynamicComposite>(DynamicComposite)(
  typia.misc.createIsPrune<DynamicComposite>(),
);
