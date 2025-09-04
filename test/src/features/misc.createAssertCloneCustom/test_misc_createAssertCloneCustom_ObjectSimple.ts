import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_misc_createAssertCloneCustom_ObjectSimple = (): void =>
  _test_misc_assertClone(CustomGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )(typia.misc.createAssertClone<ObjectSimple>((p) => new CustomGuardError(p)));
