import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createAssertEquals_ObjectIntersection = _test_assertEquals(
  TypeGuardError,
)("ObjectIntersection")<ObjectIntersection>(ObjectIntersection)(
  typia.createAssertEquals<ObjectIntersection>(),
);
