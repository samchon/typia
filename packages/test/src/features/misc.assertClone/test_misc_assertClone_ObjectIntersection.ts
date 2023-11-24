import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_misc_assertClone_ObjectIntersection = _test_misc_assertClone(
  "ObjectIntersection",
)<ObjectIntersection>(ObjectIntersection)((input) =>
  typia.misc.assertClone<ObjectIntersection>(input),
);
