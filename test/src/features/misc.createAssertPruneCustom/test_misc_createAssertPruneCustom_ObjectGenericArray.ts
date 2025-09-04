import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_misc_createAssertPruneCustom_ObjectGenericArray = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectGenericArray",
  )<ObjectGenericArray>(ObjectGenericArray)(
    typia.misc.createAssertPrune<ObjectGenericArray>(
      (p) => new CustomGuardError(p),
    ),
  );
