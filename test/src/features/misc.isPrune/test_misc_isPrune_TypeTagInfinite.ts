import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_misc_isPrune_TypeTagInfinite = _test_misc_isPrune(
  "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)((input) =>
  typia.misc.isPrune<TypeTagInfinite>(input),
);
