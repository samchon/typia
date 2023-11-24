import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_misc_validatePrune_TypeTagDefault = _test_misc_validatePrune(
  "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)((input) =>
  typia.misc.validatePrune<TypeTagDefault>(input),
);
