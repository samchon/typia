import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_misc_createIsPrune_TypeTagFormat = _test_misc_isPrune(
  "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)(typia.misc.createIsPrune<TypeTagFormat>());
