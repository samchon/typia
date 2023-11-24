import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_misc_assertPrune_TypeTagMatrix = _test_misc_assertPrune(
  "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)((input) =>
  typia.misc.assertPrune<TypeTagMatrix>(input),
);
