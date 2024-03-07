import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_validateParametersAsync_FunctionalValue =
  _test_functional_validateParametersAsync("FunctionalValue")(FunctionalValue)(
    (p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
      typia.functional.validateParameters(p),
  );
