import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_ObjectIntersection = _test_misc_assertPrune(
  TypeGuardError,
)("ObjectIntersection")<ObjectIntersection>(ObjectIntersection)((input) =>
  typia.misc.assertPrune<ObjectIntersection>(input),
);
