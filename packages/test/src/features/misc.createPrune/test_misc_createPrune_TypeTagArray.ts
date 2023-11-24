import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_misc_createPrune_TypeTagArray = _test_misc_prune(
  "TypeTagArray",
)<TypeTagArray>(TypeTagArray)(typia.misc.createPrune<TypeTagArray>());
