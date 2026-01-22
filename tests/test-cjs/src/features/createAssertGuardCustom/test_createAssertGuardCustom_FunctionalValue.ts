import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_createAssertGuardCustom_FunctionalValue = (): void =>
  _test_assertGuard(CustomGuardError)("FunctionalValue")<FunctionalValue>(
    FunctionalValue,
  )(typia.createAssertGuard<FunctionalValue>((p) => new CustomGuardError(p)));
