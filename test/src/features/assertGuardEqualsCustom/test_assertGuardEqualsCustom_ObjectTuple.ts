import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_assertGuardEqualsCustom_ObjectTuple = _test_assertGuardEquals(
  CustomGuardError,
)("ObjectTuple")<ObjectTuple>(ObjectTuple)((input) =>
  typia.assertGuardEquals<ObjectTuple>(input, (p) => new CustomGuardError(p)),
);
