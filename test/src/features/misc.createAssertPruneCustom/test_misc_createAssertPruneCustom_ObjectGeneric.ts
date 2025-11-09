import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_misc_createAssertPruneCustom_ObjectGeneric = (): void =>
  _test_misc_assertPrune(CustomGuardError)("ObjectGeneric")<ObjectGeneric>(
    ObjectGeneric,
  )(
    typia.misc.createAssertPrune<ObjectGeneric>((p) => new CustomGuardError(p)),
  );
