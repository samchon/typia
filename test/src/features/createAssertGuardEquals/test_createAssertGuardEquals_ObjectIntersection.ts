import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createAssertGuardEquals_ObjectIntersection =
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectIntersection",
  )<ObjectIntersection>(ObjectIntersection)(
    typia.createAssertGuardEquals<ObjectIntersection>(),
  );
