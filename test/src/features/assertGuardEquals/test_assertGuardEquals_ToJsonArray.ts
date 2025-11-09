import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_assertGuardEquals_ToJsonArray = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ToJsonArray")<ToJsonArray>(
    ToJsonArray,
  )((input) => typia.assertGuardEquals<ToJsonArray>(input));
