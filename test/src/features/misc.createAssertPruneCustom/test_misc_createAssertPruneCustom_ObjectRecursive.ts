import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_createAssertPruneCustom_ObjectRecursive =
  _test_misc_assertPrune(CustomGuardError)("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive,
  )(
    typia.misc.createAssertPrune<ObjectRecursive>(
      (p) => new CustomGuardError(p),
    ),
  );
