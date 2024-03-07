import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_DynamicConstant = _test_misc_assertClone(
  TypeGuardError,
)("DynamicConstant")<DynamicConstant>(DynamicConstant)((input) =>
  typia.misc.assertClone<DynamicConstant>(input),
);
