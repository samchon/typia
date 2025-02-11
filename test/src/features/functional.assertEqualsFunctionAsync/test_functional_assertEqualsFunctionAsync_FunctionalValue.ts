import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_assertEqualsFunctionAsync_FunctionalValue =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("FunctionalValue")(
    FunctionalValue,
  )((p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
    typia.functional.assertEqualsFunction(p),
  );
