import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_equals_ObjectIntersection = _test_equals(
  "ObjectIntersection",
)<ObjectIntersection>(ObjectIntersection)((input) =>
  typia.equals<ObjectIntersection>(input),
);
