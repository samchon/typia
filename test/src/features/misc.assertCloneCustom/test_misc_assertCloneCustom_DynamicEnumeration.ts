import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_DynamicEnumeration =
  _test_misc_assertClone(CustomGuardError)(
    "DynamicEnumeration",
  )<DynamicEnumeration>(DynamicEnumeration)((input) =>
    typia.misc.assertClone<DynamicEnumeration>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
