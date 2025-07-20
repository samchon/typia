import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_assertFunction_FunctionalValue = (): void =>
  _test_functional_assertFunction(TypeGuardError)("FunctionalValue")(
    FunctionalValue,
  )((p: (input: FunctionalValue) => FunctionalValue) =>
    typia.functional.assertFunction(p),
  );
