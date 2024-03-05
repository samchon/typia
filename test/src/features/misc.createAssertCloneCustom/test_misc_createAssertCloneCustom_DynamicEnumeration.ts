import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_createAssertCloneCustom_DynamicEnumeration =
  _test_misc_assertClone(CustomGuardError)(
    "DynamicEnumeration",
  )<DynamicEnumeration>(DynamicEnumeration)(
    typia.misc.createAssertClone<DynamicEnumeration>(
      (p) => new CustomGuardError(p),
    ),
  );
