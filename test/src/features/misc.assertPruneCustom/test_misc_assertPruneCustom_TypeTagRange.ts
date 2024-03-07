import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_TypeTagRange = _test_misc_assertPrune(
  CustomGuardError,
)("TypeTagRange")<TypeTagRange>(TypeTagRange)((input) =>
  typia.misc.assertPrune<TypeTagRange>(input, (p) => new CustomGuardError(p)),
);
