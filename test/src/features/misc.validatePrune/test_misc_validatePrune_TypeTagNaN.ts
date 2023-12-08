import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_misc_validatePrune_TypeTagNaN = _test_misc_validatePrune(
  "TypeTagNaN",
)<TypeTagNaN>(TypeTagNaN)((input) =>
  typia.misc.validatePrune<TypeTagNaN>(input),
);
