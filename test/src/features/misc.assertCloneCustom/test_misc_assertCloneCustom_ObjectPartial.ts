import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_misc_assertCloneCustom_ObjectPartial = _test_misc_assertClone(
  CustomGuardError,
)("ObjectPartial")<ObjectPartial>(ObjectPartial)((input) =>
  typia.misc.assertClone<ObjectPartial>(input, (p) => new CustomGuardError(p)),
);
