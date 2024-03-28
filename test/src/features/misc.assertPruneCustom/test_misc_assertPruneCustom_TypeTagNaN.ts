import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_misc_assertPruneCustom_TypeTagNaN = _test_misc_assertPrune(
  CustomGuardError,
)("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)((input) =>
  typia.misc.assertPrune<TypeTagNaN>(input, (p) => new CustomGuardError(p)),
);
