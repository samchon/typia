import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_misc_createAssertPruneCustom_ObjectGenericAlias =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectGenericAlias",
  )<ObjectGenericAlias>(ObjectGenericAlias)(
    typia.misc.createAssertPrune<ObjectGenericAlias>(
      (p) => new CustomGuardError(p),
    ),
  );
