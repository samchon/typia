import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_assertEqualsFunctionCustom_FunctionalValue =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)("FunctionalValue")(
      FunctionalValue,
    )((p: (input: FunctionalValue) => FunctionalValue) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
