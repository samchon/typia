import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_assertGuardEquals_ObjectUndefined = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ObjectUndefined")<ObjectUndefined>(
    ObjectUndefined,
  )((input) => typia.assertGuardEquals<ObjectUndefined>(input));
