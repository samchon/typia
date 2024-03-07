import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_TypeTagRange =
  _test_misc_assertPrune(CustomGuardError)("TypeTagRange")<TypeTagRange>(
    TypeTagRange,
  )(typia.misc.createAssertPrune<TypeTagRange>((p) => new CustomGuardError(p)));
