import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_assertFunctionCustom_FunctionalValue =
  _test_functional_assertFunction(CustomGuardError)("FunctionalValue")(
    FunctionalValue,
  )((p: (input: FunctionalValue) => FunctionalValue) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
