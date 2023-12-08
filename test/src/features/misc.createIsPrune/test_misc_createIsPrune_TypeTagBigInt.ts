import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_misc_createIsPrune_TypeTagBigInt = _test_misc_isPrune(
  "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)(typia.misc.createIsPrune<TypeTagBigInt>());
