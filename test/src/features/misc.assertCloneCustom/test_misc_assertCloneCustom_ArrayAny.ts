import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_misc_assertCloneCustom_ArrayAny = _test_misc_assertClone(
  CustomGuardError,
)("ArrayAny")<ArrayAny>(ArrayAny)((input) =>
  typia.misc.assertClone<ArrayAny>(input, (p) => new CustomGuardError(p)),
);
