import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_misc_assertPruneCustom_ObjectIntersection = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectIntersection",
  )<ObjectIntersection>(ObjectIntersection)((input) =>
    typia.misc.assertPrune<ObjectIntersection>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
