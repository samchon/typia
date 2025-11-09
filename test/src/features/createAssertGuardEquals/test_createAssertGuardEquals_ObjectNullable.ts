import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createAssertGuardEquals_ObjectNullable = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )(typia.createAssertGuardEquals<ObjectNullable>());
