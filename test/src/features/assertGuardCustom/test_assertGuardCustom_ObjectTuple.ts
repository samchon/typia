import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectTuple } from "../../structures/ObjectTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ObjectTuple = _test_assertGuard(
  CustomGuardError,
)("ObjectTuple")<ObjectTuple>(ObjectTuple)((input) =>
  typia.assertGuard<ObjectTuple>(input, (p) => new CustomGuardError(p)),
);
