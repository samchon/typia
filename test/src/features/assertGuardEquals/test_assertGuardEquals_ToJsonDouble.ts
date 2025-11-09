import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_assertGuardEquals_ToJsonDouble = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ToJsonDouble")<ToJsonDouble>(
    ToJsonDouble,
  )((input) => typia.assertGuardEquals<ToJsonDouble>(input));
