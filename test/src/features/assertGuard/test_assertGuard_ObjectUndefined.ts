import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_assertGuard_ObjectUndefined = (): void =>
  _test_assertGuard(TypeGuardError)("ObjectUndefined")<ObjectUndefined>(
    ObjectUndefined,
  )((input) => typia.assertGuard<ObjectUndefined>(input));
