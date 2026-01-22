import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_validateFunctionAsync_FunctionalValue =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("FunctionalValue")(FunctionalValue)(
      (p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
        typia.functional.validateFunction(p),
    );
