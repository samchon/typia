import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_misc_createAssertCloneCustom_ObjectDate =
  _test_misc_assertClone(CustomGuardError)("ObjectDate")<ObjectDate>(
    ObjectDate,
  )(typia.misc.createAssertClone<ObjectDate>((p) => new CustomGuardError(p)));
