import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_assertGuardEquals_ObjectPartial = _test_assertGuardEquals(
  TypeGuardError,
)("ObjectPartial")<ObjectPartial>(ObjectPartial)((input) =>
  typia.assertGuardEquals<ObjectPartial>(input),
);
