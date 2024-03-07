import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicNever } from "../../structures/DynamicNever";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_DynamicNever = _test_misc_assertClone(
  CustomGuardError,
)("DynamicNever")<DynamicNever>(DynamicNever)((input) =>
  typia.misc.assertClone<DynamicNever>(input, (p) => new CustomGuardError(p)),
);
