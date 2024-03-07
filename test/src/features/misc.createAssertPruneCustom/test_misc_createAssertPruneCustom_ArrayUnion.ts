import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayUnion } from "../../structures/ArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_ArrayUnion =
  _test_misc_assertPrune(CustomGuardError)("ArrayUnion")<ArrayUnion>(
    ArrayUnion,
  )(typia.misc.createAssertPrune<ArrayUnion>((p) => new CustomGuardError(p)));
