import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_misc_assertPruneCustom_ClassMethod = _test_misc_assertPrune(
  CustomGuardError,
)("ClassMethod")<ClassMethod>(ClassMethod)((input) =>
  typia.misc.assertPrune<ClassMethod>(input, (p) => new CustomGuardError(p)),
);
