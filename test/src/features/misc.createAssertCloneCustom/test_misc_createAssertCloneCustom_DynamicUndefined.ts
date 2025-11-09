import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_misc_createAssertCloneCustom_DynamicUndefined = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "DynamicUndefined",
  )<DynamicUndefined>(DynamicUndefined)(
    typia.misc.createAssertClone<DynamicUndefined>(
      (p) => new CustomGuardError(p),
    ),
  );
