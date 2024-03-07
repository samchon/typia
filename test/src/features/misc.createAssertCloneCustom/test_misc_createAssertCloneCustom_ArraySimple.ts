import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArraySimple } from "../../structures/ArraySimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_ArraySimple =
  _test_misc_assertClone(CustomGuardError)("ArraySimple")<ArraySimple>(
    ArraySimple,
  )(typia.misc.createAssertClone<ArraySimple>((p) => new CustomGuardError(p)));
