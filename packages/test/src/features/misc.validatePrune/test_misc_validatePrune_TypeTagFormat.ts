import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_misc_validatePrune_TypeTagFormat = _test_misc_validatePrune(
  "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)((input) =>
  typia.misc.validatePrune<TypeTagFormat>(input),
);
