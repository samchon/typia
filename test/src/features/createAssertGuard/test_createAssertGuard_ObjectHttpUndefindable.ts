import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_createAssertGuard_ObjectHttpUndefindable = _test_assertGuard(
  TypeGuardError,
)("ObjectHttpUndefindable")<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
  typia.createAssertGuard<ObjectHttpUndefindable>(),
);
