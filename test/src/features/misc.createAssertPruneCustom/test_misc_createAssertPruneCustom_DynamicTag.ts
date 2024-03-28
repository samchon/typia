import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_misc_createAssertPruneCustom_DynamicTag =
  _test_misc_assertPrune(CustomGuardError)("DynamicTag")<DynamicTag>(
    DynamicTag,
  )(typia.misc.createAssertPrune<DynamicTag>((p) => new CustomGuardError(p)));
