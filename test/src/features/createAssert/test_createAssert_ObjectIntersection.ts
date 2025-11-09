import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createAssert_ObjectIntersection = (): void =>
  _test_assert(TypeGuardError)("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )(typia.createAssert<ObjectIntersection>());
