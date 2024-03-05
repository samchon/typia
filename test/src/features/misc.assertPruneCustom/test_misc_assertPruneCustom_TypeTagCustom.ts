import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_misc_assertPruneCustom_TypeTagCustom = _test_misc_assertPrune(
  CustomGuardError,
)("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)((input) =>
  typia.misc.assertPrune<TypeTagCustom>(input, (p) => new CustomGuardError(p)),
);
