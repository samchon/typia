import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicTag } from "../../structures/DynamicTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_DynamicTag =
  _test_misc_assertPrune(CustomGuardError)("DynamicTag")<DynamicTag>(
    DynamicTag,
  )(typia.misc.createAssertPrune<DynamicTag>((p) => new CustomGuardError(p)));
