import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_assertEqualsParameters_FunctionalValue =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)("FunctionalValue")(
      FunctionalValue,
    )((p: (input: FunctionalValue) => FunctionalValue) =>
      typia.functional.assertEqualsParameters(p),
    );
