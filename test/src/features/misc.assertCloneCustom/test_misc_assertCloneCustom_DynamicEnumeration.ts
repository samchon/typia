import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_assertCloneCustom_DynamicEnumeration = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "DynamicEnumeration",
  )<DynamicEnumeration>(DynamicEnumeration)((input) =>
    typia.misc.assertClone<DynamicEnumeration>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
