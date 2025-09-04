import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_createAssertGuardEquals_ToJsonTuple = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ToJsonTuple")<ToJsonTuple>(
    ToJsonTuple,
  )(typia.createAssertGuardEquals<ToJsonTuple>());
