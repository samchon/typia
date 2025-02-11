import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_createAssertGuardCustom_ObjectTuple = _test_assertGuard(
  CustomGuardError,
)("ObjectTuple")<ObjectTuple>(ObjectTuple)(
  typia.createAssertGuard<ObjectTuple>((p) => new CustomGuardError(p)),
);
