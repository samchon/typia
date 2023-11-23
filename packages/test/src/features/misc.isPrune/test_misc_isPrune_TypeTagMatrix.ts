import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_misc_isPrune_TypeTagMatrix = _test_misc_isPrune(
  "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)((input) =>
  typia.misc.isPrune<TypeTagMatrix>(input),
);
