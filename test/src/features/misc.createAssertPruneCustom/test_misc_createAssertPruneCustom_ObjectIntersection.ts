import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_misc_createAssertPruneCustom_ObjectIntersection = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectIntersection",
  )<ObjectIntersection>(ObjectIntersection)(
    typia.misc.createAssertPrune<ObjectIntersection>(
      (p) => new CustomGuardError(p),
    ),
  );
