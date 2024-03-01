import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_misc_createAssertCloneCustom_ArraySimple =
  _test_misc_assertClone(CustomGuardError)("ArraySimple")<ArraySimple>(
    ArraySimple,
  )(typia.misc.createAssertClone<ArraySimple>((p) => new CustomGuardError(p)));
