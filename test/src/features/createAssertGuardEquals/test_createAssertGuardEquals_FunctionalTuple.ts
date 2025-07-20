import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_createAssertGuardEquals_FunctionalTuple = (): void =>
  _test_assertGuardEquals(TypeGuardError)("FunctionalTuple")<FunctionalTuple>(
    FunctionalTuple,
  )(typia.createAssertGuardEquals<FunctionalTuple>());
