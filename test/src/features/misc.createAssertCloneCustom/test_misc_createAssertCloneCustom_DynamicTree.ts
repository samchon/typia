import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_misc_createAssertCloneCustom_DynamicTree =
  _test_misc_assertClone(CustomGuardError)("DynamicTree")<DynamicTree>(
    DynamicTree,
  )(typia.misc.createAssertClone<DynamicTree>((p) => new CustomGuardError(p)));
