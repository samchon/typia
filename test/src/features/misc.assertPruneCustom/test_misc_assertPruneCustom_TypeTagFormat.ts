import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_TypeTagFormat = _test_misc_assertPrune(
  CustomGuardError,
)("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)((input) =>
  typia.misc.assertPrune<TypeTagFormat>(input, (p) => new CustomGuardError(p)),
);
