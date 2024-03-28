import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_misc_assertPruneCustom_ArraySimple = _test_misc_assertPrune(
  CustomGuardError,
)("ArraySimple")<ArraySimple>(ArraySimple)((input) =>
  typia.misc.assertPrune<ArraySimple>(input, (p) => new CustomGuardError(p)),
);
