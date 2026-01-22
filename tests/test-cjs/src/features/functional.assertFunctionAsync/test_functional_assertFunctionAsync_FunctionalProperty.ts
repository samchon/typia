import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_assertFunctionAsync_FunctionalProperty =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("FunctionalProperty")(
      FunctionalProperty,
    )((p: (input: FunctionalProperty) => Promise<FunctionalProperty>) =>
      typia.functional.assertFunction(p),
    );
