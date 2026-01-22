import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_assertEqualsReturnCustom_FunctionalValue =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("FunctionalValue")(
      FunctionalValue,
    )((p: (input: FunctionalValue) => FunctionalValue) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
