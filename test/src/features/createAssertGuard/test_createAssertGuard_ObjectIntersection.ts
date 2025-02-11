import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createAssertGuard_ObjectIntersection = _test_assertGuard(
  TypeGuardError,
)("ObjectIntersection")<ObjectIntersection>(ObjectIntersection)(
  typia.createAssertGuard<ObjectIntersection>(),
);
