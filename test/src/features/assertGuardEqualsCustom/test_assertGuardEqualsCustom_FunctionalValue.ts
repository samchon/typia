import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_assertGuardEqualsCustom_FunctionalValue =
  _test_assertGuardEquals(CustomGuardError)("FunctionalValue")<FunctionalValue>(
    FunctionalValue,
  )((input) =>
    typia.assertGuardEquals<FunctionalValue>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
