import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_misc_createIsPrune_TypeTagInfinite = _test_misc_isPrune(
  "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)(
  typia.misc.createIsPrune<TypeTagInfinite>(),
);
