import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_ArrayRepeatedRequired =
  _test_misc_assertClone(CustomGuardError)(
    "ArrayRepeatedRequired",
  )<ArrayRepeatedRequired>(ArrayRepeatedRequired)(
    typia.misc.createAssertClone<ArrayRepeatedRequired>(
      (p) => new CustomGuardError(p),
    ),
  );
