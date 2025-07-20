import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createAssertGuardEquals_ObjectUndefined = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ObjectUndefined")<ObjectUndefined>(
    ObjectUndefined,
  )(typia.createAssertGuardEquals<ObjectUndefined>());
