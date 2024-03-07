import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_isParametersAsync_FunctionalValue =
  _test_functional_isParametersAsync("FunctionalValue")(FunctionalValue)(
    (p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
      typia.functional.isParameters(p),
  );
