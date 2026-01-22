import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_assert_ObjectIntersection = (): void =>
  _test_assert(TypeGuardError)("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )((input) => typia.assert<ObjectIntersection>(input));
