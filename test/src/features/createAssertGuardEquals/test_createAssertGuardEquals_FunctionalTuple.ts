import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_FunctionalTuple =
  _test_assertGuardEquals(TypeGuardError)("FunctionalTuple")<FunctionalTuple>(
    FunctionalTuple,
  )(typia.createAssertGuardEquals<FunctionalTuple>());
