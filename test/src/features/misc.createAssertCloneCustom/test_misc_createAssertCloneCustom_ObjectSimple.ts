import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectSimple } from "../../structures/ObjectSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_ObjectSimple =
  _test_misc_assertClone(CustomGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )(typia.misc.createAssertClone<ObjectSimple>((p) => new CustomGuardError(p)));
