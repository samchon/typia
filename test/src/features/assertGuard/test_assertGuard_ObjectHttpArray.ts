import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_assertGuard_ObjectHttpArray = _test_assertGuard(
  TypeGuardError,
)("ObjectHttpArray")<ObjectHttpArray>(ObjectHttpArray)((input) =>
  typia.assertGuard<ObjectHttpArray>(input),
);
