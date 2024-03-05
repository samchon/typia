import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_misc_createAssertPruneCustom_ObjectRequired =
  _test_misc_assertPrune(CustomGuardError)("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )(
    typia.misc.createAssertPrune<ObjectRequired>(
      (p) => new CustomGuardError(p),
    ),
  );
