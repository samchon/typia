import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_ToJsonDouble = _test_assertGuardEquals(
  TypeGuardError,
)("ToJsonDouble")<ToJsonDouble>(ToJsonDouble)((input) =>
  typia.assertGuardEquals<ToJsonDouble>(input),
);
