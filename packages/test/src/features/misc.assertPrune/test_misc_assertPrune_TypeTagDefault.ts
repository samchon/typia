import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_misc_assertPrune_TypeTagDefault = _test_misc_assertPrune(
  "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)((input) =>
  typia.misc.assertPrune<TypeTagDefault>(input),
);
