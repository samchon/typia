import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_assertEqualsFunction_FunctionalValue =
  _test_functional_assertEqualsFunction(TypeGuardError)("FunctionalValue")(
    FunctionalValue,
  )((p: (input: FunctionalValue) => FunctionalValue) =>
    typia.functional.assertEqualsFunction(p),
  );
