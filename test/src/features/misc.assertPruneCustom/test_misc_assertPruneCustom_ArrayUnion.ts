import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_misc_assertPruneCustom_ArrayUnion = _test_misc_assertPrune(
  CustomGuardError,
)("ArrayUnion")<ArrayUnion>(ArrayUnion)((input) =>
  typia.misc.assertPrune<ArrayUnion>(input, (p) => new CustomGuardError(p)),
);
