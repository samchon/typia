import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

import { TypeGuardError } from "typia";

export const test_createAssert_ObjectIntersection = _test_assert(
  TypeGuardError,
)("ObjectIntersection")<ObjectIntersection>(ObjectIntersection)(
  typia.createAssert<ObjectIntersection>(),
);
