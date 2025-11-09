import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_assertEquals_ObjectIntersection = (): void =>
  _test_assertEquals(TypeGuardError)("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )((input) => typia.assertEquals<ObjectIntersection>(input));
