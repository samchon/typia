import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_createAssertGuardEquals_FunctionalValue =
  _test_assertGuardEquals(TypeGuardError)("FunctionalValue")<FunctionalValue>(
    FunctionalValue,
  )(typia.createAssertGuardEquals<FunctionalValue>());
