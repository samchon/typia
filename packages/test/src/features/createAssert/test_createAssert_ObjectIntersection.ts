import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createAssert_ObjectIntersection = _test_assert(
  "ObjectIntersection",
)<ObjectIntersection>(ObjectIntersection)(
  typia.createAssert<ObjectIntersection>(),
);
