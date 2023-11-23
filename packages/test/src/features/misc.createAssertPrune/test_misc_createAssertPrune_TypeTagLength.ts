import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_misc_createAssertPrune_TypeTagLength = _test_misc_assertPrune(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)(typia.misc.createAssertPrune<TypeTagLength>());
