import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_createAssertGuardEquals_ObjectPartial =
  _test_assertGuardEquals(TypeGuardError)("ObjectPartial")<ObjectPartial>(
    ObjectPartial,
  )(typia.createAssertGuardEquals<ObjectPartial>());
