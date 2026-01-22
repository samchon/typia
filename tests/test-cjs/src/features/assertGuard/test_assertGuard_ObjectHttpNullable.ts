import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_assertGuard_ObjectHttpNullable = (): void =>
  _test_assertGuard(TypeGuardError)("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )((input) => typia.assertGuard<ObjectHttpNullable>(input));
