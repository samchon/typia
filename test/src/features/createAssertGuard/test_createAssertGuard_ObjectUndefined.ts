import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createAssertGuard_ObjectUndefined = _test_assertGuard(
  TypeGuardError,
)("ObjectUndefined")<ObjectUndefined>(ObjectUndefined)(
  typia.createAssertGuard<ObjectUndefined>(),
);
