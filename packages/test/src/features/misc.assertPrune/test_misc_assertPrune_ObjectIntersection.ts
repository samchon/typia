import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_misc_assertPrune_ObjectIntersection = _test_misc_assertPrune(
  "ObjectIntersection",
)<ObjectIntersection>(ObjectIntersection)((input) =>
  typia.misc.assertPrune<ObjectIntersection>(input),
);
