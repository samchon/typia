import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_misc_assertClone_DynamicConstant = _test_misc_assertClone(
  TypeGuardError,
)("DynamicConstant")<DynamicConstant>(DynamicConstant)((input) =>
  typia.misc.assertClone<DynamicConstant>(input),
);
