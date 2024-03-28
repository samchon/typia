import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_misc_createAssertPruneCustom_ObjectNullable =
  _test_misc_assertPrune(CustomGuardError)("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )(
    typia.misc.createAssertPrune<ObjectNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
