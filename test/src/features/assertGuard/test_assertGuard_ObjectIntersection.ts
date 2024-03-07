import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

import { TypeGuardError } from "typia";

export const test_assertGuard_ObjectIntersection = _test_assertGuard(
  TypeGuardError,
)("ObjectIntersection")<ObjectIntersection>(ObjectIntersection)((input) =>
  typia.assertGuard<ObjectIntersection>(input),
);
