import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_assertCustom_FunctionalValue = (): void =>
  _test_assert(CustomGuardError)("FunctionalValue")<FunctionalValue>(
    FunctionalValue,
  )((input) =>
    typia.assert<FunctionalValue>(input, (p) => new CustomGuardError(p)),
  );
