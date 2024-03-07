import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_validateEqualsParametersAsync_FunctionalValue =
  _test_functional_validateEqualsParametersAsync("FunctionalValue")(
    FunctionalValue,
  )((p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
    typia.functional.validateEqualsParameters(p),
  );
