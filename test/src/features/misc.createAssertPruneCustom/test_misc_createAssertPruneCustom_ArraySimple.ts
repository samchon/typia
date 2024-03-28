import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_misc_createAssertPruneCustom_ArraySimple =
  _test_misc_assertPrune(CustomGuardError)("ArraySimple")<ArraySimple>(
    ArraySimple,
  )(typia.misc.createAssertPrune<ArraySimple>((p) => new CustomGuardError(p)));
