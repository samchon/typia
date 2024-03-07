import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ObjectHttpArray = _test_assertGuard(
  TypeGuardError,
)("ObjectHttpArray")<ObjectHttpArray>(ObjectHttpArray)(
  typia.createAssertGuard<ObjectHttpArray>(),
);
