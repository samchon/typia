import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_assertParameters_FunctionalValue =
  _test_functional_assertParameters(TypeGuardError)("FunctionalValue")(
    FunctionalValue,
  )((p: (input: FunctionalValue) => FunctionalValue) =>
    typia.functional.assertParameters(p),
  );
