import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_assertGuardCustom_ObjectPrimitive = _test_assertGuard(
  CustomGuardError,
)("ObjectPrimitive")<ObjectPrimitive>(ObjectPrimitive)((input) =>
  typia.assertGuard<ObjectPrimitive>(input, (p) => new CustomGuardError(p)),
);
