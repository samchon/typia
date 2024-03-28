import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_misc_createAssertPrune_ObjectIntersection =
  _test_misc_assertPrune(TypeGuardError)(
    "ObjectIntersection",
  )<ObjectIntersection>(ObjectIntersection)(
    typia.misc.createAssertPrune<ObjectIntersection>(),
  );
