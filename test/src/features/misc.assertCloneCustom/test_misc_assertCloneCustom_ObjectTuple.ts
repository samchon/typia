import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_misc_assertCloneCustom_ObjectTuple = _test_misc_assertClone(
  CustomGuardError,
)("ObjectTuple")<ObjectTuple>(ObjectTuple)((input) =>
  typia.misc.assertClone<ObjectTuple>(input, (p) => new CustomGuardError(p)),
);
