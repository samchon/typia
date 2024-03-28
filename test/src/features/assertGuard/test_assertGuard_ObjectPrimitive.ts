import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_assertGuard_ObjectPrimitive = _test_assertGuard(
  TypeGuardError,
)("ObjectPrimitive")<ObjectPrimitive>(ObjectPrimitive)((input) =>
  typia.assertGuard<ObjectPrimitive>(input),
);
