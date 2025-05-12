import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_assertReturn_FunctionalValue =
  _test_functional_assertReturn(TypeGuardError)("FunctionalValue")(
    FunctionalValue,
  )((p: (input: FunctionalValue) => FunctionalValue) =>
    typia.functional.assertReturn(p),
  );
