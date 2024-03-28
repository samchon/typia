import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_createAssertGuardEquals_ObjectRequired =
  _test_assertGuardEquals(TypeGuardError)("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )(typia.createAssertGuardEquals<ObjectRequired>());
