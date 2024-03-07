import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_ObjectGeneric =
  _test_misc_assertPrune(CustomGuardError)("ObjectGeneric")<ObjectGeneric>(
    ObjectGeneric,
  )(
    typia.misc.createAssertPrune<ObjectGeneric>((p) => new CustomGuardError(p)),
  );
