import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_misc_createIsPrune_TypeTagNaN = _test_misc_isPrune(
  "TypeTagNaN",
)<TypeTagNaN>(TypeTagNaN)(typia.misc.createIsPrune<TypeTagNaN>());
