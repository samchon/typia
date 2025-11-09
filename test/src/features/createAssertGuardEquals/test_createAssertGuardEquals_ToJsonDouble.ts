import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_createAssertGuardEquals_ToJsonDouble = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ToJsonDouble")<ToJsonDouble>(
    ToJsonDouble,
  )(typia.createAssertGuardEquals<ToJsonDouble>());
