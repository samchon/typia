import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonNull } from "../../structures/ToJsonNull";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_ToJsonNull = _test_assertGuardEquals(
  TypeGuardError,
)("ToJsonNull")<ToJsonNull>(ToJsonNull)((input) =>
  typia.assertGuardEquals<ToJsonNull>(input),
);
