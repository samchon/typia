import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_misc_createAssertCloneCustom_ArrayAny =
  _test_misc_assertClone(CustomGuardError)("ArrayAny")<ArrayAny>(ArrayAny)(
    typia.misc.createAssertClone<ArrayAny>((p) => new CustomGuardError(p)),
  );
