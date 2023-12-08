import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_misc_validatePrune_TypeTagPattern = _test_misc_validatePrune(
  "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)((input) =>
  typia.misc.validatePrune<TypeTagPattern>(input),
);
