import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_validateFunctionAsync_FunctionalProperty =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("FunctionalProperty")(
      FunctionalProperty,
    )((p: (input: FunctionalProperty) => Promise<FunctionalProperty>) =>
      typia.functional.validateFunction(p),
    );
