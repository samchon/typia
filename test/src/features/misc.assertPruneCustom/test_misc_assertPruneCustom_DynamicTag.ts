import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_misc_assertPruneCustom_DynamicTag = _test_misc_assertPrune(
  CustomGuardError,
)("DynamicTag")<DynamicTag>(DynamicTag)((input) =>
  typia.misc.assertPrune<DynamicTag>(input, (p) => new CustomGuardError(p)),
);
