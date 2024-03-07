import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ObjectRequired =
  _test_assertGuardEquals(TypeGuardError)("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )(typia.createAssertGuardEquals<ObjectRequired>());
