import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_assertParametersAsync_FunctionalProperty =
  _test_functional_assertParametersAsync(TypeGuardError)("FunctionalProperty")(
    FunctionalProperty,
  )((p: (input: FunctionalProperty) => Promise<FunctionalProperty>) =>
    typia.functional.assertParameters(p),
  );
