import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { TypeGuardError } from "typia";

export const test_assertGuard_ObjectHttpUndefindable = _test_assertGuard(
  TypeGuardError,
)("ObjectHttpUndefindable")<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
  (input) => typia.assertGuard<ObjectHttpUndefindable>(input),
);
