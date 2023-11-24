import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_misc_createIsPrune_TypeTagLength = _test_misc_isPrune(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)(typia.misc.createIsPrune<TypeTagLength>());
