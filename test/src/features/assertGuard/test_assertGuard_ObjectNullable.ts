import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_assertGuard_ObjectNullable = (): void =>
  _test_assertGuard(TypeGuardError)("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )((input) => typia.assertGuard<ObjectNullable>(input));
