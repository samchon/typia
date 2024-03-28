import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_misc_assertClone_DynamicNever = _test_misc_assertClone(
  TypeGuardError,
)("DynamicNever")<DynamicNever>(DynamicNever)((input) =>
  typia.misc.assertClone<DynamicNever>(input),
);
