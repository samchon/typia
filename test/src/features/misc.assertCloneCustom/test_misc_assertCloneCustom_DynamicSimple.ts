import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicSimple } from "../../structures/DynamicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_DynamicSimple = _test_misc_assertClone(
  CustomGuardError,
)("DynamicSimple")<DynamicSimple>(DynamicSimple)((input) =>
  typia.misc.assertClone<DynamicSimple>(input, (p) => new CustomGuardError(p)),
);
