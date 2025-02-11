import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_createAssertGuard_ObjectPartial = _test_assertGuard(
  TypeGuardError,
)("ObjectPartial")<ObjectPartial>(ObjectPartial)(
  typia.createAssertGuard<ObjectPartial>(),
);
