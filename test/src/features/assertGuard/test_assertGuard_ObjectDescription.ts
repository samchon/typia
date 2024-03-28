import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_assertGuard_ObjectDescription = _test_assertGuard(
  TypeGuardError,
)("ObjectDescription")<ObjectDescription>(ObjectDescription)((input) =>
  typia.assertGuard<ObjectDescription>(input),
);
