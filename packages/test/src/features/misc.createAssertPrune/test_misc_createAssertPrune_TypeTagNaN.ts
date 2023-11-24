import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_misc_createAssertPrune_TypeTagNaN = _test_misc_assertPrune(
  "TypeTagNaN",
)<TypeTagNaN>(TypeTagNaN)(typia.misc.createAssertPrune<TypeTagNaN>());
