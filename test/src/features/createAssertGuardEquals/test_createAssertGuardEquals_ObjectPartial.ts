import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ObjectPartial =
  _test_assertGuardEquals(TypeGuardError)("ObjectPartial")<ObjectPartial>(
    ObjectPartial,
  )(typia.createAssertGuardEquals<ObjectPartial>());
