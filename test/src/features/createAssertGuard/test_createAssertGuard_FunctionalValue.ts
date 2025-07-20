import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_createAssertGuard_FunctionalValue = (): void =>
  _test_assertGuard(TypeGuardError)("FunctionalValue")<FunctionalValue>(
    FunctionalValue,
  )(typia.createAssertGuard<FunctionalValue>());
