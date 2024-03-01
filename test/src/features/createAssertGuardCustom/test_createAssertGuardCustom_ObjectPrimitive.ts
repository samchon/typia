import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createAssertGuardCustom_ObjectPrimitive = _test_assertGuard(
  CustomGuardError,
)("ObjectPrimitive")<ObjectPrimitive>(ObjectPrimitive)(
  typia.createAssertGuard<ObjectPrimitive>((p) => new CustomGuardError(p)),
);
