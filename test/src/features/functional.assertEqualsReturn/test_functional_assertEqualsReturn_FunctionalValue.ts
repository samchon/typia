import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_assertEqualsReturn_FunctionalValue =
  _test_functional_assertEqualsReturn(TypeGuardError)("FunctionalValue")(
    FunctionalValue,
  )((p: (input: FunctionalValue) => FunctionalValue) =>
    typia.functional.assertEqualsReturn(p),
  );
