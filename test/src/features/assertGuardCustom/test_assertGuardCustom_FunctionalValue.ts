import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_assertGuardCustom_FunctionalValue = (): void =>
  _test_assertGuard(CustomGuardError)("FunctionalValue")<FunctionalValue>(
    FunctionalValue,
  )((input) =>
    typia.assertGuard<FunctionalValue>(input, (p) => new CustomGuardError(p)),
  );
